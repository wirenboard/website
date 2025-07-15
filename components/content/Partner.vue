<script setup lang="ts">
import { slug } from 'github-slugger';
import CallIcon from '~/assets/icons/call.svg';
import EarthIcon from '~/assets/icons/earth.svg';
import MailIcon from '~/assets/icons/mail.svg';
import { districts } from '~/common/districts';

defineProps<{ title: string; logo: string; phone?: number | number[]; website?: string; email?: string; note?: string; district: string[]; }>();

const { locale } = useI18n();

const formatPhoneNumber = (phone: number) => {
  if (!phone) {
    return null;
  }
  const phoneString = String(phone);
  return phoneString[0] === '7'
    ? `+${phoneString[0]} (${phoneString.slice(1, 4)}) ${phoneString.slice(4, 7)}-${phoneString.slice(7, 9)}-${phoneString.slice(9)}`
    : `+${phoneString.slice(0, 3)} (${phoneString.slice(3, 5)}) ${phoneString.slice(5, 8)}-${phoneString.slice(8, 10)}-${phoneString.slice(10, 12)}`;
}

</script>

<template>
  <article class="partner">
    <div class="partner-info">
      <NuxtImg :src="logo" class="partner-logo" />
      <h3 class="partner-title" :id="slug(title)">
        {{ title }}
      </h3>
      <div class="partner-contacts">
        <a v-if="website" :href="website" target="_blank" class="partner-contact"><EarthIcon />{{website}}</a>
        <a v-if="email" :href="`mailto:${email}`" target="_blank" class="partner-contact"><MailIcon />{{email}}</a>
        <template v-if="phone">
          <template v-if="Array.isArray(phone)">
            <a v-for="phoneNumber in phone" :href="`tel:+${phoneNumber}`" class="partner-contact" :key="phoneNumber">
              <CallIcon />
              {{formatPhoneNumber(phoneNumber)}}
            </a>
          </template>
          <a v-else :href="`tel:+${phone}`" class="partner-contact">
            <CallIcon />{{formatPhoneNumber(phone)}}</a>
        </template>
        <div>
          <span v-for="region in district">
            {{districts[locale].find((distr) => distr.value === region)!.label}}<br />
          </span>
        </div>
      </div>

    </div>

    <div class="partner-details">
      <slot />
    </div>
  </article>
</template>

<style>
.partner {
  border-radius: 4px;
  display: flex;
  padding: 24px;
  gap: 12px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
}

.partner-info {
  min-width: 280px;
  max-width: 280px;
}

.partner-logo {
  display: block;
  margin-bottom: 12px;
  max-height: 70px;
  max-width: 100%;
}

.partner-title {
  margin: 0;
  font-size: 22px;
  scroll-margin-top: calc(var(--app-bar-height) + 64px);
}

.partner-contacts {
  margin-top: 12px;
}

.partner-contact {
  margin: 6px 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.partner-contact:last-of-type {
  margin-bottom: 0;
}

.partner-details p {
  margin-top: 0;
  margin-bottom: 12px;
}

.partner-details > :last-child {
  margin-bottom: 0;
}

.partner ul {
  padding-left: 20px;
  margin-top: 0;
  margin-bottom: 12px;
}
</style>
