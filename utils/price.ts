import { toTriads } from './toTriads';

export enum CurrencyCode {
  RUB = 'RUB',
  EUR = 'EUR',
  USD = 'USD',
}

export enum CurrencySymbolPosition {
  Before = 0,
  After = 1,
}

export interface Price {
  amount: number;
  currency_code: CurrencyCode;
  currency_symbol: string;
  currency_symbol_position: CurrencySymbolPosition;
}

export interface FormattedPrice {
  amount: string;
  symbol: string;
  position: CurrencySymbolPosition;
}

export function formatPriceParts(price: Price): FormattedPrice {
  const decimals = price.currency_code === CurrencyCode.RUB ? 0 : 2;
  const rounded = price.amount.toFixed(decimals);
  const [intPart, decPart] = rounded.split('.');
  const amount = decPart ? `${toTriads(Number(intPart))}.${decPart}` : toTriads(Number(intPart));

  return { amount, symbol: price.currency_symbol, position: price.currency_symbol_position };
}

export function formatPrice(price: Price): string {
  const { amount, symbol, position } = formatPriceParts(price);
  return position === CurrencySymbolPosition.Before ? `${symbol}${amount}` : `${amount} ${symbol}`;
}
