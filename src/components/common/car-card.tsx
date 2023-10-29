import React from "react"
import {
  Box,
  Stack,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  TextField,
} from "@mui/material"
import { CarBodyType, FormInput, FormInputCarEnum } from "../../types"
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form"
import { useState } from "react"

type Props = {
  formProgress: number
  setFormProgress: React.Dispatch<React.SetStateAction<number>>
  register: UseFormRegister<FormInput>
  handleSubmit: UseFormHandleSubmit<FormInput, undefined>
  setValue: UseFormSetValue<FormInput>
  watch: UseFormWatch<FormInput>
}
export const CarCard = ({
  formProgress,
  setFormProgress,
  register,
  handleSubmit,
  setValue,
  watch,
}: Props) => {
  const [type, setType] = useState<CarBodyType>("")
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data)
  const handleChange = (e: SelectChangeEvent) => {
    const value = e.target.value as CarBodyType
    setType(value)
    setValue("type", value)
  }
  watch(["type"])
  const buttonPrevState = () => {
    setFormProgress(2)
  }
  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
      style={{
        transition: "all 0.3s",
        opacity: formProgress === 3 ? 1 : 0.5,
        transform: formProgress < 3 ? "translateX(100%)" : "translateX(-100%)",
      }}>
      <Stack direction='column' gap={3}>
        <TextField
          required
          id={`${FormInputCarEnum.name}`}
          label='Car name'
          variant='outlined'
          fullWidth
          {...register(`${FormInputCarEnum.name}`, {
            required: true,
            maxLength: 15,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <TextField
          required
          id={`${FormInputCarEnum.country}`}
          label='Car country'
          variant='outlined'
          fullWidth
          {...register(`${FormInputCarEnum.country}`, {
            required: true,
            maxLength: 15,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {/* <TextField
          required
          id={`${FormInputCarEnum.brand}`}
          label='Car brand'
          variant='outlined'
          fullWidth
          {...register(`${FormInputCarEnum.brand}`, {
            required: true,
            maxLength: 15,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <TextField
          required
          id={`${FormInputCarEnum.owner}`}
          label='Car owner'
          variant='outlined'
          fullWidth
          {...register(`${FormInputCarEnum.owner}`, {
            required: true,
            maxLength: 15,
            pattern: /^[A-Za-z]+$/i,
          })}
        /> */}
        <TextField
          required
          id={`${FormInputCarEnum.year_made}`}
          type='number'
          label='Year made'
          variant='outlined'
          fullWidth
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*", min: 1980, max: 2023 }}
          {...register(`${FormInputCarEnum.year_made}`)}
        />
        <FormControl variant='outlined' fullWidth required>
          <InputLabel id='car-type-label'>Car type</InputLabel>
          <Select
            labelId='car-type-label'
            label='Car type'
            id={`${FormInputCarEnum.type}`}
            value={type}
            onChange={handleChange}>
            <MenuItem value='Combi'>Combi</MenuItem>
            <MenuItem value='Sedan'>Sedan</MenuItem>
            <MenuItem value='SUV'>SUV</MenuItem>
            <MenuItem value='Liftback'>Liftback</MenuItem>
          </Select>
        </FormControl>

        <TextField
          required
          id={`${FormInputCarEnum.engine}`}
          label='Car engine'
          variant='outlined'
          fullWidth
          {...register(`${FormInputCarEnum.engine}`, {
            required: true,
            maxLength: 15,
            pattern: /^[A-Za-z]+$/i,
          })}
        />

        <TextField
          required
          id={`${FormInputCarEnum.image_url}`}
          label='Car image url'
          variant='outlined'
          fullWidth
          {...register(`${FormInputCarEnum.image_url}`, {
            required: true,
            maxLength: 15,
            pattern: /^[A-Za-z]+$/i,
          })}
        />

        <Stack
          direction='row'
          sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
          gap={1}>
          <Button
            variant='contained'
            size='small'
            type='button'
            onClick={() => buttonPrevState()}
            sx={{
              width: "100%",
              mt: 1,
              backgroundColor: "#303030",
              color: "white",
              "&:hover": {
                backgroundColor: "#808080",
                color: "white",
              },
            }}>
            Prev step
          </Button>
          <Button
            variant='contained'
            size='small'
            type='submit'
            sx={{
              width: "100%",
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
      </Stack>
    </Box>
  )
}
