import { Box, Typography } from "@mui/material";

export default function Home() {
  return (

      <Box
        sx={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Welcome to My Frontend Project
        </Typography>

        <Typography variant="body1">
          Select a page using the navigation bar above.
        </Typography>
      </Box>
  );
}
