import { useTranslation } from 'react-i18next';
import { NavItemProps } from '@entities/components';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import {
  IconHome,
  IconBriefcase,
  IconLock,
  IconWrench,
  IconPeople,
  IconGear,
} from '@shared/icons';

export const useAdminSidebarConfig: () => Array<NavItemProps> = () => {
  const { t } = useTranslation();
  return [
    {
      title: t('sidebar.main'),
      icon: IconHome,
      href: AppRoutes[AppRoutesEnum.ADMIN](),
      isLink: true,
      authOnly: true,
      name: AppRoutesEnum.ADMIN,
    },
    /* {
      title: t('sidebar.accounting'),
      icon: IconTable,
      href: AppRoutes[AppRoutesEnum.ACCOUNTING](),
      isLink: true,
      authOnly: true,
      name: AppRoutesEnum.ACCOUNTING,
    }, */
    /* {
      title: t('sidebar.statistic'),
      icon: IconDiagram,
      href: AppRoutes[AppRoutesEnum.STATISTIC](),
      isLink: true,
      authOnly: true,
      name: AppRoutesEnum.STATISTIC,
    }, */
    {
      title: t('sidebar.security'),
      icon: IconLock,
      href: AppRoutes[AppRoutesEnum.SECURITY](),
      isLink: true,
      authOnly: true,
      name: AppRoutesEnum.SECURITY,
      breadcrumbs: [
        {
          href: AppRoutes[AppRoutesEnum.SECURITY](),
        },
        {
          href: AppRoutes[AppRoutesEnum.SECURITY_ACCESS](),
        },
        {
          href: AppRoutes[AppRoutesEnum.SECURITY_INTERCOM](),
        },
        {
          href: AppRoutes[AppRoutesEnum.SECURITY_VIDEO](),
        },
      ],
    },
    {
      title: t('sidebar.engineering'),
      icon: IconWrench,
      authOnly: true,
      name: AppRoutesEnum.ENGINEERING,
      breadcrumbs: [
        {
          href: AppRoutes[AppRoutesEnum.ENGINEERING_ENERGY](),
          title: t('sidebar.energy'),
        },
        {
          href: AppRoutes[AppRoutesEnum.ENGINEERING_HEATING](),
          title: t('sidebar.heating'),
        },
        {
          href: AppRoutes[AppRoutesEnum.ENGINEERING_ELEVATORS](),
          title: t('sidebar.lifts'),
        },
      ],
    },
    /* {
      title: t('sidebar.requests'),
      icon: IconDocumentHolder,
      href: AppRoutes[AppRoutesEnum.ADMIN_REQUESTS](),
      name: AppRoutesEnum.ADMIN_REQUESTS,
      isLink: true,
    }, */
    {
      title: t('sidebar.admin'),
      icon: IconBriefcase,
      isLink: false,
      authOnly: true,
      name: AppRoutesEnum.ADMINISTRATE,
      breadcrumbs: [
        {
          href: AppRoutes[AppRoutesEnum.ADMIN_NEWS](),
          title: t('sidebar.news'),
        },
        {
          href: AppRoutes[AppRoutesEnum.ADMIN_EVENTS](),
          title: t('sidebar.events'),
        },
        {
          href: AppRoutes[AppRoutesEnum.ADMIN_MEETINGS](),
          title: t('sidebar.meetings'),
        },
        {
          href: AppRoutes[AppRoutesEnum.ADMIN_NOTIFICATIONS](),
          title: t('sidebar.notifications'),
        },
        {
          href: AppRoutes[AppRoutesEnum.ADMIN_VOTING](),
          title: t('sidebar.voting'),
        },
        {
          href: AppRoutes[AppRoutesEnum.ADMIN_TECHNICAL_WORKS](),
          title: t('sidebar.technicalWorks'),
        },
        {
          href: AppRoutes[AppRoutesEnum.ADMIN_LOYALTY](),
          title: t('sidebar.loyalty'),
        },
        {
          href: AppRoutes[AppRoutesEnum.ADMIN_SERVICES](),
          title: t('sidebar.services'),
        },
        {
          href: AppRoutes[AppRoutesEnum.ADMIN_ADVERTISEMENT](),
          title: t('sidebar.advertisement'),
        },
        {
          href: AppRoutes[AppRoutesEnum.ADMIN_EMPLOYEE_ANNOUNCEMENTS](),
          title: t('sidebar.employee_announcements'),
        },
      ],
    },
    /* {
      title: t('sidebar.passport'),
      icon: IconPassport,
      href: AppRoutes[AppRoutesEnum.PASSPORT](),
      name: AppRoutesEnum.PASSPORT,
      isLink: true,
      authOnly: true,
    }, */
    {
      title: t('sidebar.users'),
      icon: IconPeople,
      href: '',
      isLink: false,
      authOnly: true,
      name: AppRoutesEnum.USERS,
      breadcrumbs: [
        {
          href: AppRoutes[AppRoutesEnum.RESIDENTS](),
          title: t('sidebar.residents'),
        },
        {
          href: AppRoutes[AppRoutesEnum.EMPLOYEES](),
          title: t('sidebar.employees'),
        },
      ],
    },
    {
      title: t('sidebar.accessRights'),
      icon: IconGear,
      isLink: true,
      authOnly: true,
      name: AppRoutesEnum.ADMIN_ROLES,
      breadcrumbs: [
        {
          title: t('sidebar.roles'),
          href: AppRoutes[AppRoutesEnum.ADMIN_ROLES](),
        },
      ],
    },
  ];
};
