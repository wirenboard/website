export default defineNuxtRouteMiddleware(async () => {
  if (import.meta.server) return;

  const locale = useNuxtApp().$i18n.locale.value;
  try {
    await $fetch(`/${locale}/ng/api/v1/user/orders/`);
  } catch (error: any) {
    if (error?.response?.status === 401) {
      return navigateTo(`${window.location.origin}/${locale}/user/login2/`, { external: true });
    }
  }
});
