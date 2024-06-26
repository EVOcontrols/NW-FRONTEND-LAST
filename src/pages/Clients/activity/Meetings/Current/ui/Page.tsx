import sanitizeHtml from 'sanitize-html';
import { ContentWidget } from '@widgets/Content';
import { PageHeader, PageSkeleton } from '@entities/components';
import {
  AppRoutes,
  AppRoutesEnum,
  LanguageEnum,
  allowedAttributesSchema,
  allowedIframeHostnamesSchema,
  allowedTagsSanitizer,
} from '@shared/constants';
import { useCurrentMeeting } from '../hook';

export default () => {
  const { isLoading, meeting: meeting, i18n, t } = useCurrentMeeting();
  return (
    <PageSkeleton>
      <PageHeader
        hideTitle
        breadcrumbs={[
          {
            href: AppRoutes[AppRoutesEnum.ACTIVITY_MEETINGS](),
            title: t('routes.meetings'),
          },
          {
            title: meeting?.title[i18n.language as LanguageEnum] || '',
          },
        ]}
      />
      <ContentWidget
        html={
          meeting &&
          sanitizeHtml(meeting.html_content[i18n.language as LanguageEnum], {
            allowedTags: allowedTagsSanitizer,
            allowedAttributes: allowedAttributesSchema,
            allowedIframeHostnames: allowedIframeHostnamesSchema,
          })
        }
        published_at={meeting && new Date(meeting.created_at * 1000)}
        isLoading={isLoading}
        title={meeting?.title[i18n.language as LanguageEnum]}
        date={
          meeting?.target_date
            ? new Date(meeting.target_date * 1000)
            : undefined
        }
        link={meeting?.meeting_link}
      />
    </PageSkeleton>
  );
};
