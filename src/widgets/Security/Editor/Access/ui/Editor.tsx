import { FormikErrors } from 'formik';
import { AddressFilters } from '@features/address';
import { IconClose, IconPlusRounded } from '@shared/icons';
import { Button, Text, Title } from '@shared/ui';
import { useSecurityAccessEditor } from '../hook';
import styles from './Editor.module.scss';

type Data = {
  entrances_ids: number[];
};

type Option = {
  value: number;
  label: string;
};

interface Props {
  title?: string;
  values: Data;
  errors: FormikErrors<Data>;
  initialAccess?: Array<{
    street?: Option;
    building?: Option;
    entrance?: Option;
  }>;
  setFieldValue: (
    field: keyof Data,
    value: Array<number>,
    shouldValidate?: boolean | undefined,
  ) => Promise<void> | Promise<FormikErrors<Data>>;
}

export const SecurityAccessEditor = ({
  // values,
  setFieldValue,
  // errors,
  title,
  initialAccess,
}: Props) => {
  const { t, onAdd, onChange, onClear, address, isDisabled } =
    useSecurityAccessEditor({
      setFieldValue,
      initialAccess,
    });
  return (
    <div className={styles.wrapper}>
      <Title fontWeight="semibold" className={styles.title}>
        {title}
      </Title>
      {address.map((el, index) => {
        const isRemoveDisabled = !el?.entrance_id || address.length === 1;
        return (
          <div className={styles.element} key={`AddressFilters-${el.id}`}>
            <AddressFilters
              initialValues={initialAccess?.[index]}
              setFilters={onChange(index)}
            />
            <Button
              variant="text"
              onClick={onClear(index)}
              className={styles.add}
              disabled={isRemoveDisabled}
            >
              <IconClose width={20} height={20} />
            </Button>
          </div>
        );
      })}
      <Button
        variant="text"
        onClick={onAdd}
        className={styles.add}
        disabled={isDisabled}
      >
        <IconPlusRounded width={20} height={20} />
        <Text>{t('actions.addAddress')}</Text>
      </Button>
    </div>
  );
};