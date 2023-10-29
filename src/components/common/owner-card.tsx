import React from "react"
import { FormInput, FormInputOwnerEnum } from "../../types"
import { UseFormRegister } from "react-hook-form"
import { Box, Stack, TextField, Button } from "@mui/material"

type Props = {
  formProgress: number
  setFormProgress: React.Dispatch<React.SetStateAction<number>>
  register: UseFormRegister<FormInput>
}

export const OwnerCard = ({ formProgress, setFormProgress, register }: Props) => {
  const handleSubmit = (type: number) => (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormProgress(2)
    console.log("setting form progress to: ", type)
  }

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(2)}
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: "50%",
        left: "50%",
      }}
      style={{
        transition: "all 0.3s",
        opacity: formProgress === 1 ? 1 : 0.5,
        transform: formProgress === 1 ? "translateX(100%)" : "translateX(-100%)",
      }}>
      <Stack direction='column' gap={3}>
        <TextField
          required
          id={`${FormInputOwnerEnum.owner_name}`}
          label='Owner name'
          variant='outlined'
          fullWidth
          {...register(`${FormInputOwnerEnum.owner_name}`, {
            required: true,
            maxLength: 15,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <TextField
          required
          id={`${FormInputOwnerEnum.surname}`}
          label='Owner surname'
          variant='outlined'
          fullWidth
          {...register(`${FormInputOwnerEnum.surname}`, {
            required: true,
            maxLength: 15,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <TextField
          required
          id={`${FormInputOwnerEnum.city}`}
          label='Owner city'
          variant='outlined'
          fullWidth
          {...register(`${FormInputOwnerEnum.city}`, {
            required: true,
            maxLength: 15,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <TextField
          required
          id={`${FormInputOwnerEnum.age}`}
          label='Owner age'
          type='number'
          variant='outlined'
          fullWidth
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*", min: 1, max: 99 }}
          {...register(`${FormInputOwnerEnum.age}`)}
        />

        <TextField
          required
          id={`${FormInputOwnerEnum.gender}`}
          label='Owner gender'
          variant='outlined'
          fullWidth
          {...register(`${FormInputOwnerEnum.gender}`, {
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
          Next step
        </Button>
      </Stack>
    </Box>
  )
}
