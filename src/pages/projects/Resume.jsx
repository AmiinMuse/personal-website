import { Box, Typography, Container } from "@mui/material";

const Resume = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 15, mb: 10 }}>
      {/* Title */}
      <Typography variant="h3" fontWeight="bold" textAlign="center" sx={{ mb: 5 }}>
        Resume
      </Typography>

      {/* Resume PDF Viewer */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
      <iframe 
        src="/resume.pdf"
        width="100%"
        height="800px"
        style={{ border: "none", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)" }}
        title="Amiin Muse's Resume"
      />

      </Box>
    </Container>
  );
};

export default Resume;
