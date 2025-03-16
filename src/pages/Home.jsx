import { Box, Typography } from "@mui/material";
import homebackground from "./../img/homeback.jpg"

const Home = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      {/* Home Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
          justifyContent: "center",
          paddingLeft: "20%",
          color: "white",
          height: "100vh",
          // backgroundImage: `url(${homebackground})`,
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.2)), url(${homebackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
          <Typography variant="h3" sx={{ fontWeight: "bold"}}>
            Hey there, I'm Amiin.
          </Typography>
          <Typography variant="h5" sx={{ color: "black" , mt: 1 }}>
            Engineer | Designer | Problem-solver
          </Typography>

      </Box>

    </Box>
  );
};

export default Home;
