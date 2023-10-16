import { Stack, Typography } from "@mui/material";

export const Header = () => (
  <Stack
    sx={{
      bgcolor: "background.default",
      p: 2,
      border: "2px solid black",
      borderRadius: 2,
      textAlign: "center",
    }}
  >
    <Typography variant="h5" fontWeight="bold">
      Cars administration
    </Typography>
  </Stack>
);
