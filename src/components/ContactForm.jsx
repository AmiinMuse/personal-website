
import { TextField, Button, Box, Typography } from "@mui/material";

const ContactForm = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "50%", margin: "auto", gap: 2 }}>
      <Typography variant="h4" textAlign="center">Contact Me</Typography>
      <TextField label="Enter your name" variant="outlined" fullWidth />
      <TextField label="Enter your email" variant="outlined" fullWidth />
      <TextField label="Message" variant="outlined" fullWidth multiline rows={4} />
      <Button variant="contained" color="primary">Send</Button>
    </Box>

    

  );
};

export default ContactForm;
