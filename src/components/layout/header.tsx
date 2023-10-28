import { Stack, Typography } from "@mui/material";

export const Header = () => (
  <Stack
    sx={{
      bgcolor: "background.default",
      p: 2,
      border: "2px solid #000",
      borderRadius: 2,
      textAlign: "center",
      mb: 2,
    }}
  >
    <Typography variant="h5" fontWeight="bold" color="text.primary">
      Cars administration
    </Typography>
  </Stack>
);
