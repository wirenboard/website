export default defineEventHandler(async (event): Promise<any> => {
  const query = getQuery(event);
  const q = (query.q as string || '').trim();

  if (q.length < 3) {
    return [];
  }

  const config = useRuntimeConfig();
  const apiUrl = config.apiUrl || '';
  const locale = (query.locale as string) || 'ru';

  const headers: Record<string, string> = {};
  if (config.internalApiKey) {
    headers['X-Internal-Api-Key'] = config.internalApiKey as string;
  }

  return $fetch(`${apiUrl}/${locale}/ng/api/v1/catalog/search/`, {
    params: { q },
    headers,
  });
});
