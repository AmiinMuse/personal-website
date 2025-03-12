import { Button, Typography, Container, Grid } from "@mui/material";
import salesforceimg from "../../img/salesforce.png";

const Salesforce = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      {/* Title */}
      <Typography variant="h3" fontWeight="bold" textAlign="center">Salesforce</Typography>

      {/* Introduction */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 3 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
            Salesforce is a global leader in cloud-based software solutions, specializing in customer relationship management (CRM) and enterprise applications. 
            The company provides businesses with tools for sales, customer service, marketing automation, analytics, and application development.
            With a strong emphasis on artificial intelligence and automation, Salesforce's Einstein AI delivers predictive insights and automation for business operations. 
            As a Fortune 500 company, Salesforce is known for its innovation, commitment to sustainability, and impact on digital transformation across industries.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <img src={salesforceimg} alt="Salesforce Logo" width="250px" />
        </Grid>
      </Grid>

      {/* Experience Section */}
      <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mt: 5 }}>
        My Experience
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
        As a Software Engineering Intern at Salesforce, I worked on optimizing large language models (LLMs) for Einstein Bots, improving bot accuracy from 97% to 99-100%.
        I played a key role in refining machine learning models, developing advanced natural language processing (NLP) techniques, and implementing strategies to enhance chatbot interactions.
        My work involved designing and optimizing LLM prompts, integrating AI-driven solutions into Salesforce's Einstein platform, and improving the efficiency of chatbot responses.
        Additionally, I collaborated with cross-functional teams to bridge the gap between AI research and enterprise application development, ensuring scalable and effective AI solutions for customers.
      </Typography>

      {/* Skills Section */}
      <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mt: 5 }}>
        Skills & Technologies
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
        - **Machine Learning & NLP** (LLM prompt engineering, chatbot optimization, model fine-tuning)<br/>
        - **Software Development** (Java, Python, Spring Boot, REST API development)<br/>
        - **Cloud & AI Integration** (Salesforce Einstein AI, cloud-based AI solutions, AI-driven automation)<br/>
        - **Cross-functional Collaboration** (Working with data scientists, engineers, and product managers)<br/>
        - **Problem-Solving & Optimization** (Refining AI models, improving accuracy, enhancing user interactions)
      </Typography>

      <Button 
            variant="contained" 
            size="small" 
            sx={{ bgcolor: "black", color: "white", "&:hover": { bgcolor: "gray" } }} 
            href="https://www.salesforce.com/" 
            target="_blank"
            >
            More Info
        </Button>

    </Container>
  );
};

export default Salesforce;

      {/* Image Gallery */}
      {/* <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item xs={12} md={4}>
          <img src="/salesforce1.jpg" alt="Salesforce Experience 1" width="100%" />
        </Grid>
        <Grid item xs={12} md={4}>
          <img src="/salesforce-img2.jpg" alt="Salesforce Experience 2" width="100%" />
        </Grid>
        <Grid item xs={12} md={4}>
          <img src="/salesforce-img3.jpg" alt="Salesforce Experience 3" width="100%" />
        </Grid>
      </Grid> */}

