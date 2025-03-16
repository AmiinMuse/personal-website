import { Button, Typography, Container, Grid, Box } from "@mui/material";
import northwesternIT from "../../img/northwestern.png";

const NorthwesternIT = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 10 }}>
      {/* Title */}
      <Typography variant="h3" fontWeight="bold" textAlign="center">
        Northwestern IT (AV Support)
      </Typography>

      {/* Introduction */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 3 }}>
        {/* Left: About Northwestern IT */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" textAlign="left" sx={{ mb: 2 }}>
            About Northwestern IT
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left" }}>
            Northwestern University's IT (AV Support) department** ensures seamless integration of technology 
            into academic and administrative environments. The team manages classroom technology, live event AV setups, 
            and IT troubleshooting for students, faculty, and staff.
          </Typography>
        </Grid>

        {/* Right: Northwestern IT Logo */}
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <img src={northwesternIT} alt="Northwestern IT Logo" width="250px" />
        </Grid>
      </Grid>

      {/* Experience Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="left" sx={{ mb: 2 }}>
          My Experience at Northwestern IT
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left" }}>
          As a Student Technician at Northwestern IT, I provided AV and IT support for over 100+ students and faculty. 
          My role involved:
        </Typography>
        <Box component="ul" sx={{ mt: 2, textAlign: "left", pl: 3 }}>
          <li><strong>Technical Support</strong> – Troubleshot software/hardware issues for students & faculty.</li>
          <li><strong>AV Setup & Maintenance</strong> – Assisted in **live events, classroom tech, and digital AV systems**.</li>
          <li><strong>Network Troubleshooting</strong> – Diagnosed and resolved **connectivity issues** on campus.</li>
          <li><strong>Customer-Facing IT Support</strong> – Provided tech assistance under high-pressure scenarios.</li>
        </Box>
      </Box>

      {/* Skills Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="left" sx={{ mb: 2 }}>
          Skills & Technologies
        </Typography>
        <Box component="ul" sx={{ textAlign: "left", pl: 3 }}>
          <li><strong>IT & Technical Support</strong> – Hardware/software troubleshooting, system maintenance.</li>
          <li><strong>Audio-Visual (AV) Support</strong> – Classroom tech, live event AV management.</li>
          <li><strong>Network & System Administration</strong> – Diagnosing & fixing network-related issues.</li>
          <li><strong>Customer Service & Problem-Solving</strong> – Effective IT support in high-demand environments.</li>
        </Box>
      </Box>

      {/* More Info Button */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button 
          variant="contained" 
          size="large" 
          sx={{ bgcolor: "black", color: "white", "&:hover": { bgcolor: "gray" } }} 
          href="https://services.northwestern.edu/TDClient/30/Portal/Requests/ServiceDet?ID=106" 
          target="_blank"
        >
          Learn More
        </Button>
      </Box>
    </Container>
  );
};

export default NorthwesternIT;
