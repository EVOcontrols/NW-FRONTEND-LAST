import { useTranslation } from 'react-i18next';
import { Text } from '@shared/ui';
import { ConfigItemType } from '@shared/ui/Table';

interface LangsWrapper<T> {
  lang: T;
}

interface Options {
  value: string | number;
  label: string;
}

interface Props {
  value: LangsWrapper<Options | null>;
  onChange: LangsWrapper<(val: Options | null) => void>;
}

export const useTableHeader: (props: Props) => Array<ConfigItemType> = () => {
  const { t } = useTranslation('table');
  return [
    {
      name: 'id',
      label: (
        <Text fontWeight="regular" variant="body14">
          {'№'}
        </Text>
      ),
      width: 92,
    },
    {
      name: 'id_1c',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('header.id_1c')}
        </Text>
      ),
      width: 92,
    },
    {
      name: 'name',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('header.fullName')}
        </Text>
      ),
      width: 200,
    },
    {
      name: 'phone_number',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('header.phone_number')}
        </Text>
      ),
      width: 175,
    },
    {
      name: 'department',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('header.department')}
        </Text>
      ),
      width: 180,
    },
    {
      name: 'role',
      label: (
        <Text fontWeight="regular" variant="body14">
          {t('header.role')}
        </Text>
      ),
    },
    {
      name: 'controls',
      width: 52,
    },
  ];
};
