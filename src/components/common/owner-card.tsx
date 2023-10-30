import React from "react"
import { FormInput, FormInputAddCardOwner } from "../../types"
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
    setFormProgress(type)
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
          id={`${FormInputAddCardOwner.owner_name}`}
          label='Owner name'
          variant='outlined'
          fullWidth
          {...register(`${FormInputAddCardOwner.owner_name}`, {
            required: true,
            maxLength: 15,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <TextField
          required
          id={`${FormInputAddCardOwner.surname}`}
          label='Owner surname'
          variant='outlined'
          fullWidth
          {...register(`${FormInputAddCardOwner.surname}`, {
            required: true,
            maxLength: 15,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <TextField
          required
          id={`${FormInputAddCardOwner.city}`}
          label='Owner city'
          variant='outlined'
          fullWidth
          {...register(`${FormInputAddCardOwner.city}`, {
            required: true,
            maxLength: 15,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <TextField
          required
          id={`${FormInputAddCardOwner.age}`}
          label='Owner age'
          type='number'
          variant='outlined'
          fullWidth
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*", min: 1, max: 99 }}
          {...register(`${FormInputAddCardOwner.age}`)}
        />

        <TextField
          required
          id={`${FormInputAddCardOwner.gender}`}
          label='Owner gender'
          variant='outlined'
          fullWidth
          {...register(`${FormInputAddCardOwner.gender}`, {
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
