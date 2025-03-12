import { Button, Typography, Container } from "@mui/material";
import battaleshipimg from "../../img/battleship.jpg"

const Battleship = () => {
    return (
      <Container maxWidth="lg" sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold">Battleship Game</Typography>
        <img src={battaleshipimg} alt="Battleship Game" width="250px" style={{ margin: "20px auto" }} />
        
        <Typography variant="h4" fontWeight="bold" sx={{ mt: 5 }}>Project Overview</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          A custom-built Battleship game in C++ with an interactive GUI using GE211. 
          This project explores game development principles, algorithm design, and UI/UX for desktop applications.
        </Typography>
  
        <Typography variant="h4" fontWeight="bold" sx={{ mt: 5 }}>Skills & Technologies</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          - **Game Development** (C++, GE211, Object-Oriented Programming)<br/>
          - **GUI Design** (Custom graphics, event handling, user input processing)<br/>
          - **Algorithms & Data Structures** (Minimax, Board State Optimization)<br/>
          - **Debugging & Optimization** (Memory management, performance tuning)
        </Typography>
  
        <Button 
          variant="contained" 
          size="small" 
          sx={{ bgcolor: "black", color: "white", "&:hover": { bgcolor: "gray" }, mt: 4 }}
          href="https://github.com/AmiinMuse/Battleship-Game" 
          target="_blank"
        >
          More Info
        </Button>
      </Container>
    );
  };
  
  export default Battleship;