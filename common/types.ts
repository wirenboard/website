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
  can_order: number | boolean;
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
  };
  options: ProductOption[];
  components: ProductOption[];
  use_cases: string[];
}

export type Video = [string, string, string, any?];

export type PhotoLink = [string, string, string?, string?];

export type LogoLink = [string, string, string];

export enum DeliveryType {
  Courier = 'courier',
  Pickup = 'pickup',
  Point = 'point',
  Taxi = 'todoor',
}

export interface AvailableDelivery {
  id: string;
  type: string;
  daysMin: number | null;
  daysMax: number | null;
  title: string;
  address: string | null;
  price: number;
  total: number;
  error?: string | null;
}

export interface AvailableDeliveriesInfo{
  available: AvailableDelivery[];
  freeDelivery: boolean;
}

export interface CustomerData{
  individual:{
   fio: string;
   phone: string;
   email: string;
   comment: string;
  }
  entity: {
    inn: string;
    orgName: string;
    address: string;
    email: string;
    comment: string;
  };
  payerType: 'individual' | 'entity';
}

export interface OrderInfo {
  payerType: string;
  payerData: CustomerData;  
  deliveryType: string;
  deliveryData: Record<string, string>;
  paymentType: string;
  basketData: Record<string, number>;
  countries: Record<number, string>;
}

export interface Tariff {
  calendar_max: number;
  calendar_min: number;
  delivery_date_range: { min: string; max: string };
  delivery_mode: number;
  delivery_sum: number;
  period_max: number;
  period_min: number;
  tariff_code: number;
  tariff_description: string;
  tariff_name: string;
}

export interface Destination {
  city_code: number;
  city: string;
  type: string;
  postal_code: string;
  country_code: string;
  region: string;
  have_cashless: boolean;
  have_cash: boolean;
  allowed_cod: boolean;
  is_dressing_room: boolean;
  code: string;
  name: string;
  address: string;
  work_time: string;
  location: [number, number];
  weight_min: number;
  weight_max: number;
  dimensions: any;
}
