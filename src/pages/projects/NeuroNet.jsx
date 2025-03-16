import { Button, Typography, Container, Grid, Box } from "@mui/material";
import neuronetimg from "../../img/neuronet.jpg";

const NeuroNet = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 10 }}>
      {/* Title */}
      <Typography variant="h3" fontWeight="bold" textAlign="center">
        NeuroNet
      </Typography>

      {/* Introduction */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 3 }}>
        {/* Left: Project Overview */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" textAlign="left" sx={{ mb: 2 }}>
            About NeuroNet
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left" }}>
            NeuroNet is a deep learning model designed for early-stage Alzheimer's detection. 
            By analyzing MRI scans and medical data, it achieves high accuracy in predicting 
            early signs of cognitive decline, aiding medical professionals in diagnostics.
          </Typography>
        </Grid>

        {/* Right: Image */}
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <img src={neuronetimg} alt="NeuroNet Project" width="250px" />
        </Grid>
      </Grid>

      {/* Skills & Technologies */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="left" sx={{ mb: 2 }}>
          Skills & Technologies
        </Typography>
        <Box component="ul" sx={{ textAlign: "left", pl: 3 }}>
          <li>Machine Learning and AI (TensorFlow, PyTorch, Neural Networks)</li>
          <li>Medical Data Analysis (MRI processing, diagnostic modeling)</li>
          <li>Software Development (Python, Jupyter, cloud-based AI solutions)</li>
          <li>Model Optimization (Fine-tuning, hyperparameter tuning, efficiency improvements)</li>
        </Box>
      </Box>

      {/* More Info Button */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button 
          variant="contained" 
          size="large" 
          sx={{ bgcolor: "black", color: "white", "&:hover": { bgcolor: "gray" } }} 
          href="https://www.linkedin.com/feed/update/urn:li:activity:7061834294410821632/" 
          target="_blank"
        >
          Learn More
        </Button>
      </Box>
    </Container>
  );
};

export default NeuroNet;
