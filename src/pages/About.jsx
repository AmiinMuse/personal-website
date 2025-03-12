import { Box, Typography, Avatar, Container, Grid } from "@mui/material";
// import amiinImage from "../assets/amiin.jpg"
const amiinImage = new URL("../assets/amiin.JPG", import.meta.url).href;

// import northwesternLogo from "../assets/northwestern-logo.png"; // Replace with actual path

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      {/* Title */}
      <Typography variant="h3" textAlign="center" sx={{ fontWeight: "bold" }}>
        About Me
      </Typography>

      {/* Grid Layout */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 5 }}>
        {/* Left Column - Text */}
        <Grid item xs={12} md={6}>
        <Typography variant="body1" sx={{ fontSize: "1.2rem", lineHeight: 1.8, textAlign: "center" }}>
        Hi, I'm <strong>Amiin Muse</strong>, a <strong>software engineer, designer, and innovator</strong>  
        studying <strong>Computer Science</strong> at <strong>Northwestern University's McCormick School of Engineering</strong>.  
        Beyond academics, I lead and empower communities as the <strong>President of NSBE Northwestern</strong>  
        and <strong>Co-Founder of Emerging Coders</strong>, creating opportunities for underrepresented students in tech.  
        My industry experience spans <strong>software development, AI research, and venture capital</strong>,  
        with roles at <strong>Salesforce, Fermilab, and Takeoff Fund</strong>.  
      </Typography>



           {/* Experience Highlights */}
      <Box sx={{ mt: 3 }}>
            <Typography variant="body1" sx={{ fontSize: "1rem", textAlign: "center", lineHeight: 1.8 }}>
              🎓 <strong>President of NSBE Northwestern</strong> <br/>
              💡 <strong>Vice President of Emerging Coders</strong> <br/>
              🏆 <strong>Salesforce Software Engineer Intern</strong> <br/>
              🚀 <strong>Venture Capital Intern at Takeoff Fund</strong>
            </Typography>
          </Box>
        </Grid>

        {/* Right Column - Image */}
        <Grid item xs={12} md={6} sx={{ textAlign: "right", pr: 5 }}>
          <Avatar
            src={"/amiin.JPG"}
            sx={{
              width: 250,
              height: 250,
              borderRadius: "20px",
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>

      {/* Northwestern Logo */}
      <Box sx={{ textAlign: "center", mt: 5 }}>
        {/* <Avatar src={northwesternLogo} sx={{ width: 80, height: 80 }} /> */}
      </Box>

     
    </Container>
  );
};

export default About;
