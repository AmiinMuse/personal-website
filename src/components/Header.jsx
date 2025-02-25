import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black", boxShadow: 1 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontFamily: "cursive" }}>Amiin</Typography>
        <Box>
          <Button href="/" color="inherit">Home</Button>
          <Button href="/about" color="inherit">About</Button>
          <Button href="/projects" color="inherit">Projects</Button>
          <Button href="/contact" color="inherit">Contact</Button>
          <GitHubIcon sx={{ mx: 1 }} />
          <LinkedInIcon />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
