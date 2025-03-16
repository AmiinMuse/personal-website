import { Button, Typography, Container, Grid, Box } from "@mui/material";
import battleshipimg from "../../img/battleship.jpg";

const Battleship = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 10 }}>
      {/* Title */}
      <Typography variant="h3" fontWeight="bold" textAlign="center">
        Battleship Game
      </Typography>

      {/* Introduction */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 3 }}>
        {/* Left: Project Overview */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" textAlign="left" sx={{ mb: 2 }}>
            About Battleship Game
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left" }}>
            A C++ implementation of the classic Battleship game with an interactive GUI using GE211.
            This project explores game development, algorithm design, and UI/UX for desktop applications.
          </Typography>
        </Grid>

        {/* Right: Image */}
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <img src={battleshipimg} alt="Battleship Game" width="250px" />
        </Grid>
      </Grid>

      {/* Skills & Technologies */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="left" sx={{ mb: 2 }}>
          Skills & Technologies
        </Typography>
        <Box component="ul" sx={{ textAlign: "left", pl: 3 }}>
          <li>Game Development (C++, GE211, OOP)</li>
          <li>GUI Design (Custom graphics, user interactions)</li>
          <li>Algorithms & Data Structures (Minimax, Board Optimization)</li>
          <li>Performance Optimization (Memory management, debugging)</li>
        </Box>
      </Box>

      {/* More Info Button */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button 
          variant="contained" 
          size="large" 
          sx={{ bgcolor: "black", color: "white", "&:hover": { bgcolor: "gray" } }} 
          href="https://github.com/AmiinMuse/Battleship-Game" 
          target="_blank"
        >
          Learn More
        </Button>
      </Box>
    </Container>
  );
};

export default Battleship;
