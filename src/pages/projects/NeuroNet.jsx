import { Button, Typography, Container } from "@mui/material";
import nueronetimg from "../../img/neuronet.jpg"

const NeuroNet = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h3" fontWeight="bold">NeuroNet</Typography>
      <img src={nueronetimg} alt="NeuroNet Project" width="250px" style={{ margin: "20px auto" }} />
      
      <Typography variant="h4" fontWeight="bold" sx={{ mt: 5 }}>Project Overview</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        NeuroNet is a deep learning model designed to detect Alzheimer's disease at an early stage. 
        Utilizing advanced neural networks, it achieves 94% accuracy in early detection, providing 
        valuable insights for healthcare professionals.
      </Typography>

      <Typography variant="h4" fontWeight="bold" sx={{ mt: 5 }}>Skills & Technologies</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        - **Machine Learning & AI** (TensorFlow, PyTorch, Deep Learning)<br/>
        - **Medical Data Analysis** (MRI scans, diagnostic models, image processing)<br/>
        - **Software Development** (Python, Jupyter, cloud-based AI solutions)<br/>
        - **Model Optimization** (Fine-tuning, hyperparameter tuning, efficiency improvements)
      </Typography>

      <Button 
        variant="contained" 
        size="small" 
        sx={{ bgcolor: "black", color: "white", "&:hover": { bgcolor: "gray" }, mt: 4 }}
        href="https://www.linkedin.com/feed/update/urn:li:activity:7061834294410821632/" 
        target="_blank"
      >
        More Info
      </Button>
    </Container>
  );
};

export default NeuroNet;