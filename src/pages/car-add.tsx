import { useEffect, useState } from "react"
import { Button, Card, CardHeader, CardContent, Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import { OwnerCard } from "../components/common/owner-card"
import { CarCard } from "../components/common/car-card"
import { BrandCard } from "../components/common/brand-card"
import { useForm } from "react-hook-form"
import { FormInput } from "../types"

export const CarAdd = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, setValue, watch } = useForm<FormInput>()

  const [formProgress, setFormProgress] = useState(1)
  const [formName, setFormName] = useState("Owner info")

  useEffect(() => {
    switch (formProgress) {
      case 1:
        setFormName("Owner info")
        break
      case 2:
        setFormName("Brand info")
        break
      case 3:
        setFormName("Car info")
        break
      default:
        setFormName("Owner info")
        break
    }
  }, [formProgress])

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
        <Typography>{formName}</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}>
          <OwnerCard
            formProgress={formProgress}
            setFormProgress={setFormProgress}
            register={register}
          />
          <BrandCard
            formProgress={formProgress}
            setFormProgress={setFormProgress}
            register={register}
          />
          <CarCard
            formProgress={formProgress}
            setFormProgress={setFormProgress}
            register={register}
            handleSubmit={handleSubmit}
            setValue={setValue}
            watch={watch}
          />
        </Box>
      </CardContent>
    </Card>
  )
}
