<script setup lang="ts">
defineProps<{ logo: string; phone: number; }>();

const formatPhoneNumber = (phone: string) => {
  if (!phone) {
    return null;
  }
  phone = phone + ''
  return `+${phone[0]} (${phone.slice(1, 4)}) ${phone.slice(4, 7)}-${phone.slice(7, 9)}-${phone.slice(9)}`;
}

</script>

<template>
  <article class="partner">
    <NuxtImg :src="logo" class="partner-logo" />

    <h3 class="partner-title">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h3>

    <p>
      <a :href="`tel:+${phone}`">{{formatPhoneNumber(phone)}}</a>
    </p>
    <slot name="website" />
    <slot name="email" />

    <template v-if="$slots.description">
      <div class="partner-description">
        <ContentSlot :use="$slots.description" />
      </div>
    </template>
  </article>
</template>

<style scoped>
.partner {
  border-radius: 4px;
  border: 1px solid var(--border-color);
  box-shadow: 0 0 6px var(--border-color);
  padding: 24px;
}

.partner-logo {
  display: block;
  margin: 0 auto 24px;
  height: 45px;
}

.partner-title {
  margin: 0;
  font-size: 22px;
}

.partner-description {
  margin-top: 24px;
}
</style>
