import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import amiinlogo from "./../img/amiinlogo.png";

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
        {/* Logo wrapped inside Link */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Link to="/" style={{ textDecoration: "none" }}>  
            <img 
              src={amiinlogo} 
              alt="Amiin Logo"
              style={{ height: "50px", width: "auto", cursor: "pointer" }} 
            />
          </Link>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ fontSize: "50px" }}>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>
          <Button component={Link} to="/projects" color="inherit">Projects</Button>
          <Button component={Link} to="/contact" color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
