import classNames from "classnames";
import { FormikErrors } from "formik";
import { Cover } from "@entities/Cover";
import { QuillEditor } from "@entities/QuillEditor";
import { IconStaple } from "@shared/icons";
import { Button, Card, TextField } from "@shared/ui";
import { useCreateNews } from "../hook/useNewsEditor";
import styles from "./Editor.module.scss";

interface Props {
  className?: string;
  handleUploadImage(file: File): Promise<string>;
  controls?: JSX.Element;
  values: {
    title: string;
    html_content: string;
    cover: string;
  };
  errors: FormikErrors<{
    title: string;
    html_content: string;
    cover: string;
  }>;
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
  values,
}: Props) => {
  const { getInputProps, open } = useCreateNews({
    handleUploadImage,
    setFieldValue,
  });
  return (
    <Card
      className={classNames(styles.wrapper, className)}
      radius={24}
      flexDirection="column"
      gap={24}
    >
      <input {...getInputProps()} />
      <TextField
        value={values.title}
        error={errors.title}
        onChange={(ev) => setFieldValue("title", ev.target.value)}
        wrapperClassName={styles.textField}
        label="Заголовок"
        placeholder="Заголовок новости"
      />
      {values.cover === "" ? (
        <Button
          variant={"light"}
          className={styles.downloadButton}
          onClick={open}
        >
          <IconStaple width={24} height={24} />
          Изображение обложки
        </Button>
      ) : (
        <Cover src={values.cover} onRemove={() => setFieldValue("cover", "")} />
      )}
      <QuillEditor
        error={errors.html_content}
        label="Текст новости"
        initialValue={values.html_content}
        setValue={(val) => setFieldValue("html_content", val)}
        uploadImage={handleUploadImage}
      />
      {controls || ""}
    </Card>
  );
};
