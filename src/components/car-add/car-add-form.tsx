/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import FormProvider from '../common/form-provider';
import { Stack, Button } from '@mui/material';
import RHFTextField from '../common/rhf-text-field';
import RHFAutocomplete from '../common/rhf-autocomplete';
import { Brand, Car, Owner } from '../../types';
import { useCreateCar } from '../../services/cars/use-create-car';
import { useGetBrands } from '../../services/brand/use-get-brands';
import { useGetOwners } from '../../services/owner/use-get-owners';
// import { useState } from "react"

type FormValuesProps = Omit<Car, 'id'>;

export const CarAddForm = () => {
  // const [owners, setOwners] = useState<Owner | null>(null)
  // const [ownersInput, setOwnersInput] = useState<string>("")

  // const [brands, setBrands] = useState<Brand | null>(null)
  // const [brandsInput, setBrandsInput] = useState<string>("")

  const CarAddSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    year_made: Yup.number().required('Required'),
    type: Yup.string().required('Required'),
    engine: Yup.string().required('Required'),
    image_url: Yup.string().required('Required'),
    owner: Yup.object().shape({
      id: Yup.number().required('Required'),
      name: Yup.string().required('Required'),
      surname: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      age: Yup.number().required('Required'),
      gender: Yup.string().required('Required'),
    }),
    brand: Yup.object().shape({
      id: Yup.number().required('Required'),
      name: Yup.string().required('Required'),
      country: Yup.string().required('Required'),
    }),
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
      owner: {
        name: '',
        surname: '',
        city: '',
        age: 0,
        gender: '',
      },
      brand: {
        name: '',
        country: '',
      },
    },
  });

  const { handleSubmit } = methods;

  const { createCar } = useCreateCar();
  const { data: brandsData } = useGetBrands();
  const { data: ownersData } = useGetOwners();

  console.log('brands data: ', brandsData);
  console.log('ownersdata: ', ownersData);

  // missing connection on API
  const onSubmit = (values: FormValuesProps) => {
    console.log('values: ', values);
    createCar(values);
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

        <RHFAutocomplete
          getOptionLabel={(option: Owner | string) =>
            typeof option === 'string' ? option : `${option.name} ${option.surname}`
          }
          isOptionEqualToValue={(option, value) => option.id === value.id}
          name="owner"
          placeholder="Owner"
          options={ownersData}
          // onChange={(_, value) => {
          //   if (typeof value === "object" && value !== null) {
          //     setOwners(value as Owner)
          //   } else {
          //     setOwners(null)
          //   }
          // }}
          // value={owners}
          // inputValue={ownersInput}
          // onInputChange={(_, value) => {
          //   setOwnersInput(value)
          // }}
        />

        <RHFAutocomplete
          getOptionLabel={(option: Brand | string) =>
            typeof option === 'string' ? option : `${option.name}`
          }
          isOptionEqualToValue={(option, value) => option.id === value.id}
          name="brand"
          placeholder="Brand"
          options={brandsData}
          // value={brands}
          // onChange={(_, value) => {
          //   if (typeof value === "object" && value !== null) {
          //     setBrands(value as Brand)
          //   } else {
          //     setBrands(null)
          //   }
          // }}
          // inputValue={brandsInput}
          // onInputChange={(_, value) => {
          //   setBrandsInput(value)
          // }}
        />

        <Button
          variant="contained"
          size="small"
          type="submit"
          sx={{
            mt: 1,
            backgroundColor: '#303030',
            color: 'white',
            '&:hover': {
              backgroundColor: '#808080',
              color: 'white',
            },
          }}
        >
          Add car
        </Button>
      </Stack>
    </FormProvider>
  );
};
