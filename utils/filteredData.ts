import type { ParsedContent } from '@nuxt/content';
import { FilterDateKeys } from '~/common/constants';
import type { Category } from '~/common/types';

export const getFilteredByCategory = (data: ParsedContent[] | null, category: Category) => data!
  .filter((item) => item.category === category.name)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getFilteredByDate = (data: ParsedContent[] | null, dateFilter?: string) => data!
  .sort((a, b) => dateFilter === FilterDateKeys.ASC
    ? new Date(b.date).getTime() - new Date(a.date).getTime() : new Date(a.date).getTime() - new Date(b.date).getTime() )
