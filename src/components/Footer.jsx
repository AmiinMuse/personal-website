import { Box, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
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
        <IconButton href="https://github.com/amiinmuse" sx={{ color: "white" }}>
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/amiin-muse/" sx={{ color: "white" }}>
          <LinkedInIcon />
        </IconButton>
        <IconButton href="https://twitter.com" sx={{ color: "white" }}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg" 
          alt="X Logo" 
          width="18px" 
          height="18px" 
          style={{ filter: "invert(100%)" }}
        />
      </IconButton>



      </Box>
    </Box>
  );
};

export default Footer;
