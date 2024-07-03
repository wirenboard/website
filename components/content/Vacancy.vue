<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <details class="vacancy">
    <summary class="vacancy-summary">
      <header class="vacancy-heading">
        <h3 class="vacancy-title">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h3>

        <span class="vacancy-salary">
          <ContentSlot :use="$slots.salary" unwrap="p" />
        </span>
      </header>

      <template v-if="$slots.description">
        <div class="vacancy-description">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </div>
      </template>
    </summary>

    <div class="vacancy-content">
      <template v-if="$slots.goals">
        <strong>{{t('goals')}}</strong>
        <ul>
          <ContentSlot :use="$slots.goals" unwrap="ul"  />
        </ul>
      </template>

      <template v-if="$slots.requirements">
        <strong>{{t('requirements')}}</strong>
        <ul>
          <ContentSlot :use="$slots.requirements" unwrap="ul" />
        </ul>
      </template>

      <template v-if="$slots.advantage">
        <strong>{{t('advantage')}}</strong>
        <ul>
          <ContentSlot :use="$slots.advantage" unwrap="ul" />
        </ul>
      </template>

      <template v-if="$slots.conditions">
        <strong>{{t('conditions')}}</strong>
        <ul>
          <ContentSlot :use="$slots.conditions" unwrap="ul" />
        </ul>
      </template>

      <hr />
      {{t('messageUs')}} <a href="mailto:info@wirenboard.com" target="_blank">info@wirenboard.com</a>.
    </div>
  </details>
</template>

<style scoped>
.vacancy {
  margin-bottom: 24px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  box-shadow: 0 0 6px var(--border-color);
}

.vacancy:hover {
  box-shadow: 0 0 12px var(--border-color);
}

.vacancy-summary {
  cursor: pointer;
  padding: 24px;
}

.vacancy-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  font-weight: bold;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: start;
    gap: 12px;
  }
}

.vacancy-title {
  margin: 0;
  font-size: 22px;
}

.vacancy-salary {
  white-space: nowrap;
}

.vacancy-description {
  margin-top: 24px;
}

.vacancy-content {
  padding: 24px;
  border-top: 1px solid var(--border-color);
}
</style>

<i18n>
{
  "ru": {
    "goals": "Какие задачи вас ждут:",
    "requirements": "Требования:",
    "advantage": "Будет плюсом:",
    "conditions": "Условия работы:",
    "messageUs": "Пишите нам на почту"
  }
}
</i18n>
