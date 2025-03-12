import { Button, Typography, Container, Grid } from "@mui/material";
import fermilabimg from "../../img/fermilab.jpg";

const Fermilab = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      {/* Title */}
      <Typography variant="h3" fontWeight="bold" textAlign="center">Fermilab</Typography>

      {/* Introduction */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 3 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
            Fermilab is a leading national laboratory specializing in high-energy physics research. As the U.S. Department of Energy’s premier particle physics lab, it plays a crucial role in studying fundamental particles and advancing quantum computing, machine learning, and AI applications for scientific discovery. 
            Fermilab conducts experiments at the cutting edge of physics, such as neutrino research, dark matter exploration, and accelerator-driven innovations. Its commitment to scientific breakthroughs makes it a hub for researchers and engineers dedicated to pushing the boundaries of knowledge.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <img src={fermilabimg} alt="Fermilab Logo" width="250px" />
        </Grid>
      </Grid>

      {/* Experience Section */}
      <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mt: 5 }}>
        My Experience
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
        As a Machine Learning Intern at Fermilab, I developed and implemented natural language processing (NLP) models to enhance search optimization for research databases, achieving a 90% improvement in accuracy. My work involved analyzing large-scale scientific datasets, fine-tuning AI models to streamline data retrieval, and automating documentation processes for physics research. 
        I collaborated with physicists and data scientists to integrate machine learning techniques into Fermilab’s workflow, helping researchers efficiently access and analyze complex scientific information. Through this experience, I gained exposure to high-performance computing, data-driven AI methodologies, and the intersection of artificial intelligence with fundamental physics.
      </Typography>

      {/* Skills Section */}
      <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mt: 5 }}>
        Skills & Technologies
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
        - **Machine Learning & NLP** (Search optimization, AI-driven data retrieval, model fine-tuning)<br/>
        - **Data Science & Analysis** (Python, TensorFlow, Scikit-learn, large-scale data processing)<br/>
        - **High-Performance Computing** (Optimizing AI models for physics research)<br/>
        - **Collaborative Research & Engineering** (Working with physicists and data scientists on AI integration)<br/>
        - **Problem-Solving & Innovation** (Automating scientific workflows, improving data accessibility)
      </Typography>

      <Button 
            variant="contained" 
            size="small" 
            sx={{ bgcolor: "black", color: "white", "&:hover": { bgcolor: "gray" } }} 
            href="https://www.fnal.gov/" 
            target="_blank"
            >
            More Info
        </Button>

    </Container>
  );
};

export default Fermilab;


//  {/* Image Gallery */}
//  <Grid container spacing={2} sx={{ mt: 5 }}>
//  <Grid item xs={12} md={4}>
//    <img src="/fermilab-img1.jpg" alt="Fermilab Experience 1" width="100%" />
//  </Grid>
//  <Grid item xs={12} md={4}>
//    <img src="/fermilab-img2.jpg" alt="Fermilab Experience 2" width="100%" />
//  </Grid>
//  <Grid item xs={12} md={4}>
//    <img src="/fermilab-img3.jpg" alt="Fermilab Experience 3" width="100%" />
//  </Grid>
// </Grid>