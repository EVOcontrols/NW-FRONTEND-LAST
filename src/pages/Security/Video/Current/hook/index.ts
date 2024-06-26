import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useGetCurrentCamera } from '@features/security';

export const useCreateCameraPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, getData, isLoading } = useGetCurrentCamera(id as string);
  const { t } = useTranslation('security');

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    data,
    isLoading,
    t,
    id,
  };
};
