import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { Car } from '../../types';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import PropaneTankIcon from '@mui/icons-material/PropaneTank';
import PersonIcon from '@mui/icons-material/Person';
import TodayIcon from '@mui/icons-material/Today';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { useNavigate, generatePath } from 'react-router-dom';

interface Props {
  car: Car;
  handleDeleteCar: (id: string) => void;
}

export const CarListCard = ({ car, handleDeleteCar }: Props) => {
  const { id, name, image_url, brand, owner, type, engine, year_made } = car;

  const navigate = useNavigate();

  const handleDetailClick = () => navigate(generatePath('/update/:id', { id: String(id) }));

  const handleDeleteClick = () => handleDeleteCar(String(id));

  const getImageUrl = (imageUrl: string) => {
    try {
      let content = decodeURI(imageUrl);
      content = content.toString().replace(/~~pct~~/g, '%');

      return content;
    } catch (e) {
      console.warn('error', e);
    }
  };

  return (
    <Card>
      <CardMedia component="img" height="130" image={getImageUrl(image_url)} alt="Paella dish" />

      <CardContent>
        <Typography gutterBottom variant="h4" component="div" fontWeight="bold">
          {name}
        </Typography>

        <Divider />

        <List component={Stack} direction="row" sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <QuestionMarkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Brand" secondary={brand.name} />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="owner" secondary={`${owner.name} ${owner.surname}`} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <TodayIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Year made" secondary={year_made} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CarCrashIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Type" secondary={type} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PropaneTankIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Engine" secondary={engine} />
          </ListItem>
        </List>
      </CardContent>

      <CardActions>
        <Stack direction="row" gap={1} sx={{ ml: 'auto' }}>
          <Button
            aria-label="update"
            variant="outlined"
            onClick={handleDetailClick}
            startIcon={<EditIcon />}
          >
            Update
          </Button>
          <Button
            aria-label="delete"
            onClick={handleDeleteClick}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};
