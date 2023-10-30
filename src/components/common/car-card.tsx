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
import { CarBodyType, FormInput, FormInputAddCardCar } from "../../types"
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

  const commonButtonStyle = {
    width: "100%",
    mt: 1,
    backgroundColor: "#303030",
    color: "white",
    "&:hover": {
      backgroundColor: "#808080",
      color: "white",
    },
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
          id={`${FormInputAddCardCar.name}`}
          label='Car name'
          variant='outlined'
          fullWidth
          {...register(`${FormInputAddCardCar.name}`, {
            required: true,
            maxLength: 15,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <TextField
          required
          id={`${FormInputAddCardCar.country}`}
          label='Car country'
          variant='outlined'
          fullWidth
          {...register(`${FormInputAddCardCar.country}`, {
            required: true,
            maxLength: 15,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <TextField
          required
          id={`${FormInputAddCardCar.year_made}`}
          type='number'
          label='Year made'
          variant='outlined'
          fullWidth
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*", min: 1980, max: 2023 }}
          {...register(`${FormInputAddCardCar.year_made}`)}
        />
        <FormControl variant='outlined' fullWidth required>
          <InputLabel id='car-type-label'>Car type</InputLabel>
          <Select
            labelId='car-type-label'
            label='Car type'
            id={`${FormInputAddCardCar.type}`}
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
          id={`${FormInputAddCardCar.engine}`}
          label='Car engine'
          variant='outlined'
          fullWidth
          {...register(`${FormInputAddCardCar.engine}`, {
            required: true,
            maxLength: 15,
            pattern: /^[A-Za-z]+$/i,
          })}
        />

        <TextField
          required
          id={`${FormInputAddCardCar.image_url}`}
          label='Car image url'
          variant='outlined'
          fullWidth
          {...register(`${FormInputAddCardCar.image_url}`, {
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
            sx={commonButtonStyle}>
            Prev step
          </Button>
          <Button variant='contained' size='small' type='submit' sx={commonButtonStyle}>
            Add car
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
