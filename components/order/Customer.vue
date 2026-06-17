<script setup lang="ts">
import Textarea from '~/components/Textarea.vue';
import Select from '~/components/Select.vue';
import { RUSSIA_ID, type RecentOrg } from '~/common/types';

const { t } = useI18n();
const payerType = defineModel<string>('payerType');
const individual = defineModel<{ fio: string; phone: string; email: string; comment: string; }>('individual');
const entity = defineModel<{ fio: string; phone: string; inn: string; orgName: string; address: string; email: string; comment: string; }>('entity', {required: true});
const country = defineModel<number>('country');

const { countries, recentOrgs } = defineProps<{
  countries: Record<number, string>;
  recentOrgs?: RecentOrg[];
}>();

const recentOrgSuggestions = computed(() =>
  (recentOrgs ?? []).map(org => ({
    value: org.orgName,
    data: {
      inn: org.inn,
      name: { short_with_opf: org.orgName },
      address: { unrestricted_value: org.address },
    },
  }))
);

if (entity.value && individual.value) {
  if (!entity.value.fio) entity.value.fio = individual.value.fio;
  if (!entity.value.phone) entity.value.phone = individual.value.phone;
  if (!entity.value.email) entity.value.email = individual.value.email;
}

const isRussia = computed(() => country.value === RUSSIA_ID);

const hasSavedOrg = !!(entity.value?.inn || entity.value?.orgName);
const orgMode = ref<'search' | 'fields'>(isRussia.value && !hasSavedOrg ? 'search' : 'fields');
const orgFromSearch = ref(isRussia.value && hasSavedOrg);
const orgSearchNoResults = ref(false);

const resetOrg = () => {
  entity.value = { ...entity.value, orgName: '', inn: '', address: '' };
  orgMode.value = isRussia.value ? 'search' : 'fields';
  orgFromSearch.value = false;
  orgSearchNoResults.value = false;
};

watch(country, () => {
  resetOrg();
});

const onOrgSelect = ({ orgName, inn, address }: { orgName: string; inn: string; address: string }) => {
  entity.value.orgName = orgName;
  entity.value.inn = inn;
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
        <input type="radio" value="individual" v-model="payerType" />
        {{ t('individual')}}
      </label>
      <label class="customer-radio" tabindex="0" @keyup.enter="payerType = 'entity'">
        <input type="radio" value="entity" v-model="payerType" />
        {{ t('entity')}}
      </label>
    </div>

    <template v-if="payerType === 'individual'">
      <div class="customer-fieldWrapper">
        <Input v-model="individual!.fio" id="fio" :label="t('fio')" autocomplete="name" required autofocus />
        <Input v-model="individual!.phone" id="phone" :label="t('phone')" autocomplete="tel" inputmode="tel" required />
      </div>
      <Input v-model="individual!.email" id="email" :label="t('email')" autocomplete="email" type="email" inputmode="email" required />
      <Textarea v-model="individual!.comment" id="comment" :label="t('comment')" autocomplete="off" />
    </template>
    <template v-else>
      <div class="customer-fieldWrapper">
        <Input v-model="entity!.fio" id="fio" :label="t('fio')" autocomplete="name" required autofocus />
        <Input v-model="entity!.phone" id="phone" :label="t('phone')" autocomplete="tel" inputmode="tel" required />
      </div>
      <Input v-model="entity!.email" id="email" :label="t('email')" autocomplete="email" type="email" inputmode="email" required />
      <template v-if="isRussia && orgMode === 'search'">
        <OrderOrgSearch :recentSuggestions="recentOrgSuggestions" @select="onOrgSelect" @no-results="orgSearchNoResults = $event" />
        <button v-if="orgSearchNoResults" type="button" class="customer-manualBtn" @click="orgMode = 'fields'; orgFromSearch = false">{{ t('manualEntry') }}</button>
      </template>
      <template v-else>
        <template v-if="isRussia">
          <button type="button" class="customer-changeOrgBtn" @click="resetOrg">{{ t('changeOrg') }}</button>
        </template>
        <div class="customer-orgFieldWrapper">
          <Input v-model="entity!.inn" id="inn" :label="t('inn')" autocomplete="off" inputmode="numeric" required :disabled="orgFromSearch" />
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

.customer-orgFieldWrapper {
  display: grid;
  grid-template-columns: 2fr 3fr;
  width: 100%;
  gap: 18px;
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
    "email": "Email",
    "comment": "Комментарий",
    "inn": "ИНН организации",
    "orgName": "Наименование организации",
    "address": "Юридический адрес",
    "manualEntry": "Не удалось найти организацию, введите вручную →",
    "changeOrg": "← Изменить организацию"
  },
  "en": {
    "title": "Enter the customer's information",
    "country": "Country",
    "individual": "Individuals",
    "entity": "Legal entities",
    "fio": "Full name",
    "phone": "Phone number",
    "email": "Email",
    "comment": "Comment",
    "inn": "Taxpayer identification number",
    "orgName": "Full legal entity title",
    "address": "Legal address",
    "manualEntry": "Can't find your organization? Enter it manually →",
    "changeOrg": "← Change organization"
  }
}
</i18n>
