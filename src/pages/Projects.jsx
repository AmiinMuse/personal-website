import { Box, Typography, Grid } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <Box sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h3">Projects</Typography>
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        <Grid item><ProjectCard title="NeuroNet" /></Grid>
        <Grid item><ProjectCard title="Project 2" /></Grid>
        <Grid item><ProjectCard title="Project 3" /></Grid>
        <Grid item><ProjectCard title="Project 4" /></Grid>
        <Grid item><ProjectCard title="Project 5" /></Grid>
        <Grid item><ProjectCard title="Project 6" /></Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
