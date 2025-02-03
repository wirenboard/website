export enum ArticleType {
    WithoutSubCategories,
    WithSubCategories,
    SubCategory,
}

export enum FilterTypeKeys {
    ByCategory = '0',
    ByDate = '1',
}

export const FilterTypeParams = {
    [FilterTypeKeys.ByCategory]: 'filter_category',
    [FilterTypeKeys.ByDate]: 'filter_date',
}

export enum FilterDateKeys {
    ASC = '0',
    DESC = '1',
}

export const FilterDateParams = {
    [FilterDateKeys.ASC]: 'filter_asc',
    [FilterDateKeys.DESC]: 'filter_desc',
}

