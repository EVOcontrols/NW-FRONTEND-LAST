import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { axiosApi } from '@entities/api';
import {
  BaseResponse,
  INews,
  ListParams,
  PaginationResponse,
} from '@entities/types';

interface Params extends ListParams {}

interface ResponseDataType extends PaginationResponse {
  meetings: Array<INews>;
}
export const useGetInfinityMeetingsList = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  const getData = useCallback(
    async (params: Params) => {
      setIsLoading(true);
      try {
        const { data } = await axiosApi.get<BaseResponse<ResponseDataType>>(
          `/meetings`,
          { params },
        );
        if (data?.data?.meetings) {
          setTotal(data.data.total_pages);
          return data.data.meetings;
        } else {
          toast.error(t('errors.getError'));
        }
      } catch (error) {
        toast.error(t('errors.getError'));
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
    [t],
  );

  return {
    getData,
    isLoading,
    total,
  };
};
