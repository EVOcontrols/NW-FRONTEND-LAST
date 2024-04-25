import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type Option = {
  value: number;
  label: string;
};

type Address = {
  id: number;
  entrance_id?: number | undefined;
  building_id?: number | undefined;
  street_id?: number | undefined;
};

type Props = {
  setFieldValue: (name: 'entrances_ids', val: number[]) => void;
  initialAccess?: Array<{
    street?: Option;
    building?: Option;
    entrance?: Option;
  }>;
};

export const useSecurityAccessEditor = ({
  setFieldValue,
  initialAccess = [],
}: Props) => {
  const { t } = useTranslation('security');
  const [address, setAddress] = useState<Array<Address>>([
    { id: Math.random() },
  ]);

  useEffect(() => {
    if (initialAccess.length) {
      const initialAddress = initialAccess.map((el) => {
        return {
          id: Math.random(),
          entrance_id: el.entrance?.value,
        };
      });
      setAddress(initialAddress);
    }
  }, [initialAccess]);

  const handleUpdateValues = useCallback(
    (index: number) => (data?: Omit<Address, 'id'>) => {
      const newValues = [...address];
      const entrances: number[] = [];
      if (data) {
        newValues[index] = { ...data, id: newValues[index].id };
        newValues.forEach(({ entrance_id }) => {
          if (entrance_id) {
            entrances.push(entrance_id);
          }
        });
        setAddress(newValues);
      } else {
        newValues.splice(index, 1);
        newValues.forEach(({ entrance_id }) => {
          if (entrance_id) {
            entrances.push(entrance_id);
          }
        });
        setAddress(newValues);
      }
      setFieldValue('entrances_ids', entrances);
    },
    [setFieldValue, address],
  );

  const handleClear = useCallback(
    (index: number) => () => {
      const newValues = [...address];
      newValues.splice(index, 1);
      const entrances: number[] = [];
      newValues.forEach(({ entrance_id }) => {
        if (entrance_id) {
          entrances.push(entrance_id);
        }
      });
      setAddress(newValues);
      setFieldValue('entrances_ids', entrances);
    },
    [address, setFieldValue],
  );

  const handleAdd = () =>
    setAddress((value) => {
      return [...value, { id: Math.random() }];
    });

  return {
    t,
    address,
    onChange: handleUpdateValues,
    onClear: handleClear,
    onAdd: handleAdd,
    isDisabled: !address[address.length - 1]?.entrance_id,
  };
};