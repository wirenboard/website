<script setup lang="ts">
const props = withDefaults(defineProps<{
  visible: boolean;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
}>(), {
  confirmLabel: undefined,
  cancelLabel: undefined,
});

const emit = defineEmits<{
  confirm: [];
  cancel: [];
}>();

const { t } = useI18n();

const confirmButtonRef = ref<HTMLButtonElement | null>(null);
watch(() => props.visible, async (visible) => {
  if (!visible) return;
  await nextTick();
  confirmButtonRef.value?.focus();
});

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') emit('cancel');
};
</script>

<template>
  <!-- No <Teleport to="body">: this page's HTML gets re-wrapped by the Yii backend into its
       own <body>, so a real Teleport-to-body hydration mismatch there deletes the live page.
       position: fixed already gives a correct full-viewport overlay without it. -->
  <div v-if="visible" class="wb-confirm-overlay" @mousedown.self="emit('cancel')" @keydown="onKeydown">
    <div class="wb-confirm-box" role="alertdialog" aria-modal="true">
      <p class="wb-confirm-message">{{ message }}</p>
      <div class="wb-confirm-actions">
        <button type="button" class="wb-confirm-cancel" @click="emit('cancel')">{{ cancelLabel ?? t('cancel') }}</button>
        <button ref="confirmButtonRef" type="button" class="wb-confirm-confirm" @click="emit('confirm')">{{ confirmLabel ?? t('confirm') }}</button>
      </div>
    </div>
  </div>
</template>

<style>
.wb-confirm-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  padding: 16px;
}

.wb-confirm-box {
  width: 100%;
  max-width: 360px;
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.wb-confirm-message {
  margin: 0 0 20px;
  font-family: 'Plumb', sans-serif;
  font-size: 15px;
  line-height: 1.4;
  color: var(--text-color);
}

.wb-confirm-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.wb-confirm-actions button {
  border-radius: 4px;
  padding: 9px 16px;
  font-family: 'Plumb', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.wb-confirm-cancel {
  border: 1px solid var(--border-color);
  background: #fff;
  color: var(--text-color);
}

.wb-confirm-cancel:hover {
  border-color: var(--border-color-hover);
}

.wb-confirm-confirm {
  border: 1px solid var(--danger-color);
  background: var(--danger-color);
  color: #fff;
}

.wb-confirm-confirm:hover {
  opacity: 0.9;
}
</style>

<i18n>
{
  "ru": {
    "confirm": "Подтвердить",
    "cancel": "Отмена"
  },
  "en": {
    "confirm": "Confirm",
    "cancel": "Cancel"
  }
}
</i18n>
