import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import { useGetUserMeetingsList } from '@features/meetings';
import { INewsFilter, INewsSort, ListParams } from '@entities/types';
import {
  AppRoutes,
  AppRoutesEnum,
  INITIAL_PER_PAGE,
  NewsStatusEnum,
} from '@shared/constants';
import { useTableHeader, useTableRows } from '../helper';

interface Params extends ListParams {
  sort: INewsSort;
  filter: INewsFilter;
}

export const useMeetingsList = () => {
  const { getData, isLoading, total, data } = useGetUserMeetingsList();
  const { t } = useTranslation('meetings');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(INITIAL_PER_PAGE);
  const [status, setStatus] = useState<keyof typeof NewsStatusEnum>();
  const [debounced] = useDebounce(search, 500);
  const navigate = useNavigate();

  const handleGetData = useCallback(async () => {
    const params: Params = {
      page,
      perPage,
      searchValue: debounced,
      filter: {
        status,
      },
      sort: {
        created_at: 'asc',
      },
    };
    getData(params);
  }, [debounced, getData, page, perPage, status]);

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);

  const handleCreateClick = useCallback(() => {
    navigate(AppRoutes[AppRoutesEnum.CREATE_MEETINGS]());
  }, [navigate]);

  const handleSetPage: (selectedItem: { selected: number }) => void =
    useCallback(({ selected }) => {
      setPage(selected + 1);
    }, []);

  const handleToggleStatusFilter = useCallback(() => {
    setStatus((val) => (val ? undefined : 2));
  }, []);

  const tableHeader = useTableHeader();
  const tableData = useTableRows(data);

  return {
    handleCreateClick,
    search,
    setSearch,
    isLoading,
    setPage: handleSetPage,
    perPage,
    setPerPage,
    total,
    t,
    status,
    tableData,
    tableHeader,
    toggleStatusFilter: handleToggleStatusFilter,
  };
};
