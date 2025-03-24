import type { Locale } from '@intlify/core-base';
import type { ParsedContentInternalMeta } from '@nuxt/content';

export interface Category {
  name: string;
  label: string;
  sub_category?: Category[];
}

export interface Categories {
  [locale: Locale]: Category[];
}

export interface Article extends ParsedContentInternalMeta {
  title: string;
  cover: string;
  url?: string;
  date: string;
}

export interface District {
  value: string;
  label: string;
  coordinates: number[];
  zoom: number;
}

export interface Districts {
  [locale: Locale]: District[];
}

interface ProductOption {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface Product {
  locale: Locale;
  id: number;
  name: string;
  type: string;
  title: string;
  sub_title: string;
  discontinued: number;
  can_order: number;
  price: number;
  price_min?: number;
  price_max?: number;
  items: {
    available: number;
    scheduled: number;
    schedule_unit: 'days' | 'weeks' | 'months';
    inv_final_assembly: number;
    inv_ready_to_assembly: number;
    inv_scheduled: number;
  },
  options: ProductOption[];
  components: ProductOption[];
  use_cases: string[];
}

type Url = string;
type Title = string;
type Cover = string;
export type Video = [Url, Title, Cover];
