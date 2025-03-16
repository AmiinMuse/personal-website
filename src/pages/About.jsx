import { Container, Typography, Grid, Box } from "@mui/material";
import profilePic from "../img/amiin.jpg";

const AboutMe = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 15, mb: 10 }}> {/* ✅ Increased spacing from header */}
      {/* Title */}
      <Typography variant="h3" fontWeight="bold" textAlign="left" sx={{ mb: 4 }}>
        About Me
      </Typography>

      {/* Content Section */}
      <Grid container spacing={4} alignItems="center">
        {/* Left Side: Text */}
        <Grid item xs={12} md={7}>
          <Typography 
            variant="body1" 
            sx={{ fontSize: "1.2rem", lineHeight: 1.8, textAlign: "left" }} // ✅ Align text left
          >
            Hi, I'm <strong>Amiin Muse</strong>, a <strong>software engineer, designer, and innovator</strong> 
            studying <strong>Computer Science</strong> at 
            <strong> Northwestern University's McCormick School of Engineering</strong>. 
            Beyond academics, I lead and empower communities as the <strong>President of NSBE Northwestern</strong> 
            and <strong>Co-Founder of Emerging Coders</strong>, creating opportunities for underrepresented 
            students in tech. My industry experience spans <strong>software development, AI research, 
            and venture capital</strong>, with roles at <strong>Salesforce, Fermilab, and Takeoff Fund</strong>.
          </Typography>

          {/* Experience List */}
          <Box sx={{ mt: 3, textAlign: "left" }}>
            {/* Experience Section */}
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
              💼 Experience
            </Typography>
            <Typography variant="body1">
              🏆 <strong>Software Engineer Intern</strong> – Salesforce <br />
              🤖 <strong>Machine Learning Intern</strong> – Fermilab <br />
              🖥 <strong>Student Technician</strong> – Northwestern IT (AV Support) <br />
            </Typography>

            {/* Projects Section */}
            <Typography variant="h5" fontWeight="bold" sx={{ mt: 3, mb: 1 }}>
              🚀 Projects
            </Typography>
            <Typography variant="body1">
              🧠 <strong>NeuroNet</strong> – Best Overall Project, IEEE Northwestern Chapter <br />
              🚗 <strong>FareShare</strong> – WildHacks Hackathon Project <br />
              🌐 <strong>Web Portfolio</strong> <br />
              🎮 <strong>Battleship Game</strong> <br />
            </Typography>

            {/* Leadership Section */}
            <Typography variant="h5" fontWeight="bold" sx={{ mt: 3, mb: 1 }}>
              🏅 Leadership & Involvement
            </Typography>
            <Typography variant="body1">
              🎓 <strong>President</strong> – NSBE Northwestern <br />
              💡 <strong>Co-founder & VP</strong> – Emerging Coders <br />
              🏅 <strong>Team Lead</strong> – Northwestern IT <br />
            </Typography>
          </Box>



        </Grid>

        {/* Right Side: Profile Image */}
        {/* Right Side: Profile Image with Resume Link */}
        <Grid item xs={12} md={5} sx={{ textAlign: "center" }}> {/* ✅ Centered Image & Link */}
          <img 
            src={profilePic} 
            alt="Amiin Muse" 
            style={{ width: "100%", maxWidth: "300px", borderRadius: "12px", 
            boxShadow: "5px 5px 15px rgba(0,0,0,0.2)" }} 
          />

          {/* Resume Link */}
          <Box sx={{ mt: 2 }}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" 
              style={{ 
                textDecoration: "none", 
                fontWeight: "bold", 
                color: "#007bff", 
                fontSize: "1.1rem",
                display: "inline-block",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "2px solid #007bff",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "black"}
              onMouseOut={(e) => e.target.style.backgroundColor = "transparent"}
            >
              📄 View My Resume
            </a>
          </Box>
        </Grid>

      </Grid>
    </Container>
  );
};

export default AboutMe;
