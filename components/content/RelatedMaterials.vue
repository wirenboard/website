<script setup lang="ts">
defineProps<{ hideTitle?: boolean }>();
const { t } = useI18n();
const { locale } = useI18n();
</script>

<template>
  <div class="related-materials">
    <div class="related-materials-title">{{ t('title') }}</div>
    <div class="related-materials-content">
      <ContentSlot :use="$slots.default" />
    </div>
    <div class="related-materials-more">
      <div v-if="!hideTitle" class="related-materials-subtitle">{{ t('more') }}</div>
      <ul>
        <li><NuxtLink :to="`/${locale}/contents/solutions/`">{{ t('solutions') }}</NuxtLink></li>
        <li><NuxtLink :to="`/${locale}/contents/articles`">{{ t('articles') }}</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<i18n>
{
  "ru": {
    "title": "Дополнительные материалы",
    "more": "Прочее",
    "solutions": "Примеры других внедрений",
    "articles": "Статьи о подборе оборудования и рассказы пользователей"
  },
  "en": {
    "title": "Additional Materials",
    "more": "More",
    "solutions": "More case studies",
    "articles": "Articles about equipment and user stories"
  }
}
</i18n>

<style>
.related-materials {
  margin-top: 36px;
  padding: 16px;
  background: var(--gray-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.related-materials-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--heading-color);
  margin-bottom: 12px;
}

.related-materials-content ul,
.related-materials-more ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.related-materials-content li,
.related-materials-more li {
  padding: 0;
}

.related-materials-content li a,
.related-materials-more li a {
  color: var(--link-color);
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.15s;
}

.related-materials-content li a:hover,
.related-materials-more li a:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.related-materials-content p {
  display: none;
}

.related-materials-content + .related-materials-more {
  margin-top: 14px;
}

.related-materials-subtitle {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-secondary-color);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
</style>
