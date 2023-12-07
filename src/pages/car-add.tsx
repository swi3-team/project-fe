import { Button, Card, CardHeader, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { CarAddForm } from '../components/car-add/car-add-form';

export const CarAdd = () => {
  const navigate = useNavigate();

  const handleGoBackButtonClick = () => navigate('/');

  return (
    <Card>
      <CardHeader
        titleTypographyProps={{ fontWeight: 'bold' }}
        title="Add new car"
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
      <CardContent>
        <CarAddForm />
      </CardContent>
    </Card>
  );
};
