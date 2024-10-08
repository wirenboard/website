import type { ParsedContent } from '@nuxt/content';
import type { Ref } from 'vue';

export const useLocalizedData = async (path: string, _partial = false, where: any = {}): Promise<{ data: ParsedContent | Ref<ParsedContent> }> => {
  const { locale } = useI18n();
  return useAsyncData<any>(path, () => queryContent(path).where({ _partial, _locale: locale.value, ...where }).findOne());
}
