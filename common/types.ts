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
