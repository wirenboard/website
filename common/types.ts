import type { Locale } from '@intlify/core-base';

export interface Category {
  name: string;
  label: string;
  sub_category?: Category[];
}

export interface Categories {
  [locale: Locale]: Category[];
}

export interface Article {
  title: string;
  cover: string;
  url: string;
  date: string;
  _path: string;
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
