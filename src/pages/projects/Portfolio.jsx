import { Button, Typography, Container } from "@mui/material";


const Portfolio = () => {
    return (
      <Container maxWidth="lg" sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold">Web Portfolio</Typography>
        {/* <img src="../../img/portfolio.png" alt="Portfolio Project" width="250px" style={{ margin: "20px auto" }} /> */}
        
        <Typography variant="h4" fontWeight="bold" sx={{ mt: 5 }}>Project Overview</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          This personal portfolio website showcases my experiences, projects, and skills as a software engineer. 
          Built with React, it highlights my work in software development, UI/UX design, and AI research.
        </Typography>
  
        <Typography variant="h4" fontWeight="bold" sx={{ mt: 5 }}>Skills & Technologies</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          - **Frontend Development** (React, Material UI, JavaScript, CSS)<br/>
          - **Backend & APIs** (Node.js, Firebase, REST APIs)<br/>
          - **UI/UX Design** (Wireframing, Prototyping, Responsive Design)<br/>
          - **Hosting & Deployment** (Vercel, GitHub Pages, CI/CD)
        </Typography>
  
        <Button 
          variant="contained" 
          size="small" 
          sx={{ bgcolor: "black", color: "white", "&:hover": { bgcolor: "gray" }, mt: 4 }}
          href="https://github.com/AmiinMuse/personal-website" 
          target="_blank"
        >
          More Info
        </Button>
      </Container>
    );
  };
  
  export default Portfolio;