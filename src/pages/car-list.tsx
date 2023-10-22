import { Button, Stack } from "@mui/material";
import { CARS_MOCK } from "../_mock/car";
import { CarListCard } from "../components/car-list/car-list-card";
import AddIcon from "@mui/icons-material/Add";
import { generatePath, useNavigate } from "react-router-dom";

export const CarList = () => {
  const data = CARS_MOCK; // TODO: demock

  const navigate = useNavigate();

  const handleAddCarButtonClick = () => navigate(generatePath("/add"));

  return (
    <Stack gap={2}>
      <Stack>
        {/* TODO: implement filters */}

        <Button
          sx={{ ml: "auto" }}
          variant="contained"
          onClick={handleAddCarButtonClick}
          startIcon={<AddIcon />}
        >
          Add car
        </Button>
      </Stack>

      <Stack gap={2}>
        {data.map((car) => (
          <CarListCard car={car} key={car.id} />
        ))}
      </Stack>
    </Stack>
  );
};
