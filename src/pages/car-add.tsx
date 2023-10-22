import { useState } from "react"
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Stack,
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import { SelectChangeEvent } from "@mui/material"

interface FormInput {
  brand: string
  owner: string
  year: number
  type: "SUV" | "Sedan" | "Combi" | "Liftback" | ""
  engine: string
}

type CarBodyType = "Combi" | "Sedan" | "SUV" | "Liftback" | ""

enum FormInputEnum {
  brand = "brand",
  owner = "owner",
  year = "year",
  type = "type",
  engine = "engine",
}

export const CarAdd = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, watch } = useForm<FormInput>()
  const [type, setType] = useState<CarBodyType>("")

  const handleChange = (e: SelectChangeEvent) => {
    const value = e.target.value as CarBodyType
    setType(value)
    setValue("type", value)
  }
  watch(["type"])

  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data)

  const handleGoBackButtonClick = () => navigate("/")

  return (
    <Card>
      <CardHeader
        titleTypographyProps={{ fontWeight: "bold" }}
        title='Add new card'
        action={
          <Button
            size='small'
            variant='outlined'
            onClick={handleGoBackButtonClick}
            startIcon={<KeyboardBackspaceIcon />}>
            Go back
          </Button>
        }
      />
      <CardContent>
        <Box
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Stack direction='column' gap={3}>
            <TextField
              required
              id={`${FormInputEnum.brand}`}
              label='Car brand'
              variant='outlined'
              fullWidth
              {...register(`${FormInputEnum.brand}`, {
                required: true,
                maxLength: 15,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            <TextField
              required
              id={`${FormInputEnum.owner}`}
              label='Car owner'
              variant='outlined'
              fullWidth
              {...register(`${FormInputEnum.owner}`, {
                required: true,
                maxLength: 15,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            <TextField
              required
              id={`${FormInputEnum.year}`}
              type='number'
              label='Year made'
              variant='outlined'
              fullWidth
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*", min: 1980, max: 2023 }}
              {...register(`${FormInputEnum.year}`)}
            />
            <FormControl variant='outlined' fullWidth required>
              <InputLabel id='car-type-label'>Car type</InputLabel>
              <Select
                labelId='car-type-label'
                label='Car type'
                id={`${FormInputEnum.type}`}
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
              id={`${FormInputEnum.engine}`}
              label='Car engine'
              variant='outlined'
              fullWidth
              {...register(`${FormInputEnum.engine}`, {
                required: true,
                maxLength: 15,
                pattern: /^[A-Za-z]+$/i,
              })}
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
        </Box>
      </CardContent>
    </Card>
  )
}
