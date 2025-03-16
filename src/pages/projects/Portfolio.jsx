import { Button, Typography, Container, Grid, Box } from "@mui/material";
import portfolioimg from "../../img/portfolio.png";

const Portfolio = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 10 }}>
      {/* Title */}
      <Typography variant="h3" fontWeight="bold" textAlign="center">
        Web Portfolio
      </Typography>

      {/* Introduction */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 3 }}>
        {/* Left: Project Overview */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" textAlign="left" sx={{ mb: 2 }}>
            About My Portfolio
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left" }}>
            This personal website showcases my projects, experiences, and skills as a software engineer. 
            Built using React and Material UI, it serves as a dynamic and interactive platform to highlight 
            my work in software development, UI/UX design, and AI research.
          </Typography>
        </Grid>

        {/* Right: Image */}
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <img src={portfolioimg} alt="Portfolio Project" width="250px" />
        </Grid>
      </Grid>

      {/* Skills & Technologies */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="left" sx={{ mb: 2 }}>
          Skills & Technologies
        </Typography>
        <Box component="ul" sx={{ textAlign: "left", pl: 3 }}>
          <li>Frontend Development (React, Material UI, JavaScript, CSS)</li>
          <li>Backend & APIs (Node.js, Firebase, REST APIs)</li>
          <li>UI/UX Design (Wireframing, Prototyping, Responsive Design)</li>
          <li>Hosting & Deployment (Vercel, GitHub Pages, CI/CD)</li>
        </Box>
      </Box>

      {/* More Info Button */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button 
          variant="contained" 
          size="large" 
          sx={{ bgcolor: "black", color: "white", "&:hover": { bgcolor: "gray" } }} 
          href="https://github.com/AmiinMuse/personal-website" 
          target="_blank"
        >
          Learn More
        </Button>
      </Box>
    </Container>
  );
};

export default Portfolio;
