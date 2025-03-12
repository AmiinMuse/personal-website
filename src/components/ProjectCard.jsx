import { Card, CardContent, Typography, Box, Button, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ title, company, role, description, image, logo, route }) => {
  const navigate = useNavigate(); // ✅ Use navigate for routing

  return (
    <Card
      sx={{
        width: 350,
        height: 220, 
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 2,
        p: 2,
        boxShadow: 3,
        position: "relative",
        overflow: "hidden",
        background: image 
          ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${image})`
          : "#1E1E1E",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
      }}
    >
      <CardContent>
        {/* Show title for projects */}
        {title && (
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "white", mb: 1 }}>
            {title}
          </Typography>
        )}

        {/* Company Logo & Name */}
        {company && (
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Avatar 
              src={logo} 
              alt={company} 
              sx={{ width: 60, height: 60, mr: 2, bgcolor: "white", p: 1, borderRadius: 2 }} 
            />
            <Box sx={{ textAlign: "left" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
                {company}
              </Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                {role}
              </Typography>
            </Box>
          </Box>
        )}

        {/* Description */}
        <Typography variant="body2" sx={{ mt: 1, color: "white" }}>
          {description}
        </Typography>
      </CardContent>

      {/* More Info Button (Navigates to the specific page) */}
      <Box sx={{ textAlign: "right", p: 1 }}>
        <Button 
          variant="contained" 
          size="small" 
          sx={{ bgcolor: "white", color: "black", "&:hover": { bgcolor: "gray" } }} 
          onClick={() => navigate(route)} // ✅ Use navigate instead of href
        >
          More Info
        </Button>
      </Box>
    </Card>
  );
};

export default ProjectCard;
