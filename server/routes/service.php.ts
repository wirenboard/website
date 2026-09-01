export default defineEventHandler(async (event): Promise<any> => {
  const config = useRuntimeConfig();

  const method = event.method;
  const query = getQuery(event);

  const cfg: any = {
    method,
    query,
  };

  if (method !== 'GET' && method !== 'HEAD') {
    cfg.body = await readBody(event);
  }

  return await $fetch(`${config.apiUrl}/service.php`, cfg);
});
