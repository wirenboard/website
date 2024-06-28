import type { ParsedContent } from '@nuxt/content';
import type { Ref } from 'vue';

export const useLocalizedData = async (path: string): Promise<ParsedContent | Ref<ParsedContent>> => {
  const { locale } = useI18n();
  return  useAsyncData<any>(path, () => queryContent(path).where({ _partial: false, _locale: locale.value }).findOne()).data;
}
