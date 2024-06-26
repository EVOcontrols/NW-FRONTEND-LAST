import { useTranslation } from 'react-i18next';
import { NavItemProps } from '@entities/components';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import {
  IconHome,
  IconNewspaper,
  IconMask,
  IconLoudspeaker,
  IconWrench,
  IconDocumentHolder,
  IconCalendarX,
  IconQuestion,
  IconShoppingBag,
} from '@shared/icons';

export const useUserSidebarConfig: () => Array<NavItemProps> = () => {
  const { t } = useTranslation();

  return [
    {
      title: t('sidebar.main'),
      icon: IconHome,
      href: AppRoutes[AppRoutesEnum.MAIN](),
      isLink: true,
    },
    {
      title: t('sidebar.news'),
      icon: IconNewspaper,
      href: AppRoutes[AppRoutesEnum.NEWS](),
      isLink: true,
    },
    {
      title: t('sidebar.poster'),
      icon: IconMask,
      href: AppRoutes[AppRoutesEnum.POSTER](),
      isLink: true,
    },
    {
      title: t('sidebar.activity'),
      icon: IconLoudspeaker,
      isLink: false,
      authOnly: true,
      breadcrumbs: [
        {
          href: AppRoutes[AppRoutesEnum.ACTIVITY_VOTING](),
          title: t('sidebar.voting'),
        },
        {
          href: AppRoutes[AppRoutesEnum.ACTIVITY_MEETINGS](),
          title: t('sidebar.meetings'),
        },
      ],
    },
    {
      title: t('sidebar.services'),
      icon: IconWrench,
      href: AppRoutes[AppRoutesEnum.SERVICES](),
      isLink: true,
    },
    {
      title: t('sidebar.loyalty'),
      icon: IconShoppingBag,
      href: AppRoutes[AppRoutesEnum.LOYALTY](),
      isLink: true,
    },
    {
      title: t('sidebar.invocation'),
      icon: IconDocumentHolder,
      isLink: false,
      authOnly: true,
      breadcrumbs: [
        {
          href: AppRoutes[AppRoutesEnum.REQUESTS](),
          title: t('sidebar.requests'),
        },
        {
          href: AppRoutes[AppRoutesEnum.APPLICATIONS](),
          title: t('sidebar.applications'),
        },
        {
          href: AppRoutes[AppRoutesEnum.REQUESTS_CREATE](),
        },
        {
          href: AppRoutes[AppRoutesEnum.APPLICATIONS_CREATE](),
        },
      ],
    },
    {
      title: t('sidebar.technicalWorks'),
      icon: IconCalendarX,
      authOnly: true,
      href: AppRoutes[AppRoutesEnum.TECHNICAL_WORKS](),
      isLink: true,
    },
    {
      title: t('sidebar.knowledge'),
      icon: IconQuestion,
      href: AppRoutes[AppRoutesEnum.KNOWLEDGE](),
      isLink: true,
    },
  ];
};
