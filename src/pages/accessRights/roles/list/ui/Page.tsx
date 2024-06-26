import { Link } from 'react-router-dom';
import {
  Modal,
  ModalDelete,
  PageHeader,
  PageSkeleton,
  Pagination,
  PerPage,
} from '@entities/components';
import { AppRoutes, AppRoutesEnum } from '@shared/constants';
import { IconPlus } from '@shared/icons';
import { Button, Card } from '@shared/ui';
import { Table } from '@shared/ui';
import { useSecurityAccessPage } from '../hook';
import styles from './Page.module.scss';

const MainPage = () => {
  const {
    t,
    isLoading,
    perPage,
    setPage,
    setPerPage,
    total,
    tableHeader,
    tableData,
    page,
    handleCloseModal,
    handleDelete,
    isModalOpen,
  } = useSecurityAccessPage();
  return (
    <PageSkeleton className={styles.wrapper}>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalDelete
          handleCloseModal={handleCloseModal}
          handleDelete={handleDelete}
          text={t('remove.text')}
          title={t('remove.title')}
        />
      </Modal>
      <PageHeader
        breadcrumbs={[
          {
            title: t('modules.list'),
            href: AppRoutes[AppRoutesEnum.ADMIN_ROLES](),
          },
        ]}
        controls={
          <Link to={AppRoutes[AppRoutesEnum.ADMIN_ROLES_CREATE]()}>
            <Button variant="primary" size="small">
              <IconPlus width={20} height={20} />
              {t('actions.add')}
            </Button>
          </Link>
        }
      />
      <Card className={styles.card} flexDirection="column" loading={isLoading}>
        <Table config={tableHeader} items={tableData} />
        <div className={styles.controls}>
          <PerPage active={perPage} setActive={setPerPage} />
          <Pagination page={page} total={total} onChange={setPage} />
        </div>
      </Card>
    </PageSkeleton>
  );
};

export default MainPage;
