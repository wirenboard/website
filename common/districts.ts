import type { Districts } from '~/common/types';

export const districts: Districts = {
  ru: [
    { value: 'moscow', label: 'Москва и область', coordinates: [55.6, 37.5], zoom: 8 },
    { value: 'spb', label: 'Санкт-Петербург', coordinates: [59.95, 30.5], zoom: 9 },
    { value: 'center', label: 'Центральный округ', coordinates: [54.21, 37.62], zoom: 5 },
    { value: 'northwestern', label: 'Северо-Западный округ', coordinates: [59.94, 30.31], zoom: 5 },
    { value: 'southern', label: 'Южный округ', coordinates: [47.24, 39.78], zoom: 6 },
    { value: 'northcaucasus', label: 'Северо-Кавказский округ', coordinates: [44.04, 43.06], zoom: 6 },
    { value: 'volga', label: 'Приволжский округ', coordinates: [55.79, 49.11], zoom: 6 },
    { value: 'ural', label: 'Уральский округ', coordinates: [56.80, 64.72], zoom: 6 },
    { value: 'siberian', label: 'Сибирский округ', coordinates: [53.95, 93.16], zoom: 6 },
    { value: 'fareastern', label: 'Дальневосточный округ', coordinates: [48, 134.77], zoom: 5 },
    { value: 'by', label: 'Беларусь', coordinates: [54.5, 27.65], zoom: 7 },
    { value: 'kz', label: 'Казахстан', coordinates: [47, 67.30], zoom: 5 },
    { value: 'kg', label: 'Кыргызстан', coordinates: [42, 74.5], zoom: 7 },
    { value: 'uz', label: 'Узбекистан', coordinates: [41.31, 66.26], zoom: 7 },
  ],
  en: [
    { value: 'by', label: 'Republic of Belarus', coordinates: [54.5, 27.65], zoom: 7 },
    { value: 'kz', label: 'Kazakhstan', coordinates: [47, 67.30], zoom: 5 },
    { value: 'kg', label: 'Republic of Kyrgyzstan', coordinates: [42, 74.5], zoom: 7 },
    { value: 'uz', label: 'Republic of Uzbekistan', coordinates: [41.31, 66.26], zoom: 7 }
  ],
};
