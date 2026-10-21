<script setup lang="ts">
import { slug } from 'github-slugger';
import CallIcon from '~/assets/icons/call.svg';
import EarthIcon from '~/assets/icons/earth.svg';
import InstagramIcon from '~/assets/icons/instagram.svg';
import MailIcon from '~/assets/icons/mail.svg';
import { districts } from '~/common/districts';

defineProps<{ title: string; logo: string; phone?: number | number[]; website?: string; email?: string; note?: string; district: string[]; }>();

const { t, locale } = useI18n();

const formatPhoneNumber = (phone: number) => {
  if (!phone) {
    return null;
  }
  const phoneString = String(phone);
  return phoneString[0] === '7'
    ? `+${phoneString[0]} (${phoneString.slice(1, 4)}) ${phoneString.slice(4, 7)}-${phoneString.slice(7, 9)}-${phoneString.slice(9)}`
    : `+${phoneString.slice(0, 3)} (${phoneString.slice(3, 5)}) ${phoneString.slice(5, 8)}-${phoneString.slice(8, 10)}-${phoneString.slice(10, 12)}`;
}

const isInstagramLink = (url: string) => /(^|\/|\.)(instagram\.com|instagr\.am)(\/|$)/i.test(url);

const normalizeUrl = (url: string) => (/^https?:\/\//i.test(url) ? url : `https://${url}`);

const stripProtocol = (url: string) => url.replace(/^https?:\/\//i, '');

const getHostname = (url: string) => stripProtocol(url).split(/[/?#]/)[0];

const getInstagramHandle = (url: string) => {
  const handle = stripProtocol(url).split(/[/?#]/).slice(1).filter(Boolean)[0];
  return handle ? `@${handle}` : getHostname(url);
}

</script>

<template>
  <article class="partner">
    <div class="partner-info">
      <NuxtImg :src="logo" alt="" class="partner-logo" />
      <h3 class="partner-title" :id="slug(title)">
        {{ title }}
      </h3>
      <ul v-if="website || email || phone" class="partner-contacts">
        <li v-if="website">
          <a v-if="isInstagramLink(website)" :href="normalizeUrl(website)" target="_blank" rel="noopener noreferrer" class="partner-contact">
            <InstagramIcon aria-hidden="true" />
            <span class="partner-contact-text">{{getInstagramHandle(website)}}</span>
            <span class="sr-only">{{ t('newTab') }}</span>
          </a>
          <a v-else :href="normalizeUrl(website)" target="_blank" rel="noopener noreferrer" class="partner-contact">
            <EarthIcon aria-hidden="true" />
            <span class="partner-contact-text">{{getHostname(website)}}</span>
            <span class="sr-only">{{ t('newTab') }}</span>
          </a>
        </li>
        <li v-if="email">
          <a :href="`mailto:${email}`" target="_blank" rel="noopener noreferrer" class="partner-contact">
            <MailIcon aria-hidden="true" />
            <span class="partner-contact-text">{{email}}</span>
            <span class="sr-only">{{ t('newTab') }}</span>
          </a>
        </li>
        <template v-if="phone">
          <template v-if="Array.isArray(phone)">
            <li v-for="phoneNumber in phone" :key="phoneNumber">
              <a :href="`tel:+${phoneNumber}`" class="partner-contact">
                <CallIcon aria-hidden="true" />
                <span class="partner-contact-text">{{formatPhoneNumber(phoneNumber)}}</span>
              </a>
            </li>
          </template>
          <li v-else>
            <a :href="`tel:+${phone}`" class="partner-contact">
              <CallIcon aria-hidden="true" />
              <span class="partner-contact-text">{{formatPhoneNumber(phone)}}</span>
            </a>
          </li>
        </template>
      </ul>
      <ul v-if="district?.length" class="partner-districts">
        <li v-for="region in district" :key="region">
          {{districts[locale].find((distr) => distr.value === region)!.label}}
        </li>
      </ul>
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
  font-size: 18px;
  scroll-margin-top: calc(var(--app-bar-height) + 64px);
}

.partner-info .partner-contacts,
.partner-info .partner-districts {
  list-style: none;
  margin: 0;
  padding: 0;
}

.partner-info .partner-contacts {
  margin-top: 12px;
}

.partner-contacts li {
  margin: 6px 0;
}

.partner-contacts li:first-child {
  margin-top: 0;
}

.partner-contacts li:last-child {
  margin-bottom: 0;
}

.partner-contact {
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  max-width: 100%;
}

.partner-contact svg {
  flex-shrink: 0;
}

.partner-contact-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
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

<i18n>
{
  "ru": {
    "newTab": "(открывается в новой вкладке)"
  },
  "en": {
    "newTab": "(opens in a new tab)"
  }
}
</i18n>
