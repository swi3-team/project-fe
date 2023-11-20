import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import FormProvider from "../common/form-provider"
import { Stack, Button } from "@mui/material"
import { BRAND_MOCK } from "../../_mock/brand"
import RHFTextField from "../common/rhf-text-field"
import RHFAutocomplete from "../common/rhf-autocomplete"
import { Brand, Car, Owner } from "../../types"
import { OWNERS_MOCK } from "../../_mock/owner"

type FormValuesProps = Omit<Car, "id">

export const CarAddForm = () => {
  const CarAddSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    year_made: Yup.number().required("Required"),
    type: Yup.string().required("Required"),
    engine: Yup.string().required("Required"),
    image_url: Yup.string().required("Required"),
    owner: Yup.object().shape({
      id: Yup.number().required("Required"),
      name: Yup.string().required("Required"),
      surname: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      age: Yup.number().required("Required"),
      gender: Yup.string().required("Required"),
    }),
    brand: Yup.object().shape({
      id: Yup.number().required("Required"),
      name: Yup.string().required("Required"),
      country: Yup.string().required("Required"),
    }),
  })

  const methods = useForm({
    resolver: yupResolver(CarAddSchema),
    defaultValues: {
      name: "",
      country: "",
      year_made: 0,
      type: "",
      engine: "",
      image_url: "",
      owner: {
        id: 1,
        name: "",
        surname: "",
        city: "",
        age: 0,
        gender: "",
      },
      brand: {
        id: 1,
        name: "",
        country: "",
      },
    },
  })

  const { handleSubmit } = methods

  // missing connection on API
  const onSubmit = (values: FormValuesProps) => {
    console.log("values: ", values)
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit as any)}>
      <Stack spacing={2} gap={1}>
        <RHFTextField name='name' label='Name' />
        <RHFTextField name='country' label='Country' />
        <RHFTextField name='year_made' label='Year made' />
        <RHFTextField name='type' label='Type' />
        <RHFTextField name='engine' label='Engine' />
        <RHFTextField name='image_url' label='Image URL' />

        <RHFAutocomplete
          getOptionLabel={(option: Owner | string) =>
            typeof option === "string" ? option : `${option.name} ${option.surname}`
          }
          isOptionEqualToValue={(option, value) => option.id === value.id}
          name='owner'
          placeholder='Owner'
          options={OWNERS_MOCK}
        />

        <RHFAutocomplete
          getOptionLabel={(option: Brand | string) =>
            typeof option === "string" ? option : `${option.name}`
          }
          isOptionEqualToValue={(option, value) => option.id === value.id}
          name='brand'
          placeholder='Brand'
          options={BRAND_MOCK}
        />

        <Button
          variant='contained'
          size='small'
          type='submit'
          sx={{
            mt: 1,
            backgroundColor: "#303030",
            color: "white",
            "&:hover": {
              backgroundColor: "#808080",
              color: "white",
            },
          }}>
          Add car
        </Button>
      </Stack>
    </FormProvider>
  )
}
