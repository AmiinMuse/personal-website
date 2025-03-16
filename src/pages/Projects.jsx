import { Box, Typography, Grid } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import Neuronet from "../img/neuronet.jpg";
import Fareshare from "../img/fareshare.jpg";
import Battleship from "../img/battleship.jpg";
import Portfolio from "../img/portfolio.png";
import SalesforceLogo from "../img/salesforce.png";
import FermilabLogo from "../img/fermilab.jpg";
import NorthwesternLogo from "../img/northwestern.png";

const projects = [
  {
    title: "NeuroNet",
    description: "Deep learning model detecting Alzheimer’s early with 94% accuracy.",
    github: "https://www.linkedin.com/feed/update/urn:li:activity:7061834294410821632/",
    image: Neuronet,
    route: "/projects/neuronet",
  },
  {
    title: "FareShare",
    description: "Web app for Northwestern students to share rides to/from airports.",
    github: "https://github.com/AmiinMuse/FareShareNU",
    image: Fareshare,
    route: "/projects/fareshare",
  },
  {
    title: "Web Portfolio",
    description: "Personal website showcasing projects and experience.",
    github: "https://github.com/AmiinMuse/personal-website",
    image: Portfolio,
    route: "/projects/portfolio",
  },
  {
    title: "Battleship Game",
    description: "A C++ battleship game with a custom GUI built on GE211.",
    github: "https://github.com/AmiinMuse/Battleship-Game",
    image: Battleship,
    route: "/projects/battleship",
  },
];



const experiences = [
  {
    company: "Salesforce",
    role: "Software Engineer Intern",
    description: "Optimized LLM for Einstein Bots, improving accuracy to 99%.",
    github: "https://www.salesforce.com/",
    logo: SalesforceLogo,
    route: "/experiences/salesforce",
  },
  {
    company: "Fermilab",
    role: "Machine Learning Intern",
    description: "Developed NLP models for search optimization with 90% accuracy.",
    github: "https://www.fnal.gov/",
    logo: FermilabLogo,
    route: "/experiences/fermilab",

  },
  {
    company: "Northwestern IT",
    role: "Student Technician",
    description: "Resolved software and hardware issues for 100+ students and faculty.",
    github: "https://services.northwestern.edu/TDClient/30/Portal/Requests/ServiceDet?ID=106",
    logo: NorthwesternLogo,
    route: "/experiences/northwestern-it",

  },
];

const Projects = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 15, px: 3 }}>
      {/* Main Page Title */}
      <Typography variant="h2" sx={{ fontWeight: "bold", mb: 6 }}>
        Experiences & Projects
      </Typography>

      {/* Experiences Section */}
      <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", mt: 4, mb: 2 }}>
        Experiences
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {experiences.map((exp, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard {...exp} />
          </Grid>
        ))}
      </Grid>

      {/* Projects Section */}
      <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", mt: 8, mb: 2 }}>
        Projects
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
