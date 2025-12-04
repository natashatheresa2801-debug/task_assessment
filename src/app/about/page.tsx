
import { Box, Typography } from "@mui/material";

export default function AboutPage() {
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
          About My Project
        </Typography>

        <Typography variant="body1">
          A basic task management application built with Next.js and Material-UI.
        </Typography>
      </Box>
  );
}
