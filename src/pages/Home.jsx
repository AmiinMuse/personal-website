import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Full viewport height
        textAlign: "center",
      }}
      >
        
      <Typography variant="h3">Hey there, I'm Amiin.</Typography>
      <Typography variant="h5">A senior at Northwestern University</Typography>
    </Box>
  );
};

export default Home;
