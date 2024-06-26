import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetAdvertisementsList } from '@features/Admin';
import { useUser } from '@features/User/hook';

export const useMainPage = () => {
  const { t, i18n } = useTranslation();
  const { user } = useUser();
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const { getData, data: advertisements } = useGetAdvertisementsList();

  useEffect(() => {
    getData({ page: 1, perPage: 2 });
  }, [getData]);

  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const userGreetingsMessage = `${t('controls.greetings')}, ${user?.name}`;
  const dateOptions = {
    year: 'numeric' as const,
    month: '2-digit' as const,
    day: '2-digit' as const,
    weekday: 'long' as const,
  };
  const dateString = new Date().toLocaleDateString(i18n.language, dateOptions);

  return {
    innerWidth,
    t,
    userGreetingsMessage,
    dateString,
    isLogin: !!user,
    advertisements,
    i18n,
  };
};
