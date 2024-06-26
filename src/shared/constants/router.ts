export enum AppRoutesEnum {
  // User pages
  RESET_PASSWORD,
  NEWS_CURRENT,
  EVENT_CURRENT,
  MAIN,
  FORBIDDEN,
  NEWS,
  POSTER,
  ACTIVITY_VOTING,
  ACTIVITY_VOTING_CURRENT,
  ACTIVITY_MEETINGS,
  ACTIVITY_MEETINGS_CURRENT,

  SERVICES,
  LOYALTY,
  SERVICES_CURRENT,
  LOYALTY_CURRENT,

  REQUESTS,
  REQUESTS_CURRENT,
  REQUESTS_CREATE,
  APPLICATIONS,
  APPLICATIONS_CREATE,

  TECHNICAL_WORKS,
  KNOWLEDGE,
  SETTINGS,

  ADMIN,
  ADMIN_INFO_TECHNICAL_WORKS,
  ADMIN_INFO_ANNOUNCEMENTS,

  ACCOUNTING,
  STATISTIC,

  SECURITY,
  SECURITY_ACCESS,
  SECURITY_ACCESS_CREATE,
  SECURITY_ACCESS_UPDATE,
  SECURITY_ACCESS_CURRENT,

  SECURITY_SLS_INTERCOM,
  SECURITY_SLS_INTERCOM_CREATE,
  SECURITY_SLS_INTERCOM_UPDATE,
  SECURITY_SLS_INTERCOM_CURRENT,

  SECURITY_INTERCOM,
  SECURITY_INTERCOM_CREATE,
  SECURITY_INTERCOM_UPDATE,
  SECURITY_INTERCOM_CURRENT,

  SECURITY_VIDEO,
  SECURITY_VIDEO_CREATE,
  SECURITY_VIDEO_UPDATE,
  SECURITY_VIDEO_CURRENT,

  ENGINEERING,
  ENGINEERING_ENERGY,
  ENGINEERING_ENERGY_CURRENT,

  ENGINEERING_HEATING,
  ENGINEERING_HEATING_CURRENT,

  ENGINEERING_ELEVATORS,
  ENGINEERING_ELEVATOR_CREATE,
  ENGINEERING_ELEVATOR_UPDATE,
  ENGINEERING_ELEVATOR_CURRENT,

  PASSPORT,

  ADMIN_ROLES,
  ADMIN_ROLES_CREATE,
  ADMIN_ROLES_UPDATE,

  USERS,
  RESIDENTS,
  RESIDENTS_CURRENT,
  EMPLOYEES,
  EMPLOYEES_CURRENT,
  EMPLOYEES_CREATE,
  EMPLOYEES_UPDATE,

  ADMINISTRATE,
  ADMIN_REQUESTS,
  ADMIN_REQUESTS_CURRENT,
  ADMIN_APPLICATIONS,

  ADMIN_NOTIFICATIONS,
  ADMIN_NOTIFICATIONS_CREATE,
  ADMIN_NOTIFICATIONS_CURRENT,

  ADMIN_TECHNICAL_WORKS,
  ADMIN_TECHNICAL_WORKS_CREATE,
  ADMIN_TECHNICAL_WORKS_UPDATE,

  ADMIN_VOTING,
  ADMIN_VOTING_CREATE,
  ADMIN_VOTING_UPDATE,
  ADMIN_VOTING_UPDATE_QUESTIONS,
  ADMIN_VOTING_CURRENT,

  ADMIN_LOYALTY,
  ADMIN_LOYALTY_CREATE,
  ADMIN_LOYALTY_UPDATE,

  ADMIN_SERVICES,
  ADMIN_SERVICES_CREATE,
  ADMIN_SERVICES_UPDATE,

  ADMIN_ADVERTISEMENT,
  ADMIN_ADVERTISEMENT_CREATE,
  ADMIN_ADVERTISEMENT_UPDATE,

  ADMIN_EMPLOYEE_ANNOUNCEMENTS,
  ADMIN_EMPLOYEE_ANNOUNCEMENTS_CREATE,
  ADMIN_EMPLOYEE_ANNOUNCEMENTS_UPDATE,
  // Auth
  AUTH_LOGIN,
  AUTH_REGISTRATION,
  AUTH_REGISTRATION_CONFIRM,

  AUTH_RESTORE_PASSWORD_EMAIL,
  AUTH_RESTORE_PASSWORD_PHONE,
  // Admin news
  ADMIN_NEWS,
  UPDATE_NEWS,
  CREATE_NEWS,
  // Admin events
  ADMIN_EVENTS,
  UPDATE_EVENT,
  CREATE_EVENT,
  // Admin meetings
  ADMIN_MEETINGS,
  UPDATE_MEETINGS,
  CREATE_MEETINGS,
  // not found
  NOT_FOUND,
}

export const AppRoutes = {
  [AppRoutesEnum.MAIN]: () => '/',
  [AppRoutesEnum.ADMIN]: () => '/admin',
  [AppRoutesEnum.ADMIN_INFO_TECHNICAL_WORKS]: () =>
    '/admin/info/technical_works',
  [AppRoutesEnum.ADMIN_INFO_ANNOUNCEMENTS]: () => '/admin/info/announcements',
  [AppRoutesEnum.EVENT_CURRENT]: (id: number | string) => `/event/${id}`,
  [AppRoutesEnum.ACTIVITY_MEETINGS_CURRENT]: (id: number | string) =>
    `/meeting/${id}`,

  [AppRoutesEnum.RESET_PASSWORD]: () => '/reset_password',

  [AppRoutesEnum.AUTH_LOGIN]: () => '/login',
  [AppRoutesEnum.AUTH_REGISTRATION]: () => '/registration',
  [AppRoutesEnum.AUTH_RESTORE_PASSWORD_EMAIL]: () => '/restore_password/email',
  [AppRoutesEnum.AUTH_RESTORE_PASSWORD_PHONE]: () => '/restore_password/phone',
  [AppRoutesEnum.AUTH_REGISTRATION_CONFIRM]: (id: number | string) =>
    `/registration/confirm/${id}`,

  [AppRoutesEnum.NEWS]: () => '/news',
  [AppRoutesEnum.NEWS_CURRENT]: (id: number | string) => `/news/${id}`,
  [AppRoutesEnum.POSTER]: () => '/poster',
  [AppRoutesEnum.ACTIVITY_MEETINGS]: () => '/activity/meetings',
  [AppRoutesEnum.ACTIVITY_VOTING]: () => '/activity/voting',
  [AppRoutesEnum.ACTIVITY_VOTING_CURRENT]: (id: number | string) =>
    `/activity/voting/${id}`,

  [AppRoutesEnum.SERVICES]: () => '/services',
  [AppRoutesEnum.LOYALTY]: () => '/loyalty',
  [AppRoutesEnum.SERVICES_CURRENT]: (id: number | string) => `/services/${id}`,
  [AppRoutesEnum.LOYALTY_CURRENT]: (id: number | string) => `/loyalty/${id}`,

  [AppRoutesEnum.REQUESTS]: () => '/requests',
  [AppRoutesEnum.REQUESTS_CREATE]: () => '/requests/create',
  [AppRoutesEnum.REQUESTS_CURRENT]: (id: number | string) => `/requests/${id}`,
  [AppRoutesEnum.APPLICATIONS]: () => '/applications',
  [AppRoutesEnum.APPLICATIONS_CREATE]: () => '/applications/create',

  [AppRoutesEnum.TECHNICAL_WORKS]: () => '/technical_works',
  [AppRoutesEnum.KNOWLEDGE]: () => '/knowledge',
  [AppRoutesEnum.SETTINGS]: () => '/settings',

  [AppRoutesEnum.ADMIN_ROLES]: () => '/admin/roles',
  [AppRoutesEnum.ADMIN_ROLES_CREATE]: () => '/admin/roles/create',
  [AppRoutesEnum.ADMIN_ROLES_UPDATE]: (id: number | string) =>
    `/admin/roles/${id}/update`,
  [AppRoutesEnum.PASSPORT]: () => '/admin/passport',

  [AppRoutesEnum.RESIDENTS]: () => '/admin/residents',
  [AppRoutesEnum.RESIDENTS_CURRENT]: (id: number | string) =>
    `/admin/residents/${id}`,
  [AppRoutesEnum.EMPLOYEES]: () => '/admin/employees',
  [AppRoutesEnum.EMPLOYEES_CURRENT]: (id: number | string) =>
    `/admin/employees/${id}`,
  [AppRoutesEnum.EMPLOYEES_CREATE]: () => '/admin/employees/create',
  [AppRoutesEnum.EMPLOYEES_UPDATE]: (id: number | string) =>
    `/admin/employees/update/${id}`,

  [AppRoutesEnum.ADMIN_REQUESTS]: () => '/admin/requests',
  [AppRoutesEnum.ADMIN_REQUESTS_CURRENT]: (id: number | string) =>
    `/admin/requests/${id}`,
  [AppRoutesEnum.ADMIN_APPLICATIONS]: () => '/admin/applications',

  [AppRoutesEnum.ENGINEERING_ENERGY]: () => '/admin/engineering/energy',
  [AppRoutesEnum.ENGINEERING_ENERGY_CURRENT]: (id: number | string) =>
    `/admin/engineering/energy/${id}`,

  [AppRoutesEnum.ENGINEERING_HEATING]: () => '/admin/engineering/heating',
  [AppRoutesEnum.ENGINEERING_HEATING_CURRENT]: (id: number | string) =>
    `/admin/engineering/heating/${id}`,

  [AppRoutesEnum.ENGINEERING_ELEVATORS]: () => '/admin/engineering/elevators',
  [AppRoutesEnum.ENGINEERING_ELEVATOR_CREATE]: () =>
    '/admin/engineering/elevator/create',
  [AppRoutesEnum.ENGINEERING_ELEVATOR_UPDATE]: (id: number | string) =>
    `/admin/engineering/elevator/${id}/update`,
  [AppRoutesEnum.ENGINEERING_ELEVATOR_CURRENT]: (id: number | string) =>
    `/admin/engineering/elevator/${id}`,

  [AppRoutesEnum.SECURITY]: () => '/admin/security',

  [AppRoutesEnum.SECURITY_ACCESS]: () => '/admin/security/access',
  [AppRoutesEnum.SECURITY_ACCESS_CREATE]: () => '/admin/security/access/create',
  [AppRoutesEnum.SECURITY_ACCESS_CURRENT]: (id: number | string) =>
    `/admin/security/access/${id}`,
  [AppRoutesEnum.SECURITY_ACCESS_UPDATE]: (id: number | string) =>
    `/admin/security/access/${id}/update`,

  [AppRoutesEnum.SECURITY_INTERCOM]: () => '/admin/security/intercom',
  [AppRoutesEnum.SECURITY_INTERCOM_CREATE]: () =>
    '/admin/security/intercom/create',
  [AppRoutesEnum.SECURITY_INTERCOM_CURRENT]: (id: number | string) =>
    `/admin/security/intercom/${id}`,
  [AppRoutesEnum.SECURITY_INTERCOM_UPDATE]: (id: number | string) =>
    `/admin/security/intercom/${id}/update`,

  [AppRoutesEnum.SECURITY_SLS_INTERCOM]: () => '/admin/security/intercom/sls',
  [AppRoutesEnum.SECURITY_SLS_INTERCOM_CREATE]: () =>
    '/admin/security/intercom/sls/create',
  [AppRoutesEnum.SECURITY_SLS_INTERCOM_CURRENT]: (id: number | string) =>
    `/admin/security/intercom/sls/${id}`,
  [AppRoutesEnum.SECURITY_SLS_INTERCOM_UPDATE]: (id: number | string) =>
    `/admin/security/intercom/sls/${id}/update`,

  [AppRoutesEnum.SECURITY_VIDEO]: () => '/admin/security/video',
  [AppRoutesEnum.SECURITY_VIDEO_CREATE]: () => '/admin/security/video/create',
  [AppRoutesEnum.SECURITY_VIDEO_CURRENT]: (id: number | string) =>
    `/admin/security/video/${id}`,
  [AppRoutesEnum.SECURITY_VIDEO_UPDATE]: (id: number | string) =>
    `/admin/security/video/${id}/update`,

  [AppRoutesEnum.STATISTIC]: () => '/admin/statistic',
  [AppRoutesEnum.ACCOUNTING]: () => '/admin/accounting',

  [AppRoutesEnum.ADMIN_NEWS]: () => '/admin/news',
  [AppRoutesEnum.ADMIN_EVENTS]: () => '/admin/events',
  [AppRoutesEnum.ADMIN_MEETINGS]: () => '/admin/meeting',

  [AppRoutesEnum.ADMIN_LOYALTY]: () => '/admin/loyalty',
  [AppRoutesEnum.ADMIN_LOYALTY_CREATE]: () => '/admin/loyalty/create',
  [AppRoutesEnum.ADMIN_LOYALTY_UPDATE]: (id: number | string) =>
    `/admin/loyalty/${id}`,

  [AppRoutesEnum.ADMIN_SERVICES]: () => '/admin/services',
  [AppRoutesEnum.ADMIN_SERVICES_CREATE]: () => '/admin/services/create',
  [AppRoutesEnum.ADMIN_SERVICES_UPDATE]: (id: number | string) =>
    `/admin/services/${id}/update`,

  [AppRoutesEnum.ADMIN_ADVERTISEMENT]: () => '/admin/advertisement',
  [AppRoutesEnum.ADMIN_ADVERTISEMENT_CREATE]: () =>
    '/admin/advertisement/create',
  [AppRoutesEnum.ADMIN_ADVERTISEMENT_UPDATE]: (id: number | string) =>
    `/admin/advertisement/${id}/update`,

  [AppRoutesEnum.ADMIN_EMPLOYEE_ANNOUNCEMENTS]: () =>
    '/admin/employee_announcements',
  [AppRoutesEnum.ADMIN_EMPLOYEE_ANNOUNCEMENTS_CREATE]: () =>
    '/admin/employee_announcements/create',
  [AppRoutesEnum.ADMIN_EMPLOYEE_ANNOUNCEMENTS_UPDATE]: (id: number | string) =>
    `/admin/employee_announcements/${id}/update`,

  [AppRoutesEnum.ADMIN_NOTIFICATIONS]: () => '/admin/notifications',
  [AppRoutesEnum.ADMIN_NOTIFICATIONS_CREATE]: () =>
    '/admin/notifications/create',
  [AppRoutesEnum.ADMIN_NOTIFICATIONS_CURRENT]: (id: number | string) =>
    `/admin/notifications/${id}`,

  [AppRoutesEnum.ADMIN_TECHNICAL_WORKS]: () => '/admin/technical_works',
  [AppRoutesEnum.ADMIN_TECHNICAL_WORKS_CREATE]: () =>
    '/admin/technical_works/create',
  [AppRoutesEnum.ADMIN_TECHNICAL_WORKS_UPDATE]: (id: number | string) =>
    `/admin/technical_works/${id}/update`,

  [AppRoutesEnum.ADMIN_VOTING]: () => '/admin/voting',
  [AppRoutesEnum.ADMIN_VOTING_CREATE]: () => '/admin/voting/create',
  [AppRoutesEnum.ADMIN_VOTING_UPDATE]: (id: number | string) =>
    `/admin/voting/${id}/update`,
  [AppRoutesEnum.ADMIN_VOTING_UPDATE_QUESTIONS]: (id: number | string) =>
    `/admin/voting/${id}/update/questions`,
  [AppRoutesEnum.ADMIN_VOTING_CURRENT]: (id: number | string) =>
    `/admin/voting/${id}`,

  [AppRoutesEnum.CREATE_EVENT]: () => '/admin/events/create',
  [AppRoutesEnum.CREATE_MEETINGS]: () => '/admin/meeting/create',
  [AppRoutesEnum.CREATE_NEWS]: () => '/admin/news/create',

  [AppRoutesEnum.UPDATE_EVENT]: (id: number | string) => `/admin/events/${id}`,
  [AppRoutesEnum.UPDATE_MEETINGS]: (id: number | string) =>
    `/admin/meeting/${id}`,
  [AppRoutesEnum.UPDATE_NEWS]: (id: number | string) => `/admin/news/${id}`,

  [AppRoutesEnum.FORBIDDEN]: () => '/forbidden',

  [AppRoutesEnum.NOT_FOUND]: () => '*',
};

export const AccessRoles: Partial<Record<AppRoutesEnum, Array<number>>> = {
  [AppRoutesEnum.ACCOUNTING]: [1, 2, 3, 4, 5],
  [AppRoutesEnum.STATISTIC]: [6],

  [AppRoutesEnum.SECURITY]: [7, 8, 9, 10],
  [AppRoutesEnum.SECURITY_ACCESS]: [7],
  [AppRoutesEnum.SECURITY_ACCESS_CREATE]: [7],
  [AppRoutesEnum.SECURITY_ACCESS_CURRENT]: [7],
  [AppRoutesEnum.SECURITY_ACCESS_UPDATE]: [7],

  [AppRoutesEnum.SECURITY_INTERCOM]: [8],
  [AppRoutesEnum.SECURITY_INTERCOM_CREATE]: [8],
  [AppRoutesEnum.SECURITY_INTERCOM_CURRENT]: [8],
  [AppRoutesEnum.SECURITY_INTERCOM_UPDATE]: [8],

  [AppRoutesEnum.SECURITY_VIDEO]: [9],
  [AppRoutesEnum.SECURITY_VIDEO_CREATE]: [9],
  [AppRoutesEnum.SECURITY_VIDEO_CURRENT]: [9],
  [AppRoutesEnum.SECURITY_VIDEO_UPDATE]: [9],

  [AppRoutesEnum.SECURITY_SLS_INTERCOM]: [10],
  [AppRoutesEnum.SECURITY_SLS_INTERCOM_CREATE]: [10],
  [AppRoutesEnum.SECURITY_SLS_INTERCOM_CURRENT]: [10],
  [AppRoutesEnum.SECURITY_SLS_INTERCOM_UPDATE]: [10],

  [AppRoutesEnum.ENGINEERING]: [11, 12, 13],
  [AppRoutesEnum.ENGINEERING_ENERGY]: [11],
  [AppRoutesEnum.ENGINEERING_ENERGY_CURRENT]: [11],

  [AppRoutesEnum.ENGINEERING_ELEVATORS]: [12],
  [AppRoutesEnum.ENGINEERING_ELEVATOR_CREATE]: [12],
  [AppRoutesEnum.ENGINEERING_ELEVATOR_UPDATE]: [12],
  [AppRoutesEnum.ENGINEERING_ELEVATOR_CURRENT]: [12],

  [AppRoutesEnum.ENGINEERING_HEATING]: [13],
  [AppRoutesEnum.ENGINEERING_HEATING_CURRENT]: [13],

  [AppRoutesEnum.ADMINISTRATE]: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
  [AppRoutesEnum.ADMIN_NEWS]: [14],
  [AppRoutesEnum.CREATE_NEWS]: [14],
  [AppRoutesEnum.UPDATE_NEWS]: [14],

  [AppRoutesEnum.ADMIN_EVENTS]: [15],
  [AppRoutesEnum.CREATE_EVENT]: [15],
  [AppRoutesEnum.UPDATE_EVENT]: [15],

  [AppRoutesEnum.ADMIN_MEETINGS]: [16],
  [AppRoutesEnum.CREATE_MEETINGS]: [16],
  [AppRoutesEnum.UPDATE_MEETINGS]: [16],

  [AppRoutesEnum.ADMIN_NOTIFICATIONS]: [17],
  [AppRoutesEnum.ADMIN_NOTIFICATIONS_CREATE]: [17],
  [AppRoutesEnum.ADMIN_NOTIFICATIONS_CURRENT]: [17],

  [AppRoutesEnum.ADMIN_VOTING]: [18],
  [AppRoutesEnum.ADMIN_VOTING_CREATE]: [18],
  [AppRoutesEnum.ADMIN_VOTING_UPDATE]: [18],
  [AppRoutesEnum.ADMIN_VOTING_UPDATE_QUESTIONS]: [18],
  [AppRoutesEnum.ADMIN_VOTING_CURRENT]: [18],

  [AppRoutesEnum.ADMIN_TECHNICAL_WORKS]: [19],
  [AppRoutesEnum.ADMIN_TECHNICAL_WORKS_CREATE]: [19],
  [AppRoutesEnum.ADMIN_TECHNICAL_WORKS_UPDATE]: [19],

  [AppRoutesEnum.ADMIN_LOYALTY]: [20],
  [AppRoutesEnum.ADMIN_LOYALTY_CREATE]: [20],
  [AppRoutesEnum.ADMIN_LOYALTY_UPDATE]: [20],

  [AppRoutesEnum.ADMIN_SERVICES]: [21],
  [AppRoutesEnum.ADMIN_SERVICES_CREATE]: [21],
  [AppRoutesEnum.ADMIN_SERVICES_UPDATE]: [21],

  [AppRoutesEnum.ADMIN_ADVERTISEMENT]: [22],
  [AppRoutesEnum.ADMIN_ADVERTISEMENT_CREATE]: [22],
  [AppRoutesEnum.ADMIN_ADVERTISEMENT_UPDATE]: [22],

  [AppRoutesEnum.ADMIN_EMPLOYEE_ANNOUNCEMENTS]: [23],
  [AppRoutesEnum.ADMIN_EMPLOYEE_ANNOUNCEMENTS_CREATE]: [23],
  [AppRoutesEnum.ADMIN_EMPLOYEE_ANNOUNCEMENTS_UPDATE]: [23],

  [AppRoutesEnum.PASSPORT]: [24, 25, 26, 27],

  [AppRoutesEnum.USERS]: [28, 29],
  [AppRoutesEnum.RESIDENTS]: [28],
  [AppRoutesEnum.RESIDENTS_CURRENT]: [28],

  [AppRoutesEnum.EMPLOYEES]: [29],
  [AppRoutesEnum.EMPLOYEES_CURRENT]: [29],
  [AppRoutesEnum.EMPLOYEES_CREATE]: [29],
  [AppRoutesEnum.EMPLOYEES_UPDATE]: [29],

  [AppRoutesEnum.ADMIN_ROLES]: [30],
  [AppRoutesEnum.ADMIN_ROLES_CREATE]: [30],
  [AppRoutesEnum.ADMIN_ROLES_UPDATE]: [30],

  [AppRoutesEnum.ADMIN_REQUESTS]: [31],
  [AppRoutesEnum.ADMIN_REQUESTS_CURRENT]: [31],
  [AppRoutesEnum.ADMIN_APPLICATIONS]: [31],
};
