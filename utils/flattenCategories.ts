import type { Categories, Category } from '~/common/types';
import { ArticleType } from '~/common/constants';
import type { Locale } from '@intlify/core-base';

export const flattenCategories = (categories: Categories, locale: Locale) => {
  return categories[locale].reduce((acc: any, category: Category) => {
    if (category.sub_category) {
      acc.push({ name: category.name, type: ArticleType.WithSubCategories, label: category.label });
      category.sub_category.forEach((sub) => {
        acc.push({ ...sub, type: ArticleType.SubCategory, label: sub.label });
      });
    } else {
      acc.push({ name: category.name, type: ArticleType.WithoutSubCategories, label: category.label });
    }
    return acc;
  }, []);
};
