import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { useGetMeetingsList } from "@features/Admin/Meetings";
import { INews, INewsFilter, INewsSort, ListParams } from "@entities/types";
import {
  INITIAL_PER_PAGE,
  StatusEnum,
  getRouteCreateMeeting,
} from "@shared/constants";

export const useMeetingsList = () => {
  const { t } = useTranslation("meetings");
  const { getData } = useGetMeetingsList();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [perPage, setPerPage] = useState(INITIAL_PER_PAGE);
  const [data, setData] = useState<Array<INews>>([]);
  const [status, setStatus] = useState<keyof typeof StatusEnum>();
  const [isLoading, setIsLoading] = useState(true);
  const [debounced] = useDebounce(search, 500);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGetData = useCallback(async () => {
    setIsLoading(true);
    const params: ListParams<INewsSort, INewsFilter> = {
      page,
      perPage,
      searchValue: debounced,
      filter: {
        status,
      },
      sort: {
        created_at: "asc",
      },
    };
    setTotal(100);
    const news = await getData(params);
    setIsLoading(false);
    if (news) {
      setData(news);
    } else {
      navigate(-1);
    }
  }, [debounced, getData, navigate, page, perPage, status]);

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);

  const handleCreateClick = useCallback(() => {
    navigate(getRouteCreateMeeting());
  }, [navigate]);

  const handleSetPage: (selectedItem: { selected: number }) => void =
    useCallback(({ selected }) => {
      setPage(selected + 1);
    }, []);

  const handleToggleStatusFilter = useCallback(() => {
    setStatus((val) => (val ? undefined : 2));
  }, []);

  return {
    location,
    data,
    handleCreateClick,
    search,
    setSearch,
    isLoading,
    page,
    setPage: handleSetPage,
    perPage,
    setPerPage,
    total,
    t,
    status,
    toggleStatusFilter: handleToggleStatusFilter,
  };
};
