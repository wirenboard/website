<script lang="ts" setup>
import { ArticleType } from '~/common/constants';
import SelectButton from '~/components/SelectButton.vue';

const { t } = useI18n();

useHead({
  title: t('title'),
});

const filter = ref(t('filter_category'));
const filterDate = ref('filter_asc');
const options = ref([t('filter_category'), t('filter_date')]);
const categories = [
  { name: 'user_experience', sub_category: [
      { name: 'retail' },
      { name: 'business_objects' },
      { name: 'tsod' },
      { name: 'apartments' },
      { name: 'embedded' },
      { name: 'home_automation' },
    ]
  },
  { name: 'hardware_selection' },
  { name: 'educational', sub_category: [
      { name: 'beginners' },
      { name: 'node_red' },
      { name: 'ventilation' },
      { name: 'heating' },
      { name: 'electrics' },
      { name: 'integrations' },
      { name: '3rd_party_devices' },
    ]
  },
  { name: 'manufactoring' },
];
const filterDates = ['filter_asc', 'filter_desc'];

const flattenCategories = (categories) => {
  return categories.reduce((acc, category) => {
    if (category.sub_category) {
      acc.push({ name: category.name, type: ArticleType.WithSubCategories });
      category.sub_category.forEach(sub => {
        acc.push({ ...sub, type: ArticleType.SubCategory });
      });
    } else {
      acc.push({ name: category.name, type: ArticleType.WithoutSubCategories });
    }
    return acc;
  }, []);
};
</script>

<template>
  <div class="articles">
    <div v-if="filter === 'По категориям'">
      <template v-for="(category, i) in flattenCategories(categories)" :key="category.name">
        <h3
          v-if="category.type === ArticleType.SubCategory"
          class="articles-title"
          :id="category.name">
          <a :href="`#${category.name}`">{{ t(category.name) }}</a>
        </h3>
        <h2
          v-else
          class="articles-title"
          :id="category.name">
          <a :href="`#${category.name}`">{{ t(category.name) }}</a>
        </h2>
        <ContentList v-if="category.type !== ArticleType.WithSubCategories" :query="{ path: '/_articles', where: [category.type === ArticleType.SubCategory ? { sub_category: category.name } : { category: category.name } ], sort: [{ date: -1 }] }">
          <template #default="{ list }">
            <div class="articles-list">
              <Article v-bind="article" v-for="article in list" :key="article._path" />
            </div>
          </template>
        </ContentList>
        <hr v-if="category.type !== ArticleType.WithSubCategories && i !== flattenCategories(categories).length - 1" class="articles-separator" />
      </template>
    </div>

    <div v-else>
      <ContentList :query="{ path: '/_articles', sort: [{ date: filterDate === 'filter_asc' ? -1 : 1 }] }">
        <template #default="{ list }">
          <div class="articles-list">
            <Article v-bind="article" v-for="article in list" :key="article._path" />
          </div>
        </template>
      </ContentList>
    </div>

    <aside>
      <div class="articles-filter">
        <SelectButton v-model="filter" :options="options" />

        <div class="articles-filterContent">
          <ul v-if="filter === 'По категориям'">
            <li v-for="category in categories" :key="category.name">
              <div @click="scrollToElementById(category.name)">{{ t(category.name) }}</div>
              <ul v-if="category.sub_category">
                <li v-for="category in category.sub_category" :key="category.name">
                  <div @click="scrollToElementById(category.name)">{{ t(category.name) }}</div>
                </li>
              </ul>
            </li>
          </ul>
          <div v-else>
            <div v-for="filter in filterDates" :key="filter" class="articles-filterDate">
              <RadioButton v-model="filterDate" :inputId="filter" :value="filter" />
              <label :for="filter" class="ml-2">{{ t(filter) }}</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<style>
.articles {
  display: flex;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 24px;
  }
}

.articles-title {
  scroll-margin-top: var(--scroll-margin-top);
}

.articles-title:first-child {
  margin-top: 0;
}

.articles-title a {
  color: var(--text-color);
}

.articles-title a:hover {
  color: var(--link-color);
}

.articles-title a:hover::before {
  content: '#';
  position: absolute;
  margin-left: -18px;
}

@media (max-width: 1340px) {
  .articles-title a:hover::before {
    content: '';
  }
}

.articles-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;


  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
}

.articles-separator {
  margin: 24px 0;
}

.articles-filter {
  position: sticky;
  top: 16px;
}

.articles-filterContent {
  margin-top: 12px;
}

.articles-filter ul {
  margin: 0;
  padding-left: 24px;
  color: var(--link-color);
}

.articles-filter li::marker {
  color: var(--text-color);
}

.articles-filter ul ul {
  padding-left: 22px;
}

.articles-filter ul li div {
  width: fit-content;
}

.articles-filter ul li div:hover {
  cursor: pointer;
  text-decoration: underline;
}

.articles-filterDate {
  display: flex;
  gap: 4px;
}

.articles-filterDate label {
  cursor: pointer;
}
</style>

<i18n>
{
  "ru": {
    "title": "Статьи — Wiren Board",
    "filter_category": "По категориям",
    "filter_date": "По дате публикации",
    "filter_asc": "Сначала новые",
    "filter_desc": "Сначала старые",
    "user_experience": "Опыт пользователей",
    "retail": "Ритейл, рестораны и отели",
    "business_objects": "Бизнес-объекты",
    "tsod": "ЦОД",
    "apartments": "Многоквартирные дома и ЖК",
    "embedded": "Встраиваемые системы и метеостанции",
    "home_automation": "Домашняя автоматизация",
    "hardware_selection": "Подбор оборудования",
    "educational": "Обучающие ролики",
    "beginners": "Начинающим",
    "node_red": "Автоматизация на Node-RED",
    "ventilation": "Вентиляция",
    "heating": "Отопление",
    "electrics": "Электрика",
    "integrations": "Интеграция со сторонним ПО",
    "3rd_party_devices": "Подключение сторонних устройств",
    "manufactoring": "О производстве и процессах"
  }
}
</i18n>
