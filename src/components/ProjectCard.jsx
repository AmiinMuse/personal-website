import { Card, CardContent, Typography, Box } from "@mui/material";

const ProjectCard = ({ title }) => {
  return (
    <Card sx={{ width: 250, height: 150, bgcolor: "lightgray", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
