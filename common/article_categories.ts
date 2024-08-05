import type { Categories } from '~/common/types';

export const categories: Categories = {
  ru: [
    { name: 'user_experience', label: 'Опыт пользователей', sub_category: [
        { name: 'retail', label: 'Ритейл, рестораны и отели' },
        { name: 'business_objects', label: 'Бизнес-объекты' },
        { name: 'tsod', label: 'ЦОД' },
        { name: 'apartments', label: 'Многоквартирные дома и ЖК' },
        { name: 'embedded', label: 'Встраиваемые системы и метеостанции' },
        { name: 'home_automation', label: 'Домашняя автоматизация' },
      ]
    },
    { name: 'hardware_selection', label: 'Подбор оборудования' },
    { name: 'educational', label: 'Обучающие ролики', sub_category: [
        { name: 'beginners', label: 'Начинающим' },
        { name: 'node_red', label: 'Автоматизация на Node-RED' },
        { name: 'ventilation', label: 'Вентиляция' },
        { name: 'heating', label: 'Отопление' },
        { name: 'electrics', label: 'Электрика' },
        { name: 'integrations', label: 'Интеграция со сторонним ПО' },
        { name: '3rd_party_devices', label: 'Подключение сторонних устройств' },
      ]
    },
    { name: 'manufactoring', label: 'О производстве и процессах' },
  ],
  en: [],
};
