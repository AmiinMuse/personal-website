import { Button, Typography, Container } from "@mui/material";
import fareshareimg from "../../img/fareshare.jpg"


const FareShare = () => {
    return (
      <Container maxWidth="lg" sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold">FareShare</Typography>
        <img src={fareshareimg} alt="FareShare Project" width="250px" style={{ margin: "20px auto" }} />
        
        <Typography variant="h4" fontWeight="bold" sx={{ mt: 5 }}>Project Overview</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          FareShare is a web application that allows Northwestern students to share rides to and from the airport. 
          It helps reduce travel costs and improve convenience for students commuting during breaks.
        </Typography>
  
        <Typography variant="h4" fontWeight="bold" sx={{ mt: 5 }}>Skills & Technologies</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          - **Full-Stack Development** (React, Node.js, Express, MongoDB)<br/>
          - **User Authentication** (Firebase, OAuth)<br/>
          - **API Integration** (Google Maps API, Ride-sharing platforms)<br/>
          - **Responsive Web Design** (Material UI, Tailwind CSS)
        </Typography>
  
        <Button 
          variant="contained" 
          size="small" 
          sx={{ bgcolor: "black", color: "white", "&:hover": { bgcolor: "gray" }, mt: 4 }}
          href="https://github.com/AmiinMuse/FareShareNU" 
          target="_blank"
        >
          More Info
        </Button>
      </Container>
    );
  };
  
  export default FareShare;
  