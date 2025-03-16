import { Button, Typography, Container, Grid, Box } from "@mui/material";
import fareshareimg from "../../img/fareshare.jpg";

const FareShare = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 10 }}>
      {/* Title */}
      <Typography variant="h3" fontWeight="bold" textAlign="center">
        FareShare
      </Typography>

      {/* Introduction */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 3 }}>
        {/* Left: Project Overview */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" textAlign="left" sx={{ mb: 2 }}>
            About FareShare
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left" }}>
            FareShare is a web app that helps Northwestern students share rides 
            to and from the airport, reducing travel costs and making transportation more efficient.
          </Typography>
        </Grid>

        {/* Right: Image */}
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <img src={fareshareimg} alt="FareShare Project" width="250px" />
        </Grid>
      </Grid>

      {/* Skills & Technologies */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="left" sx={{ mb: 2 }}>
          Skills & Technologies
        </Typography>
        <Box component="ul" sx={{ textAlign: "left", pl: 3 }}>
          <li>Full-Stack Development (React, Node.js, Express, MongoDB)</li>
          <li>User Authentication (Firebase, OAuth)</li>
          <li>API Integration (Google Maps API, Ride-sharing services)</li>
          <li>Responsive Web Design (Material UI, Tailwind CSS)</li>
        </Box>
      </Box>

      {/* More Info Button */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button 
          variant="contained" 
          size="large" 
          sx={{ bgcolor: "black", color: "white", "&:hover": { bgcolor: "gray" } }} 
          href="https://github.com/AmiinMuse/FareShareNU" 
          target="_blank"
        >
          Learn More
        </Button>
      </Box>
    </Container>
  );
};

export default FareShare;
