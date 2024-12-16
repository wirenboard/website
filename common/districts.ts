import type { Districts } from '~/common/types';

export const districts: Districts = {
  ru: [
    { value: 'moscow', label: 'Москва и область', coordinates: [55.6, 37.5], zoom: 8 },
    { value: 'spb', label: 'Санкт-Петербург', coordinates: [59.95, 30.5], zoom: 9 },
    { value: 'center', label: 'Центральный округ', coordinates: [54.21, 37.62], zoom: 12 },
    { value: 'volga', label: 'Приволжский округ', coordinates: [57.5, 51], zoom: 6 },
    { value: 'ural', label: 'Уральский округ', coordinates: [56.84, 60.57], zoom: 12 },
    { value: 'by', label: 'Беларусь', coordinates: [53.95, 27.65], zoom: 9 },
    { value: 'kz', label: 'Казахстан', coordinates: [43.24, 76.88], zoom: 10 },
    { value: 'kg', label: 'Кыргызстан', coordinates: [42.90, 74.5], zoom: 10 },
  ],
  en: [
    { value: 'by', label: 'Republic of Belarus', coordinates: [53.95, 27.65], zoom: 12 },
    { value: 'kz', label: 'Kazakhstan', coordinates: [43.24, 76.88], zoom: 10 },
    { value: 'kg', label: 'Republic of Kyrgyzstan', coordinates: [42.90, 74.5], zoom: 10 },
  ],
};
