import { Box, Typography } from "@mui/material";
import About from './About';

const Home = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      {/* Home Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh", 
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Hey there, I'm Amiin.
        </Typography>
        <Typography variant="h5" sx={{ color: "gray", mt: 1 }}>
          Engineer | Designer | Innovator
        </Typography>

      </Box>

    </Box>
  );
};

export default Home;
