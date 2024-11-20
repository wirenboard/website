export const useApi: typeof useFetch = (url: string, opts?) => {
  const config = useRuntimeConfig();

  const headers = config.login
    ? { 'Authorization': `Basic ${btoa(`${config.login}:${config.password}`)}` }
    : {};

  const websiteHeaders = useRequestHeaders();

  console.log('headers', websiteHeaders);

  return useFetch(url, { baseURL: `${config.apiUrl}/ng/api/v1` || '', ...opts, key: url });
}
