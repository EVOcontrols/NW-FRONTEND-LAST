import { useFormik } from "formik";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetCurrentEvent, useUpdateEvent } from "@features/Admin";
import { useUploadImage } from "@features/Image/hooks/useUploadImage";
import { axiosApi } from "@entities/api";
import { getRouteAdminEvents } from "@shared/constants";

export const useCreateEventPage = () => {
  const { t } = useTranslation("events");
  const { id } = useParams<{ id: string }>();
  const { create, validate } = useUpdateEvent(id as string);
  const { getData } = useGetCurrentEvent(id as string);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<0 | 1 | 2>(0);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { handleUploadImage } = useUploadImage();

  type Values = {
    title_en: string;
    html_content_ru: string;
    title_ru: string;
    html_content_en: string;
    cover: string | null;
    target_date: Date;
  };

  const initialValues: Values = {
    title_en: " ",
    html_content_ru: " ",
    title_ru: " ",
    html_content_en: " ",
    cover: null,
    target_date: new Date(),
  };

  const { values, errors, setFieldValue, handleSubmit, isValid, setValues } =
    useFormik<Values>({
      initialValues,
      validate: (val) => validate({ ...val, status }),
      onSubmit: async (body) => {
        const data = await create({ ...body, status });
        if (data) {
          navigate(getRouteAdminEvents());
        }
      },
    });

  const handleDelete = useCallback(async () => {
    try {
      await axiosApi.delete(`/news/${id}`);
      navigate(getRouteAdminEvents());
      toast.success(t("toast.deleteSuccess"));
    } catch (error) {
      console.log(error);
      toast.error(t("toast.deleteError"));
    }
  }, [id, navigate, t]);

  useEffect(() => {
    setIsLoading(true);
    getData()
      .then((data) => {
        if (data) {
          const newValues = {
            cover: data.cover || null,
            html_content_en: data.html_content.en,
            html_content_ru: data.html_content.ru,
            target_date: new Date(data.target_date * 1000),
            title_en: data.title.en,
            title_ru: data.title.ru,
          };
          setValues(newValues);
          setStatus(data.status || 0);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [getData, setValues]);

  return {
    handleUploadImage,
    status,
    isLoading,
    navigate,
    values,
    errors,
    setFieldValue,
    handleSubmit,
    handleDelete,
    setStatus,
    open,
    setOpen,
    isValid,
    t,
  };
};
