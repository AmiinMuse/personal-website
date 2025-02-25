import { Box, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight - 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        bgcolor: "black",
        color: "white",
        textAlign: "center",
        py: 2,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <IconButton href="https://github.com" sx={{ color: "white" }}>
        <GitHubIcon />
      </IconButton>
      <IconButton href="https://linkedin.com" sx={{ color: "white" }}>
        <LinkedInIcon />
      </IconButton>
      <IconButton href="https://instagram.com" sx={{ color: "white" }}>
        <InstagramIcon />
      </IconButton>
      <IconButton href="https://twitter.com" sx={{ color: "white" }}>
        <TwitterIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;
