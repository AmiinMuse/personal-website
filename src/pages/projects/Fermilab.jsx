import { Button, Typography, Container, Grid, Box } from "@mui/material";
import fermilabimg from "../../img/fermilab.jpg";

const Fermilab = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 10 }}>
      {/* Title */}
      <Typography variant="h3" fontWeight="bold" textAlign="center">
        Fermilab
      </Typography>

      {/* Introduction */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 3 }}>
        {/* Left: About Fermilab */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" textAlign="left" sx={{ mb: 2 }}>
            About Fermilab
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left" }}>
            Fermilab is the U.S. Department of Energy’s premier particle physics laboratory, 
            specializing in high-energy physics, quantum computing, and AI applications for scientific discovery. 
            The lab is at the forefront of neutrino research, dark matter studies, and accelerator innovations, 
            making it a hub for cutting-edge physics research.
          </Typography>
        </Grid>

        {/* Right: Fermilab Logo */}
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <img src={fermilabimg} alt="Fermilab Logo" width="250px" />
        </Grid>
      </Grid>

      {/* Experience Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="left" sx={{ mb: 2 }}>
          My Experience at Fermilab
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left" }}>
          As a Machine Learning Intern at Fermilab, I developed NLP models to improve *search optimization 
          for research databases, increasing accuracy by 90%. My contributions included:
        </Typography>
        <Box component="ul" sx={{ mt: 2, textAlign: "left", pl: 3 }}>
          <li><strong>AI-powered Search Optimization</strong> – Enhanced retrieval accuracy for physics research.</li>
          <li><strong>Data Science & NLP</strong> – Developed models for automating research insights.</li>
          <li><strong>High-Performance Computing</strong> – Optimized ML models for large-scale scientific data.</li>
          <li><strong>Collaboration with Physicists</strong> – Worked with researchers on integrating AI into experiments.</li>
        </Box>
      </Box>

      {/* Skills Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="left" sx={{ mb: 2 }}>
          Skills & Technologies
        </Typography>
        <Box component="ul" sx={{ textAlign: "left", pl: 3 }}>
          <li><strong>Machine Learning & NLP</strong> – AI search optimization, model fine-tuning.</li>
          <li><strong>Data Science & Analysis</strong> – Python, TensorFlow, Scikit-learn.</li>
          <li><strong>High-Performance Computing</strong> – AI applications for physics research.</li>
          <li><strong>Scientific Collaboration</strong> – Worked with physicists and data engineers.</li>
        </Box>
      </Box>

      {/* More Info Button */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button 
          variant="contained" 
          size="large" 
          sx={{ bgcolor: "black", color: "white", "&:hover": { bgcolor: "gray" } }} 
          href="https://www.fnal.gov/" 
          target="_blank"
        >
          Learn More
        </Button>
      </Box>
    </Container>
  );
};

export default Fermilab;
