import type { _AsyncData, KeysOf, PickFrom, AsyncDataOptions } from '#app/composables/asyncData';
import type { NuxtError } from '#app';
import type { MaybeRef } from 'vue';

export const useApi = async <T>(
  url: string,
  params?: MaybeRef<Record<string, any>> | null,
  opts?: AsyncDataOptions<T> & { method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'; body?: MaybeRef<any> }
): Promise<_AsyncData<PickFrom<T, KeysOf<T>> | null, NuxtError<unknown> | null>> => {
  const config = useRuntimeConfig();
  const { locale } = useI18n();

  const headers: Record<string, string> = {};

  if (import.meta.server) {
    const cookieHeader = useRequestHeader('cookie');
    if (config.siteLogin) {
      headers['Authorization'] = `Basic ${btoa(`${config.siteLogin}:${config.sitePassword}`)}`;
    }
    if (cookieHeader) {
      headers['Cookie'] = cookieHeader;
    }
  } else {
    if (config.public.siteLogin) {
      headers['Authorization'] = `Basic ${btoa(`${config.public.siteLogin}:${config.public.sitePassword}`)}`;
    }
  }

  const userId = import.meta.server ? useRequestHeader('x-wb-user-id') : undefined;
  const apiBase = import.meta.server ? (config.apiUrl || '') : '';
  const baseURL = `${apiBase}/${locale.value}/ng/api/v1`;

  const { method, body, ...asyncDataOpts } = opts ?? {};

  return useAsyncData<T>(
    url,
    () => $fetch<T>(baseURL + url, {
      method: method ?? 'GET',
      headers,
      ...(method && method.toUpperCase() !== 'GET'
        ? { body: toValue(body) }
        : { params: { user_id: userId, ...toValue(params) } }
      ),
    }),
    asyncDataOpts
  );
}
