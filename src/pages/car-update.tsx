import { Box, Button, Card, CardHeader, LinearProgress } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { CarDetailCard } from '../components/car-update/car-detail-card';
import { Car } from '../types';
import { useGetCar } from '../services/cars/use-get-car';
import { useUpdateCar } from '../services/cars/use-update-car';

export const CardUpdate = () => {
  const { id } = useParams();

  console.log('id', id);

  const navigate = useNavigate();

  const { data, isLoading } = useGetCar(id as string);

  const { updateCar } = useUpdateCar();

  const handleGoBackButtonClick = () => navigate('/');

  const handleUpdateCar = async (car: Car) => {
    await updateCar({ ...car, id, brand_id: car.brand.id!, owner_id: car.owner.id! });

    navigate('/');
  };

  return isLoading ? (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <LinearProgress />
    </Box>
  ) : (
    <Card>
      <CardHeader
        titleTypographyProps={{ fontWeight: 'bold' }}
        // title={name}
        action={
          <Button
            size="small"
            variant="outlined"
            onClick={handleGoBackButtonClick}
            startIcon={<KeyboardBackspaceIcon />}
          >
            Go back
          </Button>
        }
      />
      {data && <CarDetailCard defaultValues={data as Car} updateCar={handleUpdateCar} />}
    </Card>
  );
};
