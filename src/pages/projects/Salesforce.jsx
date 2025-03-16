import { Button, Typography, Container, Grid, Box } from "@mui/material";
import salesforceimg from "../../img/salesforce.png";

const Salesforce = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 10 }}>
      {/* Title */}
      <Typography variant="h3" fontWeight="bold" textAlign="center">
        Salesforce
      </Typography>

      {/* Introduction */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 3 }}>
        {/* Left: Company Info */}
        <Grid item xs={12} md={6}>
        <Typography variant="h4" fontWeight="bold" textAlign="left" sx={{ mb: 2 }}>

            About Salesforce
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left" }}>
            Salesforce is a global leader in cloud-based software solutions, specializing in customer relationship management (CRM) 
            and enterprise applications. The company provides businesses with tools for sales, customer service, marketing automation, 
            analytics, and application development. With a strong emphasis on artificial intelligence, Salesforce’s Einstein AI delivers 
            predictive insights and automation for business operations. As a Fortune 500 company, Salesforce is known for its innovation, 
            commitment to sustainability, and digital transformation impact across industries.
          </Typography>
        </Grid>

        {/* Right: Salesforce Logo */}
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <img src={salesforceimg} alt="Salesforce Logo" width="250px" />
        </Grid>
      </Grid>

      {/* Experience Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="left" sx={{ mb: 2 }}>
          My Experience at Salesforce
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left" }}>
          As a Software Engineering Intern at Salesforce, I worked on optimizing large language models (LLMs) for 
          Einstein Bots, increasing chatbot accuracy from 97% to 99-100%. I focused on machine learning model refinement, 
          advanced NLP techniques, and AI-driven automation to enhance chatbot interactions. My contributions included:
        </Typography>
        <Box component="ul" sx={{ mt: 2, textAlign: "left", pl: 3 }}>
          <li><strong>LLM Prompt Engineering</strong> – Fine-tuned AI models for better chatbot responses.</li>
          <li><strong>AI Integration</strong> – Implemented ML strategies within **Salesforce Einstein AI**.</li>
          <li><strong>Collaboration with AI Teams</strong> – Worked cross-functionally with engineers and data scientists.</li>
          <li><strong>Optimization & Problem-Solving</strong> – Enhanced chatbot accuracy for enterprise clients.</li>
        </Box>
      </Box>

      {/* Skills Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="left" sx={{ mb: 2 }}>
          Skills & Technologies
        </Typography>
        <Box component="ul" sx={{ textAlign: "left", pl: 3 }}>
          <li><strong>Machine Learning & NLP</strong> – LLM prompt engineering, chatbot optimization, AI model fine-tuning.</li>
          <li><strong>Software Development</strong> – Java, Python, Spring Boot, REST API development.</li>
          <li><strong>Cloud & AI Integration</strong> – Salesforce Einstein AI, cloud-based AI automation.</li>
          <li><strong>Cross-functional Collaboration</strong> – Working with AI engineers, product managers, and researchers.</li>
          <li><strong>Problem-Solving & Optimization</strong> – AI model refinement, improving chatbot engagement.</li>
        </Box>
      </Box>

      {/* More Info Button */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button 
          variant="contained" 
          size="large" 
          sx={{ bgcolor: "black", color: "white", "&:hover": { bgcolor: "gray" } }} 
          href="https://www.salesforce.com/" 
          target="_blank"
        >
          Learn More
        </Button>
      </Box>
    </Container>
  );
};

export default Salesforce;
