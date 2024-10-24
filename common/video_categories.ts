import type { Categories } from '~/common/types';

export const videoCategories: Categories = {
  ru: [
    { name: 'educational', label: 'Обучающие' },
    { name: 'review', label: 'Обзоры', sub_category: [
        { name: 'buildings', label: 'Объекты' },
        { name: 'hardware', label: 'Оборудование и щиты' },
      ]
    },
  ],
  en: [],
};
