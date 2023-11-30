import { Button, Card, CardHeader } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { CARS_MOCK } from '../_mock/car';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { CarDetailCard } from '../components/car-update/car-detail-card';
import { Car } from '../types';

export const CardUpdate = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  // TODO: add API call
  const data = CARS_MOCK.find((card) => card.id === Number(id));

  const { name } = data ?? {};

  const handleGoBackButtonClick = () => navigate('/');

  return (
    <Card>
      <CardHeader
        titleTypographyProps={{ fontWeight: 'bold' }}
        title={name}
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
      <CarDetailCard defaultValues={data as Car} />
    </Card>
  );
};
