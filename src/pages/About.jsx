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
            Hi, I'm <strong>Amiin Muse</strong>, an engineering student at
            <strong> Northwestern University's McCormick School of Engineering</strong>,
            pursuing a major in Computer Science, a minor in Data Science & Engineering,
            and currently pursuing a certificate in Design.
          </Typography>
        </Grid>

        {/* Right Column - Image */}
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <Avatar
              src={"/amiin.JPG" }
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

      {/* Scroll Arrow
      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>⬇</Typography>
      </Box> */}
    </Container>
  );
};

export default About;
