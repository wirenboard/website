import type { _AsyncData, KeysOf, PickFrom, AsyncDataOptions } from '#app/composables/asyncData';
import type { NuxtError } from '#app';

export const useApi = async <T>(url: string, opts?: AsyncDataOptions<T>): Promise<_AsyncData<PickFrom<T, KeysOf<T>> | null, NuxtError<unknown> | null>> => {
  const config = useRuntimeConfig();
  const { locale } = useI18n();

  const cookieHeader = useRequestHeader('cookie');
  const headers: Record<string, string> = {
    ...(config.login ? { Authorization: `Basic ${btoa(`${config.login}:${config.password}`)}` } : {}),
    ...(cookieHeader ? { Cookie: cookieHeader } : {}),
  };

  const userId = useRequestHeader('x-wb-user-id');
  const baseURL =  `${config.apiUrl || ''}/${locale.value}/ng/api/v1`;

  return useAsyncData<T>(
    url,
    () => $fetch<T>(baseURL + url, { baseURL, headers, params: { user_id: userId } })
  )
}
