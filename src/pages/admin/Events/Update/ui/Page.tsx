import classNames from "classnames";
import { EventEditor } from "@widgets/Events";
import { PageLayout } from "@widgets/layouts";
import { PageHeader } from "@entities/PageHeader";
import { getRouteAdminEvents } from "@shared/constants";
import { Button } from "@shared/ui";
import { useCreateEventPage } from "../hook";
import styles from "./Page.module.scss";

const Page = () => {
  const {
    handleUploadImage,
    status,
    isLoading,
    navigate,
    errors,
    handleSubmit,
    setFieldValue,
    handleDelete,
    setStatus,
    values,
    t,
  } = useCreateEventPage();
  const controls = status ? (
    <div className={styles.submitBlock}>
      <Button
        className={styles.submitButton}
        size="large"
        variant="primary"
        type="submit"
      >
        {t("controls.refresh")}
      </Button>
      <Button
        className={styles.submitButton}
        size="large"
        variant="secondary"
        type="button"
        onClick={() => navigate(-1)}
      >
        {t("controls.cancel")}
      </Button>
      <Button
        className={classNames(styles.submitButton, styles.deleteBtn)}
        size="large"
        variant="danger"
        type="button"
        onClick={handleDelete}
      >
        {t("controls.delete")}
      </Button>
    </div>
  ) : (
    <div className={styles.submitBlock}>
      <Button
        className={styles.submitButton}
        size="large"
        variant="primary"
        type="submit"
        onClick={() => {
          setStatus(1);
        }}
      >
        {t("controls.publish")}
      </Button>
      <Button
        className={styles.submitButton}
        size="large"
        variant="secondary"
        type="submit"
      >
        {t("controls.refresh")}
      </Button>
      <Button
        className={classNames(styles.submitButton, styles.deleteBtn)}
        size="large"
        variant="danger"
        type="button"
        onClick={handleDelete}
      >
        {t("controls.delete")}
      </Button>
    </div>
  );

  return (
    <PageLayout>
      <PageHeader
        breadcrumbs={[
          { href: getRouteAdminEvents(), title: t("routes.events") },
          { href: "", title: t("routes.edit") },
        ]}
      />
      <form onSubmit={handleSubmit}>
        <EventEditor
          loading={isLoading}
          handleUploadImage={handleUploadImage}
          errors={errors}
          setFieldValue={setFieldValue}
          values={values}
          controls={controls}
        />
      </form>
    </PageLayout>
  );
};

export default Page;
