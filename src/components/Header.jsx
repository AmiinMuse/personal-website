import { AppBar, Toolbar, Button, Box } from "@mui/material";
import amiinlogo from "./../img/amiinlogo.png"
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Header = () => {
  return (
    <AppBar 
      position="absolute" 
        sx={{ 
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          borderRadius: "12px",
          margin: "20px auto",
          padding: "6px 24px",
          boxShadow: 3,
          color: "black", 
          backdropFilter: "blur(10px)",
          width: "95%",
          maxWidth: "1500px",
          left: "50%",
          transform: "translateX(-50%)"
         }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{display: "flex", alignItems:"center", gap: 1}}>
          <img 
            src={amiinlogo} 
            alt="Amiin Logo"
            style={{ height: "50px", width: "auto" }} 
          />
          {/* <Typography variant="h4" sx={{ fontFamily: "inter" }}>Amiin </Typography> */}
        </Box>
        <Box
        sx={{
          fontSize: "50px" 
        }}
        >
          <Button href="/" color="inherit">Home</Button>
          <Button href="/about" color="inherit">About</Button>
          <Button href="/projects" color="inherit">Projects</Button>
          <Button href="/contact" color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
