/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import FormProvider from '../common/form-provider';
import { Stack, Button } from '@mui/material';
import RHFTextField from '../common/rhf-text-field';
import RHFAutocomplete from '../common/rhf-autocomplete';
import { Car } from '../../types';
import { useCreateCar } from '../../services/cars/use-create-car';
import { useGetBrands } from '../../services/brand/use-get-brands';
import { useGetOwners } from '../../services/owner/use-get-owners';
import { useNavigate } from 'react-router-dom';

type FormValuesProps = Omit<Car, 'id'>;

export const CarAddForm = () => {
  const navigate = useNavigate();

  const { createCar } = useCreateCar();

  const { data: brandsData, isLoading: brandsIsLoading } = useGetBrands();
  const { data: ownersData, isLoading: ownersIsLoading } = useGetOwners();

  const CarAddSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    year_made: Yup.number().required('Required'),
    type: Yup.string().required('Required'),
    engine: Yup.string().required('Required'),
    image_url: Yup.string().required('Required'),
    owner: Yup.string().required('Required'),
    brand: Yup.string().required('Required'),
  });

  const methods = useForm({
    resolver: yupResolver(CarAddSchema),
    defaultValues: {
      name: '',
      country: '',
      year_made: 0,
      type: '',
      engine: '',
      image_url: '',
      owner: '',
      brand: '',
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (values: FormValuesProps) => {
    await createCar({ ...values, brand_id: values.brand!, owner_id: values.owner! });

    navigate('/');
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit as any)}>
      <Stack spacing={2} gap={1}>
        <RHFTextField name="name" label="Name" />
        <RHFTextField name="country" label="Country" />
        <RHFTextField name="year_made" label="Year made" />
        <RHFTextField name="type" label="Type" />
        <RHFTextField name="engine" label="Engine" />
        <RHFTextField name="image_url" label="Image URL" />

        {!ownersIsLoading && (
          <RHFAutocomplete
            getOptionLabel={(option: string) =>
              ownersData
                .filter(({ id }) => String(id) === option)
                .map(({ name, surname }) => `${name} ${surname}`)[0] ?? ''
            }
            // isOptionEqualToValue={(option, value) => option.id === value.id}
            name="owner"
            placeholder="Owner"
            options={ownersData.map(({ id }) => String(id))}
          />
        )}

        {!brandsIsLoading && (
          <RHFAutocomplete
            getOptionLabel={(option: string) =>
              brandsData.find(({ id }) => String(id) === option)?.name || ''
            }
            // isOptionEqualToValue={(option, value) => option.id === value.id}
            name="brand"
            placeholder="Brand"
            options={brandsData.map(({ id }) => String(id))}
          />
        )}

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </FormProvider>
  );
};
