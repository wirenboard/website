<script setup lang="ts">
defineProps<{ logo: string; phone?: number; website?: string; email?: string; }>();

const formatPhoneNumber = (phone: number) => {
  if (!phone) {
    return null;
  }
  const phoneString = String(phone);
  return `+${phoneString[0]} (${phoneString.slice(1, 4)}) ${phoneString.slice(4, 7)}-${phoneString.slice(7, 9)}-${phoneString.slice(9)}`;
}

</script>

<template>
  <article class="partner">
    <div class="partner-info">
      <NuxtImg :src="logo" class="partner-logo" />
      <h3 class="partner-title">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h3>
      <div class="partner-contacts">
        <a v-if="website" :href="website" target="_blank" class="partner-contact"><Icon name="ion:earth" /> {{website}}</a>
        <a v-if="email" :href="`mailto:${email}`" target="_blank" class="partner-contact"><Icon name="ion:mail" /> {{email}}</a>
        <a v-if="phone" :href="`tel:+${phone}`" class="partner-contact"><Icon name="ion:call" /> {{formatPhoneNumber(phone)}}</a>
      </div>

    </div>

    <div class="partner-details">
      <ContentSlot :use="$slots.description" />
      <ContentSlot :use="$slots.note" />
    </div>
  </article>
</template>

<style>
.partner {
  border-radius: 4px;
  display: flex;
  padding: 24px;
  gap: 12px;
}

.partner-info {
  min-width: 280px;
}

.partner-logo {
  display: block;
  margin-bottom: 12px;
  max-height: 50px;
  max-width: 100%;
}

.partner-title {
  margin: 0;
  font-size: 22px;
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
