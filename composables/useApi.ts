export const useApi: typeof useFetch = (url: string, opts?) => {
  const config = useRuntimeConfig();

  const headers = config.login
    ? { 'Authorization': `Basic ${btoa(`${config.login}:${config.password}`)}` }
    : {};

  console.log('11111 request url', `${config.apiUrl}/ng/api/v1${url}`)

  return useFetch(url, { baseURL: `${config.apiUrl}/ng/api/v1` || '', ...opts, key: url });
}
