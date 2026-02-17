export const useColumns = (dataLength: number, maxColumns: number, resolutions: number[]): ComputedRef<number> => {
  const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200);

  onMounted(() => {
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });

  const handleResize = debounce(() => {
    windowWidth.value = window.innerWidth;
  }, 100);

  return computed(() => {
    const availableColumns = Math.min(dataLength, maxColumns);
    
    // Используем переданные resolutions для определения количества колонок
    for (let i = 0; i < resolutions.length; i++) {
      if (windowWidth.value < resolutions[i]) {
        return Math.min(i + 1, availableColumns);
      }
    }
    
    // Если ширина больше всех разрешений, возвращаем максимальное количество колонок
    return Math.min(resolutions.length + 1, availableColumns);
  });
}
