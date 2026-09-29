<script setup lang="ts">
const searchQuery = defineModel<string>('searchQuery', { default: '' });

defineProps<{
  categories: { slug: string; name: string }[];
  currentSlug?: string;
  viewMode?: 'groups' | 'list';
  searchPending?: boolean;
}>();

const { locale, t } = useI18n();
</script>

<template>
  <div class="catalogBar">
    <div class="catalogBar-top">
      <div class="catalogBar-search">
        <svg v-if="!searchPending" class="catalogBar-searchIcon" width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
          <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" stroke-width="2"/>
          <path d="M12 12l4.5 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span v-else class="catalogBar-searchSpinner" aria-hidden="true"></span>
        <input
          v-model="searchQuery"
          class="catalogBar-searchInput"
          type="text"
          :placeholder="t('searchPlaceholder')"
          :aria-label="t('searchPlaceholder')"
        >
      </div>
      <div class="catalogBar-viewToggle">
        <span class="catalogBar-viewLabel" id="catalogBarViewLabel">{{ t('display') }}</span>
        <div class="catalogBar-viewBtns" role="group" aria-labelledby="catalogBarViewLabel">
          <a
            :href="`/${locale}/contents/catalog/`"
            class="catalogBar-viewBtn"
            :class="{ 'catalogBar-viewBtn--active': viewMode !== 'list' }"
            :aria-current="viewMode !== 'list' ? 'page' : undefined"
          >{{ t('byGroups') }}</a>
          <a
            :href="`/${locale}/contents/catalog/list/`"
            class="catalogBar-viewBtn"
            :class="{ 'catalogBar-viewBtn--active': viewMode === 'list' }"
            :aria-current="viewMode === 'list' ? 'page' : undefined"
          >{{ t('asList') }}</a>
        </div>
      </div>
    </div>
    <nav class="catalogNav" :aria-label="t('catalogNavLabel')">
      <ul class="catalogNav-list">
        <li
          v-for="cat in categories"
          :key="cat.slug"
          :class="{ 'catalogNav-item--active': cat.slug === currentSlug }"
          class="catalogNav-item"
        >
          <a
            :href="viewMode === 'list' ? `#category-${cat.slug}` : `/${locale}/contents/catalog/${cat.slug}/`"
            :aria-current="cat.slug === currentSlug ? 'page' : undefined"
          >{{ cat.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.catalogBar {
  margin-bottom: 24px;
}

.catalogBar-top {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px calc(50vw - 50%);
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  margin-bottom: 0;
  background-color: #f0f0f0;
  border-bottom: 1px solid #e2e2e2;
}

.catalogBar-search {
  flex: 1;
  height: 40px;
  position: relative;
  border: 1px solid #e2e2e2;
  background: #fff;
}

.catalogBar-searchIcon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted-color);
  flex-shrink: 0;
}

.catalogBar-searchSpinner {
  position: absolute;
  left: 16px;
  top: 50%;
  width: 16px;
  height: 16px;
  margin-top: -8px;
  border-radius: 50%;
  border: 2px solid #e2e2e2;
  border-top-color: var(--primary-color);
  animation: catalogBarSearchSpin 0.6s linear infinite;
}

@keyframes catalogBarSearchSpin {
  to {
    transform: rotate(360deg);
  }
}

.catalogBar-searchInput {
  width: 100%;
  height: 100%;
  padding: 0 16px 0 42px;
  font-size: 18px;
  line-height: 24px;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text-color);
}

.catalogBar-searchInput::placeholder {
  color: #aaa;
}

.catalogBar-viewToggle {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  white-space: nowrap;
}

.catalogBar-viewLabel {
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 0.87px;
  color: var(--text-muted-color);
  margin-right: 16px;
}

.catalogBar-viewBtns {
  display: inline-flex;
  overflow: hidden;
  border-radius: 3px;
  border: 1px solid #e2e2e2;
}

.catalogBar-viewBtn {
  display: block;
  padding: 7px 16px;
  font-size: 16px;
  color: var(--text-muted-color);
  text-decoration: none;
  transition: color 0.2s, background-color 0.2s;
}

.catalogBar-viewBtn:hover {
  color: var(--text-strong-color);
}

.catalogBar-viewBtn--active {
  background-color: #fff;
  color: var(--text-strong-color);
}

.catalogBar-viewBtn + .catalogBar-viewBtn {
  border-left: 1px solid #e2e2e2;
}

.catalogNav {
  border-bottom: 1px solid var(--border-color);
}

.catalogNav-list {
  display: flex;
  gap: 34px;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 16px;
}

.catalogNav-item {
  display: flex;
  align-items: center;
  height: 63px;
  position: relative;
}

.catalogNav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: transparent;
  transition: background-color 0.2s;
}

.catalogNav-item a {
  color: var(--text-muted-color);
  text-decoration: none;
  transition: color 0.2s;
}

.catalogNav-item a:hover {
  color: var(--primary-color);
}

.catalogNav-item--active::after {
  background-color: var(--primary-color);
}

.catalogNav-item--active a {
  color: var(--primary-color);
}

@media (max-width: 767px) {
  .catalogBar-top {
    padding: 0 20px;
    background-color: #fff;
  }

  .catalogBar-viewToggle,
  .catalogNav {
    display: none;
  }

  .catalogBar-search {
    height: 48px;
    border: none;
    border-bottom: 1px solid var(--border-color);
  }
}
</style>

<i18n>
{
  "ru": {
    "searchPlaceholder": "Поиск по каталогу",
    "display": "Отображать:",
    "byGroups": "По группам",
    "asList": "Одним списком",
    "catalogNavLabel": "Категории каталога"
  },
  "en": {
    "searchPlaceholder": "Search catalog",
    "display": "Display:",
    "byGroups": "By groups",
    "asList": "As list",
    "catalogNavLabel": "Catalog categories"
  }
}
</i18n>
