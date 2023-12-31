import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import RHFTextField from '../common/rhf-text-field';
import { Brand, Car, Owner } from '../../types';
import FormProvider from '../common/form-provider';
import { Button, Stack } from '@mui/material';
import RHFAutocomplete from '../common/rhf-autocomplete';
import { useGetBrands } from '../../services/brand/use-get-brands';
import { useGetOwners } from '../../services/owner/use-get-owners';

type FormValuesProps = Omit<Car, 'id'>;

interface Props {
  defaultValues: FormValuesProps;
  updateCar: (car: Car) => void;
}

export const CarDetailCard = ({ defaultValues, updateCar }: Props) => {
  const RenameMatchSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    year_made: Yup.number().required('Required'),
    type: Yup.string().required('Required'),
    engine: Yup.string().required('Required'),
    image_url: Yup.string().required('Required'),
  });

  const { data: brandsData } = useGetBrands();

  const { data: ownersData } = useGetOwners();

  const methods = useForm({
    resolver: yupResolver(RenameMatchSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (values: FormValuesProps) => {
    updateCar(values as Car);
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit as any)}>
      <Stack spacing={2} p={2}>
        <RHFTextField name="name" label="Name" />
        <RHFTextField name="country" label="Country" />
        <RHFTextField name="year_made" label="Year made" />
        <RHFTextField name="type" label="Type" />
        <RHFTextField name="engine" label="Engine" />
        <RHFTextField name="image_url" label="Image URL" />

        <RHFAutocomplete
          getOptionLabel={(option: Owner | string) =>
            typeof option === 'string' ? option : `${option.name} ${option.surname}`
          }
          name="owner"
          placeholder="Owner"
          options={ownersData}
        />

        <RHFAutocomplete
          getOptionLabel={(option: Brand | string) =>
            typeof option === 'string' ? option : `${option.name}`
          }
          name="brand"
          placeholder="Brand"
          options={brandsData}
          value={defaultValues.brand.name}
        />

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </FormProvider>
  );
};
