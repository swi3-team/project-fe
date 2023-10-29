import React from "react"
import { FormInput, FormInputBrandEnum } from "../../types"
import { UseFormRegister } from "react-hook-form"
import { Stack, TextField, Box, Button } from "@mui/material"

// interface FormInput {
//   brand_name: string
//   brand_country: string
// }

type Props = {
  formProgress: number
  setFormProgress: React.Dispatch<React.SetStateAction<number>>
  register: UseFormRegister<FormInput>
}

export const BrandCard = ({ formProgress, setFormProgress, register }: Props) => {
  // const { register } = useForm<FormInput>()

  const handleSubmit = (type: number) => (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormProgress(3)
    console.log("setting form progress to: ", type)
  }

  const buttonPrevState = () => {
    setFormProgress(1)
  }

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(3)}
      sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
      style={{
        transition: "all 0.3s",
        opacity: formProgress === 2 ? 1 : 0.5,
        transform:
          formProgress === 1
            ? "translateX(200%)"
            : formProgress === 2
            ? "translateX(0%)"
            : "translateX(-200%)",
      }}>
      <Stack direction='column' gap={3}>
        <TextField
          required
          id={`${FormInputBrandEnum.brand_name}`}
          label='Brand name'
          variant='outlined'
          fullWidth
          {...register(`${FormInputBrandEnum.brand_name}`, {
            required: true,
            maxLength: 15,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <TextField
          required
          id={`${FormInputBrandEnum.brand_country}`}
          label='Brand country'
          variant='outlined'
          fullWidth
          {...register(`${FormInputBrandEnum.brand_country}`, {
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
            Next step
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}
