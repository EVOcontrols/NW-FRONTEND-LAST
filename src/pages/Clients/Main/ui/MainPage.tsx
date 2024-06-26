import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { ActivitiesSlider } from '@widgets/activities';
import { EventsSlider } from '@widgets/events';
import { NewsSlider } from '@widgets/news';
import {
  AdvertisementCard,
  PageSkeleton,
  UserGreetings,
} from '@entities/components';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import {
  BREAK_POINT_MOBILE,
  BREAK_POINT_TAB,
  LanguageEnum,
} from '@shared/constants';
import { Card, Title } from '@shared/ui';
import { sliderConfig } from '../config';
import { useMainPage } from '../hook';
import styles from './Main.module.scss';

const MainPage = () => {
  const {
    innerWidth,
    t,
    dateString,
    userGreetingsMessage,
    isLogin,
    advertisements,
    i18n,
  } = useMainPage();

  return (
    <PageSkeleton className={styles.wrapper}>
      {isLogin && (
        <UserGreetings date={dateString} title={userGreetingsMessage} />
      )}
      <div className={styles.advertisements} style={{ gap: sliderConfig.gap }}>
        {advertisements.map((el) => {
          return (
            <AdvertisementCard
              className={styles.advertisement}
              url={el.url}
              image={el[`image_${i18n.language as LanguageEnum}`].url}
              key={`advertisement-card-${el.id}`}
            />
          );
        })}
      </div>
      <Card
        className={classNames(styles.card, styles.transparent)}
        flexDirection="column"
        gap={20}
        radius={0}
      >
        <div className={styles.text_wrapper}>
          <Title variant="h2" fontWeight="semibold">
            {t('sidebar.news')}
          </Title>
          <Link className={styles.link} to={AppRoutes[AppRoutesEnum.NEWS]()}>
            {t('all')}
          </Link>
        </div>
        <NewsSlider
          slidesOnPage={
            innerWidth >= BREAK_POINT_TAB
              ? sliderConfig.slidesOnPage.desctop
              : innerWidth > BREAK_POINT_MOBILE
                ? sliderConfig.slidesOnPage.tab
                : sliderConfig.slidesOnPage.mobile
          }
          gap={sliderConfig.gap}
        />
      </Card>
      <Card className={styles.card} flexDirection="column" gap={20} radius={0}>
        <div className={styles.text_wrapper}>
          <Title variant="h2" fontWeight="semibold">
            {t('poster')}
          </Title>
          <Link className={styles.link} to={AppRoutes[AppRoutesEnum.POSTER]()}>
            {t('all')}
          </Link>
        </div>
        <EventsSlider
          slidesOnPage={
            innerWidth >= BREAK_POINT_TAB
              ? sliderConfig.slidesOnPage.desctop
              : innerWidth > BREAK_POINT_MOBILE
                ? sliderConfig.slidesOnPage.tab
                : sliderConfig.slidesOnPage.mobile
          }
          gap={sliderConfig.gap}
        />
      </Card>
      {isLogin && (
        <Card
          className={classNames(styles.card, styles.transparent)}
          flexDirection="column"
          gap={20}
          radius={0}
        >
          <div className={styles.text_wrapper}>
            <Title variant="h2" fontWeight="semibold">
              {t('sidebar.activity')}
            </Title>
          </div>
          <ActivitiesSlider
            slidesOnPage={
              innerWidth >= BREAK_POINT_MOBILE
                ? sliderConfig.slidesOnPage.tab
                : sliderConfig.slidesOnPage.mobile
            }
            gap={sliderConfig.gap}
          />
        </Card>
      )}
    </PageSkeleton>
  );
};

export default MainPage;
