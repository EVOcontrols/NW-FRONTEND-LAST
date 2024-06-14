import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useGetCurrentVoting } from '@features/Admin';
import { IAnswer, IVoting } from '@entities/types';

export const usePage = () => {
  const { t } = useTranslation('voting');
  const { id } = useParams<{ id: string }>() as { id: string };
  const [data, setData] = useState<IVoting>();
  const { getData, isLoading } = useGetCurrentVoting(id);

  const handleGetData = useCallback(async () => {
    const newData = await getData();
    if (newData) {
      setData(newData);
    }
  }, [getData]);

  const handleShowAnswerDetails = useCallback(
    (answer: IAnswer) => () => {
      console.log(answer.users);
    },
    [],
  );

  useEffect(() => {
    handleGetData();
  }, [handleGetData]);

  return { data, isLoading, t, id, handleShowAnswerDetails };
};
