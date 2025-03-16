import { Box, Typography, Container, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
  return (
    <Box>
      {/* Banner Section */}
      <Box
        sx={{
          backgroundColor: "#121212", // Dark blue/green tone
          color: "white",
          textAlign: "center",
          py: 16, // Increased padding to make the section taller
          mb: 5, // Margin bottom to separate from content
        }}
      >
        <Typography variant="h2" fontWeight="bold">
          Contact Me
        </Typography>
      </Box>

      {/* Contact Section */}
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
          Let’s have a chat.
        </Typography>

        {/* Contact Links */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <Button
            href="mailto:amiinmuse2025@u.northwestern.edu"
            startIcon={<EmailIcon />}
            sx={{ fontSize: "1.1rem", color: "#6A5ACD", textDecoration: "underline" }}
          >
            Email
          </Button>
          <Button
            href="https://www.linkedin.com/in/amiin-muse"
            target="_blank"
            startIcon={<LinkedInIcon />}
            sx={{ fontSize: "1.1rem", color: "#6A5ACD", textDecoration: "underline" }}
          >
            LinkedIn
          </Button>
          <Button
            href="https://github.com/amiinmuse"
            target="_blank"
            startIcon={<GitHubIcon />}
            sx={{ fontSize: "1.1rem", color: "#6A5ACD", textDecoration: "underline" }}
          >
            GitHub
          </Button>
          {/* <Button
            href="https://www.instagram.com/your-instagram"
            target="_blank"
            startIcon={<InstagramIcon />}
            sx={{ fontSize: "1.1rem", color: "#6A5ACD", textDecoration: "underline" }}
          >
            Instagram
          </Button> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
