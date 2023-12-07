import { Box, Button, LinearProgress, Stack } from '@mui/material';
import { CarListCard } from '../components/car-list/car-list-card';
import AddIcon from '@mui/icons-material/Add';
import { generatePath, useNavigate } from 'react-router-dom';
import useGetCars from '../services/cars/use-get-cars';
import { useDeleteCar } from '../services/cars/use-delete-car';

export const CarList = () => {
  const { data, isLoading, refetch } = useGetCars();

  const { deleteCar } = useDeleteCar();

  const navigate = useNavigate();

  const handleAddCarButtonClick = () => navigate(generatePath('/add'));

  const handleDeleteClick = async (id: string) => {
    await deleteCar(String(id));

    refetch();
  };

  return isLoading ? (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <LinearProgress />
    </Box>
  ) : (
    <Stack gap={2}>
      <Stack>
        <Button
          sx={{ ml: 'auto' }}
          variant="contained"
          onClick={handleAddCarButtonClick}
          startIcon={<AddIcon />}
        >
          Add car
        </Button>
      </Stack>

      <Stack gap={2}>
        {data.map((car) => (
          <CarListCard car={car} key={car.id} handleDeleteCar={handleDeleteClick} />
        ))}
      </Stack>
    </Stack>
  );
};
