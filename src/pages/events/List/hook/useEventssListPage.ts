import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetUserEventsList } from '@features/events';
import { INewsFilter, INewsSort, ListParams } from '@entities/types';
import { INITIAL_PER_PAGE, LanguageEnum } from '@shared/constants';

interface Params extends ListParams {
  sort: INewsSort;
  filter: INewsFilter;
}

export const useEventsListPage = () => {
  const { t, i18n } = useTranslation('events');
  const { getData, isLoading, data, total } = useGetUserEventsList();

  useEffect(() => {
    const newsParams: Params = {
      page: 1,
      perPage: INITIAL_PER_PAGE,
      filter: {
        status: 1,
      },
      sort: {
        created_at: 'asc',
      },
    };
    getData(newsParams);
  }, [getData]);
  return {
    events: data,
    isLoading,
    t,
    i18n,
    lang: i18n.language as LanguageEnum,
    total,
  };
};
