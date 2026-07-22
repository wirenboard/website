<script setup lang="ts">
import Textarea from '~/components/Textarea.vue';
import Select from '~/components/Select.vue';
import { RUSSIA_ID, type RecentOrg } from '~/common/types';

const { t } = useI18n();
const payerType = defineModel<string>('payerType');
const individual = defineModel<{ fio: string; phone: string; additional: string; email: string; comment: string; }>('individual');
const entity = defineModel<{ fio: string; phone: string; additional: string; inn: string; kpp: string; orgName: string; address: string; email: string; comment: string; }>('entity', {required: true});
const country = defineModel<number>('country');

const { countries, cdekCountries, recentOrgs } = defineProps<{
  countries: Record<number, string>;
  cdekCountries: number[];
  recentOrgs?: RecentOrg[];
}>();

const recentOrgSuggestions = computed(() =>
  (recentOrgs ?? []).map(org => ({
    value: org.orgName,
    data: {
      inn: org.inn,
      kpp: org.kpp,
      name: { short_with_opf: org.orgName },
      address: { unrestricted_value: org.address },
    },
  }))
);

if (entity.value && individual.value) {
  if (!entity.value.fio) entity.value.fio = individual.value.fio;
  if (!entity.value.phone) entity.value.phone = individual.value.phone;
  if (!entity.value.additional) entity.value.additional = individual.value.additional;
  if (!entity.value.email) entity.value.email = individual.value.email;
}

const isRussia = computed(() => country.value === RUSSIA_ID);
// Добавочный номер показываем только для стран, куда доступна доставка СДЭК.
const isCdekCountry = computed(() => !!country.value && cdekCountries.includes(country.value));

const hasSavedOrg = !!(entity.value?.inn || entity.value?.orgName);
const orgMode = ref<'search' | 'fields'>(isRussia.value && !hasSavedOrg ? 'search' : 'fields');
const orgFromSearch = ref(isRussia.value && hasSavedOrg);
const orgSearchNoResults = ref(false);

const resetOrg = () => {
  entity.value = { ...entity.value, orgName: '', inn: '', kpp: '', address: '' };
  orgMode.value = isRussia.value ? 'search' : 'fields';
  orgFromSearch.value = false;
  orgSearchNoResults.value = false;
};

watch(country, () => {
  resetOrg();
});

const validateInn = (value: string): string => {
  const inn = value.replace(/\s/g, '');
  if (!/^\d{10}$|^\d{12}$/.test(inn)) return t('innInvalid');
  const d = inn.split('').map(Number);
  if (d.length === 10) {
    const check = [2, 4, 10, 3, 5, 9, 4, 6, 8].reduce((s, w, i) => s + w * d[i], 0) % 11 % 10;
    if (check !== d[9]) return t('innChecksum');
  } else {
    const c1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8].reduce((s, w, i) => s + w * d[i], 0) % 11 % 10;
    const c2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8].reduce((s, w, i) => s + w * d[i], 0) % 11 % 10;
    if (c1 !== d[10] || c2 !== d[11]) return t('innChecksum');
  }
  return '';
};

const validateEmail = (value: string): string => {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return t('emailInvalid');
  return '';
};

const onOrgSelect = ({ orgName, inn, kpp, address }: { orgName: string; inn: string; kpp: string; address: string }) => {
  entity.value.orgName = orgName;
  entity.value.inn = inn;
  entity.value.kpp = kpp;
  entity.value.address = address;
  orgMode.value = 'fields';
  orgFromSearch.value = true;
};


</script>

<template>
  <h2>{{ t('title') }}</h2>
  <div class="customer">
    <Select
      v-model="country"
      optionLabel="label"
      optionValue="id"
      :options="Object.entries(countries).map(([id, label]) => ({ id: Number(id), label }))"
      :placeholder="t('country')"
      is-searchable
      :show-clear="false"
      class="customer-country"
    />

    <div class="customer-radioGroup">
      <label class="customer-radio" tabindex="0" @keyup.enter="payerType = 'individual'">
        <input type="radio" name="payerType" value="individual" v-model="payerType" />
        {{ t('individual') }}
      </label>
      <label class="customer-radio" tabindex="0" @keyup.enter="payerType = 'entity'">
        <input type="radio" name="payerType" value="entity" v-model="payerType" />
        {{ t('entity') }}
      </label>
    </div>

    <template v-if="payerType === 'individual'">
      <div class="customer-fieldWrapper" :class="{ 'customer-fieldWrapper--withExt': isCdekCountry }">
        <Input v-model="individual!.fio" id="fio" :label="t('fio')" autocomplete="name" required autofocus />
        <Input v-model="individual!.phone" id="phone" :label="t('phone')" autocomplete="tel" inputmode="tel" required />
        <Input v-if="isCdekCountry" v-model="individual!.additional" id="additional" :label="t('additional')" autocomplete="off" inputmode="numeric" />
      </div>
      <Input v-model="individual!.email" id="email" :label="t('email')" autocomplete="email" inputmode="email" required :validator="validateEmail" />
      <Textarea v-model="individual!.comment" id="comment" :label="t('comment')" autocomplete="off" />
    </template>
    <template v-else>
      <div class="customer-fieldWrapper" :class="{ 'customer-fieldWrapper--withExt': isCdekCountry }">
        <Input v-model="entity!.fio" id="fio" :label="t('fio')" autocomplete="name" required autofocus />
        <Input v-model="entity!.phone" id="phone" :label="t('phone')" autocomplete="tel" inputmode="tel" required />
        <Input v-if="isCdekCountry" v-model="entity!.additional" id="additional" :label="t('additional')" autocomplete="off" inputmode="numeric" />
      </div>
      <Input v-model="entity!.email" id="email" :label="t('email')" autocomplete="email" inputmode="email" required :validator="validateEmail" />
      <template v-if="isRussia && orgMode === 'search'">
        <OrderOrgSearch required :recentSuggestions="recentOrgSuggestions" @select="onOrgSelect" @no-results="orgSearchNoResults = $event" />
        <button v-if="orgSearchNoResults" type="button" class="customer-manualBtn" @click="orgMode = 'fields'; orgFromSearch = false">{{ t('manualEntry') }}</button>
      </template>
      <template v-else>
        <template v-if="isRussia">
          <button type="button" class="customer-changeOrgBtn" @click="resetOrg">{{ t('changeOrg') }}</button>
        </template>
        <div class="customer-orgFieldWrapper" :class="{ 'customer-orgFieldWrapper--withKpp': isRussia }">
          <Input v-model="entity!.inn" id="inn" :label="t('inn')" autocomplete="off" inputmode="numeric" required :disabled="orgFromSearch" :validator="isRussia ? validateInn : undefined" />
          <Input v-if="isRussia" v-model="entity!.kpp" id="kpp" :label="t('kpp')" autocomplete="off" inputmode="numeric" pattern="[0-9]{9}" :title="t('kppFormat')" :disabled="orgFromSearch" />
          <Input v-model="entity!.orgName" id="orgName" :label="t('orgName')" autocomplete="organization" required :disabled="orgFromSearch" />
        </div>
        <Input v-model="entity!.address" id="address" :label="t('address')" autocomplete="street-address" required :disabled="orgFromSearch" />
      </template>
      <Textarea v-model="entity!.comment" id="comment" :label="t('comment')" autocomplete="off" />
    </template>
  </div>
</template>

<style scoped>
.customer {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.customer-fieldWrapper {
  display: grid;
  grid-template-columns: 3fr minmax(200px, 1fr);
  width: 100%;
  gap: 18px;
}

.customer-fieldWrapper--withExt {
  grid-template-columns: 3fr minmax(160px, 1fr) minmax(90px, 140px);
}

.customer-orgFieldWrapper {
  display: grid;
  grid-template-columns: 2fr 3fr;
  width: 100%;
  gap: 18px;
}

.customer-orgFieldWrapper--withKpp {
  grid-template-columns: minmax(140px, 1fr) minmax(140px, 1fr) 2fr;
}

.customer-manualBtn {
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: 16px;
  color: var(--danger-color);
  cursor: pointer;
  text-align: left;
}

.customer-manualBtn:hover {
  opacity: 0.75;
}

.customer-changeOrgBtn {
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: 16px;
  color: var(--link-color);
  cursor: pointer;
  width: fit-content;
}

.customer-changeOrgBtn:hover {
  opacity: 0.75;
}

.customer-country {
  display: flex;
  width: 100%;
}

.customer-radioGroup {
  display: flex;
}

.customer-radio {
  padding: 10px 14px;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2%;
  color: #e2e2e2;
  border: 1px solid var(--border-color);
  outline-offset: 0;
  transition: outline-offset 0.2s;
}

.customer-radio:focus {
  outline: 2px solid var(--link-color);
  outline-offset: 3px;
}

.customer-radio:first-child {
  border-radius: 2px 0 0 2px;
}

.customer-radio:last-of-type {
  border-radius: 0 2px 2px 0;
}

.customer-radio:has(input:checked) {
  background: var(--primary-color);
  border: 1px solid var(--primary-color);
  color: #fff;
}

.customer-radio input {
  display: none;
}

@media (max-width: 768px) {
  .customer-fieldWrapper,
  .customer-orgFieldWrapper,
  .customer-orgFieldWrapper--withKpp {
    grid-template-columns: 1fr;
  }
}
</style>

<i18n>
{
  "ru": {
    "title": "Введите информацию о покупателе",
    "country": "Страна",
    "individual": "Физическое лицо",
    "entity": "Юридическое лицо",
    "fio": "ФИО",
    "phone": "Номер телефона",
    "additional": "Добавочный",
    "email": "Email",
    "comment": "Комментарий",
    "inn": "ИНН организации",
    "kpp": "КПП",
    "orgName": "Наименование организации",
    "address": "Юридический адрес",
    "innInvalid": "ИНН должен содержать 10 или 12 цифр",
    "innChecksum": "Неверный ИНН, проверьте правильность ввода",
    "emailInvalid": "Введите корректный email",
    "manualEntry": "Не удалось найти организацию, введите вручную →",
    "changeOrg": "← Изменить организацию",
    "kppFormat": "КПП — 9 цифр"
  },
  "en": {
    "title": "Enter the customer's information",
    "country": "Country",
    "individual": "Individuals",
    "entity": "Legal entities",
    "fio": "Full name",
    "phone": "Phone number",
    "additional": "Extension",
    "email": "Email",
    "comment": "Comment",
    "inn": "Taxpayer identification number",
    "kpp": "Tax Registration Reason Code",
    "orgName": "Full legal entity title",
    "address": "Legal address",
    "innInvalid": "TIN must contain 10 or 12 digits",
    "innChecksum": "Invalid TIN, please check your input",
    "emailInvalid": "Please enter a valid email address",
    "manualEntry": "Can't find your organization? Enter it manually →",
    "changeOrg": "← Change organization",
    "kppFormat": "KPP is 9 digits"
  }
}
</i18n>
