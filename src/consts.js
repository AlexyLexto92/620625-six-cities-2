import {FilterType} from './reducers/userActions/userActions';
export const FILTERS = [
  {value: `Popular`, filterType: FilterType.POPULAR},
  {value: `Price: low to high`, filterType: FilterType.PRICE_ASC},
  {value: `Price: high to low`, filterType: FilterType.PRICE_DESC},
  {value: `Top rated first`, filterType: FilterType.TOP}
];
