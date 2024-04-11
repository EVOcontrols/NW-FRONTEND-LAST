import classNames from "classnames";
import { FormikErrors } from "formik";
import { Cover } from "@entities/Cover";
import { QuillEditor } from "@entities/QuillEditor";
import { IconStaple } from "@shared/icons";
import { Button, Card, TextField, Title } from "@shared/ui";
import { useCreateNews } from "../hook/useCreateNews";
import styles from "./Editor.module.scss";

type News = {
  cover: string;
  title_ru: string;
  title_en: string;
  html_content_ru: string;
  html_content_en: string;
};

interface Props {
  className?: string;
  loading?: boolean;
  handleUploadImage(file: File): Promise<string>;
  controls?: JSX.Element;
  values: News;
  errors: FormikErrors<News>;
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean | undefined,
  ) =>
    | Promise<void>
    | Promise<
        FormikErrors<{
          title: string;
          html_content: string;
          cover: string;
        }>
      >;
}

export const NewsEditor = ({
  className,
  handleUploadImage,
  controls,
  errors,
  setFieldValue,
  loading,
  values,
}: Props) => {
  const { getInputProps, open, isLoading, t } = useCreateNews({
    handleUploadImage,
    setFieldValue,
  });
  return (
    <Card
      loading={loading}
      className={classNames(styles.wrapper, className)}
      radius={24}
      flexDirection="column"
      gap={20}
    >
      <input {...getInputProps()} />
      <div className={styles.cover}>
        {values.cover === "" ? (
          <Button
            variant={"light"}
            className={styles.downloadButton}
            onClick={open}
            loading={isLoading}
          >
            <IconStaple width={24} height={24} />
            {t("editor.cover.label")}
          </Button>
        ) : (
          <Cover
            src={values.cover}
            onRemove={() => setFieldValue("cover", "")}
          />
        )}
      </div>
      <Title fontWeight="bold" variant="h2">
        {t("editor.versions.ru")}
      </Title>
      <TextField
        value={values.title_ru}
        error={errors.title_ru}
        onChange={(ev) => setFieldValue("title_ru", ev.target.value)}
        wrapperClassName={styles.textField}
        label={t("editor.title.label")}
        placeholder={t("editor.title.placeholder")}
      />
      <QuillEditor
        error={errors.html_content_ru}
        label={t("editor.content.label")}
        initialValue={values.html_content_ru}
        setValue={(val) => setFieldValue("html_content_ru", val)}
        uploadImage={handleUploadImage}
      />
      <Title fontWeight="bold" variant="h2">
        {t("editor.versions.en")}
      </Title>
      <TextField
        value={values.title_en}
        error={errors.title_en}
        onChange={(ev) => setFieldValue("title_en", ev.target.value)}
        wrapperClassName={styles.textField}
        label={t("editor.title.label")}
        placeholder={t("editor.title.placeholder")}
      />
      <QuillEditor
        error={errors.html_content_en}
        label={t("editor.content.label")}
        initialValue={values.html_content_en}
        setValue={(val) => setFieldValue("html_content_en", val)}
        uploadImage={handleUploadImage}
      />
      {controls || ""}
    </Card>
  );
};
