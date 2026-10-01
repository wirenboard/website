export default defineEventHandler(async (event): Promise<any> => {
  const query = getQuery(event);
  const q = (query.q as string || '').trim();

  if (q.length < 3) {
    return [];
  }

  const config = useRuntimeConfig();
  const apiUrl = config.apiUrl || '';
  const locale = (query.locale as string) || 'ru';

  // Unlike the product/category endpoints (see useApi.ts), the Yii search endpoint
  // is public now and doesn't check X-Internal-Api-Key — no header needed here.
  return $fetch(`${apiUrl}/${locale}/ng/api/v1/catalog/search/`, {
    params: { q },
  });
});
