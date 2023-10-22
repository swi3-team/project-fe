import { Stack } from "@mui/material";
import { CARS_MOCK } from "../_mock/car";
import { CarListCard } from "../components/car-list/car-list-card";

export const CarList = () => {
  const data = CARS_MOCK; // TODO: demock

  return (
    <Stack gap={2}>
      {data.map((car) => (
        <CarListCard car={car} />
      ))}
    </Stack>
  );
};
