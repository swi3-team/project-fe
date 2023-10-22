import { Button, Card, CardHeader } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export const CarAdd = () => {
  const navigate = useNavigate();

  const handleGoBackButtonClick = () => navigate("/");

  return (
    <Card>
      <CardHeader
        titleTypographyProps={{ fontWeight: "bold" }}
        title="Add new card"
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
    </Card>
  );
};
