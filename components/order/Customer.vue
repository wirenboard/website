<script setup lang="ts">
import Textarea from '~/components/Textarea.vue';

const { t } = useI18n();
const payerType = defineModel<string>('payerType');
const individual = defineModel<{ fio: string; phone: string; email: string; comment: string; }>('individual');
const entity = defineModel<{ fio: string; phone: string; inn: string; orgName: string; address: string; email: string; comment: string; }>('entity');

// http://localhost:8321/ru/ng/api/v1/org/search/?type=party&term=%D0%92%D0%B8%D1%80%D0%B5%D0%BD%D0%B1%D0%BE%D1%80%D0%B4
// onMounted(async () => {
//   const qwe = await $fetch('http://localhost:8321/ru/ng/api/v1/org/search/', {
//     query: {
//       term: 'пи'
//     }
//   })
// });
</script>

<template>
  <h2>{{ t('title') }}</h2>
  <div class="customer">
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
      <div class="customer-orgFieldWrapper">
        <Input v-model="entity!.inn" id="inn" :label="t('inn')" autocomplete="off" type="number" inputmode="numeric"  required />
        <Input v-model="entity!.orgName" id="orgName" :label="t('orgName')" autocomplete="organization" required />
      </div>
      <Input v-model="entity!.address" id="address" :label="t('address')" autocomplete="street-address" required />
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
    "individual": "Физическое лицо",
    "entity": "Юридическое лицо",
    "fio": "ФИО",
    "phone": "Номер телефона",
    "email": "Email",
    "comment": "Комментарий",
    "inn": "ИНН организации",
    "orgName": "Наименование организации",
    "address": "Юридический адрес"
  },
  "en": {
    "title": "Enter the customer's information",
    "individual": "Individuals",
    "entity": "Legal entities",
    "fio": "Full name",
    "phone": "Phone number",
    "email": "Email",
    "comment": "Comment",
    "inn": "Taxpayer identification number",
    "orgName": "Full legal entity title",
    "address": "Legal address"
  }
}
</i18n>
