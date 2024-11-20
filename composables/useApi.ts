export const useApi: typeof useFetch = (url: string, opts?) => {
  const config = useRuntimeConfig();

  const headers = config.login
    ? { 'Authorization': `Basic ${btoa(`${config.login}:${config.password}`)}` }
    : {};

  const header = useRequestHeaders(['x-wb-user-id']);

  console.log('user id', header['x-wb-user-id']);

  // @ts-ignore
  return useFetch(url, { baseURL: `${config.apiUrl}/ng/api/v1` || '', ...opts, key: url, params: { user_id: header['x-wb-user-id'] }, headers });
}
