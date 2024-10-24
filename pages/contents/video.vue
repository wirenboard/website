<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content';
import { videoCategories } from '~/common/video_categories';
import { ArticleType } from '~/common/constants';
import SelectButton from '~/components/SelectButton.vue';
import VideoGallery from '~/components/content/VideoGallery.vue';

const { t, locale } = useI18n();
const route = useRoute();

useHead({
  title: t('title'),
});

const filter = ref(t('filter_category'));
const filterDate = ref('filter_asc');
const options = ref([t('filter_category'), t('filter_date')]);
const filterDates = ['filter_asc', 'filter_desc'];

const query: QueryBuilderParams = { path: '/_video', where: [{ _locale: locale.value }] }
const { data } = await useAsyncData('video', () => queryContent(query.path).where({ _locale: locale.value }).find());

if (!data.value?.length) {
  throw createError({
    statusCode: 404,
    statusMessage: `Page not found: ${route.path}`,
  });
}
</script>

<template>
  <div class="video">
    <div v-if="filter === 'По категориям'" class="video-content">
      <template v-for="(category, i) in flattenCategories(videoCategories, locale)" :key="category.name">
        <h3
          v-if="category.type === ArticleType.SubCategory"
          class="video-title"
          :id="category.name">
          <a :href="`#${category.name}`">{{ category.label }}</a>
        </h3>
        <h2
          v-else
          class="video-title"
          :id="category.name">
          <a :href="`#${category.name}`">{{ category.label }}</a>
        </h2>

        <template v-if="data!.filter((item) => item.category === category.name).length">
          <VideoGallery
            :data="data!.filter((item) => item.category === category.name)
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map(video => [video.url, video.title, video.cover])"
          />
        </template>

        <hr v-if="category.type !== ArticleType.WithSubCategories && i !== flattenCategories(videoCategories, locale).length - 1" class="video-separator" />
      </template>
    </div>

    <div v-else class="video-content">
      <VideoGallery
        :data="data.sort((a, b) => filterDate === 'filter_asc' ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date))
          .map(video => [video.url, video.title, video.cover])"
      />
    </div>

    <aside>
      <div class="video-filter">
        <SelectButton v-model="filter" :options="options" />

        <div class="video-filterContent">
          <ul v-if="filter === 'По категориям'">
            <li v-for="category in videoCategories[locale]" :key="category.name">
              <div @click="scrollToElementById(category.name)">{{ category.label }}</div>
              <ul v-if="category.sub_category">
                <li v-for="category in category.sub_category" :key="category.name">
                  <div @click="scrollToElementById(category.name)">{{ category.label }}</div>
                </li>
              </ul>
            </li>
          </ul>
          <div v-else>
            <div v-for="filter in filterDates" :key="filter" class="video-filterDate">
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
.video {
  display: flex;
  gap: 48px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 24px;
  }
}

.video-content {
  flex-grow: 1;
}

.video-title {
  line-height: normal;
  scroll-margin-top: var(--app-bar-height);
}

.video-title:first-child {
  margin-top: 0;
}

h2.video-title {
  font-size: 27px;
}

h3.video-title {
  font-size: 21px;
}

.video-title a {
  color: var(--text-color);
}

.video-title a:hover {
  color: var(--link-color);
}

.video-title a:hover::before {
  content: '#';
  position: absolute;
  margin-left: -18px;
}

@media (max-width: 1340px) {
  .video-title a:hover::before {
    content: '';
  }
}

.video-separator {
  margin: 24px 0;
}

.video-filter {
  position: sticky;
  top: 16px;
}

.video-filterContent {
  margin-top: 12px;
}

.video-filter ul {
  margin: 0;
  padding-left: 24px;
  color: var(--link-color);
}

.video-filter li::marker {
  color: var(--text-color);
}

.video-filter ul ul {
  padding-left: 22px;
}

.video-filter ul li div {
  width: fit-content;
}

.video-filter ul li div:hover {
  cursor: pointer;
  text-decoration: underline;
}

.video-filterDate {
  display: flex;
  gap: 4px;
}

.video-filterDate label {
  cursor: pointer;
}
</style>

<i18n>
{
  "ru": {
    "title": "Видео",
    "filter_category": "По категориям",
    "filter_date": "По дате публикации",
    "filter_asc": "Сначала новые",
    "filter_desc": "Сначала старые"
  },
  "en": {
    "title": "Video",
    "filter_category": "By category",
    "filter_date": "By date",
    "filter_asc": "New ones first",
    "filter_desc": "Old ones first"
  }
}
</i18n>
