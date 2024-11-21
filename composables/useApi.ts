// @ts-ignore
export const useApi: typeof useFetch = (url: string, opts?) => {
  const config = useRuntimeConfig();
  const { locale } = useI18n();

  const headers = config.login
    ? { 'Authorization': `Basic ${btoa(`${config.login}:${config.password}`)}` }
    : {};

  const userId = useRequestHeader('x-wb-user-id');
  const baseURL =  `${config.apiUrl || ''}/${locale.value}/ng/api/v1`;
  // @ts-ignore
  return useFetch(url, { baseURL, ...opts, key: url, params: { user_id: userId }, headers }).then(({ data }) => JSON.parse(data?.value));
}
