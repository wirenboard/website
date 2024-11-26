import type { UseFetchOptions } from '#app/composables/fetch';

export const useApi = async <T>(url: string, opts?: UseFetchOptions<T>): Promise<T> => {
  const config = useRuntimeConfig();
  const { locale } = useI18n();

  const headers: Record<string, string> = config.login
      ? { Authorization: `Basic ${btoa(`${config.login}:${config.password}`)}` }
      : {};

  const userId = useRequestHeader('x-wb-user-id');
  const baseURL =  `${config.apiUrl || ''}/${locale.value}/ng/api/v1`;

  return useFetch(url, { baseURL, ...opts, key: url, params: { user_id: userId }, headers })
    .then(({ data }) => JSON.parse(data?.value as string) as T);
}
