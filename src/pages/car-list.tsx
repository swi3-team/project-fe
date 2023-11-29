import { Button, Stack } from "@mui/material"
import { CarListCard } from "../components/car-list/car-list-card"
import AddIcon from "@mui/icons-material/Add"
import { generatePath, useNavigate } from "react-router-dom"
import useGetCars from "../services/cars/use-get-cars"

export const CarList = () => {
  // const data = CARS_MOCK; // TODO: demock
  const { data, isLoading } = useGetCars()

  const navigate = useNavigate()

  const handleAddCarButtonClick = () => navigate(generatePath("/add"))

  console.log("cars", data)

  return isLoading ? (
    <div>loading ... </div>
  ) : (
    <Stack gap={2}>
      <Stack>
        {/* TODO: implement filters */}

        <Button
          sx={{ ml: "auto" }}
          variant='contained'
          onClick={handleAddCarButtonClick}
          startIcon={<AddIcon />}>
          Add car
        </Button>
      </Stack>

      <Stack gap={2}>
        {data.map((car) => (
          <CarListCard car={car} key={car.id} />
        ))}
      </Stack>
    </Stack>
  )
}
