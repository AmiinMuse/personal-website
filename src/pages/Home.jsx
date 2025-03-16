import { Box, Typography, Grid, Link } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookIcon from "@mui/icons-material/Book";
import homebackground from "./../img/homeback.jpg"

const Home = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      {/* Home Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
          justifyContent: "center",
          paddingLeft: "20%",
          color: "white",
          height: "100vh",
          // backgroundImage: `url(${homebackground})`,
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.2)), url(${homebackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
          <Typography variant="h3" sx={{ fontWeight: "bold"}}>
            Hey there, I'm Amiin.
          </Typography>
          <Typography variant="h5" sx={{ color: "black" , mt: 1 }}>
            Engineer | Designer | Problem-solver
          </Typography>

      </Box>

      {/* Footer Links Section */}
      <Box sx={{ bgcolor: "#f8f8f8", py: 3, mt: 2 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Link href="/about" underline="none" sx={{ display: "flex", alignItems: "center", color: "gray", fontSize: "1rem", fontWeight: "bold" }}>
              <HomeIcon sx={{ mr: 1 }} /> Learn about me
            </Link>
          </Grid>
          <Grid item>
            <Link href="/contact" underline="none" sx={{ display: "flex", alignItems: "center", color: "gray", fontSize: "1rem", fontWeight: "bold" }}>
              <EmailIcon sx={{ mr: 1 }} /> Get in touch
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://github.com/amiinmuse" underline="none" sx={{ display: "flex", alignItems: "center", color: "gray", fontSize: "1rem", fontWeight: "bold" }}>
              <FavoriteIcon sx={{ mr: 1 }} /> Support my work
            </Link>
          </Grid>
          {/* <Grid item>
            <Link href="/blog" underline="none" sx={{ display: "flex", alignItems: "center", color: "gray", fontSize: "1rem", fontWeight: "bold" }}>
              <BookIcon sx={{ mr: 1 }} /> Check out my blog
            </Link>
          </Grid> */}
          <Grid item>
            <Link href="/resume.pdf" target="_blank" underline="none" sx={{ display: "flex", alignItems: "center", color: "gray", fontSize: "1rem", fontWeight: "bold" }}>
              📄 View my resume
            </Link>
          </Grid>
        </Grid>
      </Box>

    </Box>
  );
};

export default Home;
