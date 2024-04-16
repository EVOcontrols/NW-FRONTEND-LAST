import { ContentEditor, ContentWithLanguageSelection } from "@widgets/Content";
import { ContentUpdateActions } from "@widgets/Content/actions/Update";
import { Modal, PageHeader, PageSkeleton } from "@entities/components";
import { getRouteAdminEvents } from "@shared/constants";
import { IconEyeOpen } from "@shared/icons";
import { Button } from "@shared/ui";
import { useCreateEventPage } from "../hook";

const Page = () => {
  const {
    handleUploadImage,
    status,
    isLoading,
    errors,
    handleSubmit,
    setFieldValue,
    handleDelete,
    setStatus,
    values,
    isValid,
    open,
    setOpen,
    t,
  } = useCreateEventPage();

  const modalConfig = {
    en: {
      created_at: new Date(),
      html: values.html_content_en,
      title: values.title_en,
      date: values.target_date,
    },
    ru: {
      created_at: new Date(),
      html: values.html_content_ru,
      title: values.title_ru,
      date: values.target_date,
    },
  };

  return (
    <PageSkeleton>
      <PageHeader
        breadcrumbs={[
          { href: getRouteAdminEvents(), title: t("routes.events") },
          { href: "", title: t("routes.edit") },
        ]}
        controls={
          <Button
            variant="white"
            size="small"
            onClick={() => setOpen(true)}
            disabled={!isValid}
          >
            <IconEyeOpen width={20} height={20} />
            {t("controls.preview")}
          </Button>
        }
      />
      <form onSubmit={handleSubmit}>
        <Modal
          isOpen={open}
          onClose={() => {
            setOpen(false);
          }}
        >
          <ContentWithLanguageSelection config={modalConfig} />
        </Modal>
        <ContentEditor
          loading={isLoading}
          handleUploadImage={handleUploadImage}
          errors={errors}
          setFieldValue={setFieldValue}
          values={values}
          controls={
            <ContentUpdateActions
              handleDelete={handleDelete}
              isValid={isValid}
              setStatus={setStatus}
              status={status}
            />
          }
        />
      </form>
    </PageSkeleton>
  );
};

export default Page;
