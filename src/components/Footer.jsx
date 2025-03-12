import { Box, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
// import { useEffect, useState } from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "black",
        color: "white",
        textAlign: "center",
        py: 3,
        mt: 5,
      }}
    >
      <Typography variant="body2">Copyright © 2025 Amiin Muse</Typography>
      <Box>
        <IconButton href="https://github.com" sx={{ color: "white" }}>
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://linkedin.com" sx={{ color: "white" }}>
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://twitter.com" sx={{ color: "white" }}>
          <TwitterIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
