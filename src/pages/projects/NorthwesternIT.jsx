import { Button, Typography, Container, Grid } from "@mui/material";
import northwesternIT from "../../img/northwestern.png";

const NorthwesternIT = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      {/* Title */}
      <Typography variant="h3" fontWeight="bold" textAlign="center">Northwestern IT (AV Support)</Typography>

      {/* Introduction */}
      <Grid container spacing={4} alignItems="center" sx={{ mt: 3 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
            Northwestern University's IT (AV Support) department provides critical technology services that ensure seamless academic and administrative operations. 
            The department manages university-wide IT infrastructure, supporting classroom technology, live event AV setups, and troubleshooting network and hardware issues for students, faculty, and staff. 
            Through advanced AV solutions, IT support helps enhance the learning environment, ensuring smooth integration of digital tools into education and research.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <img src={northwesternIT} alt="Northwestern IT Logo" width="250px" />
        </Grid>
      </Grid>

      {/* Experience Section */}
      <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mt: 5 }}>
        My Experience
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
        As a Student Technician for Northwestern IT (AV Support), I provided hands-on technical support, ensuring over 100 students and faculty members had seamless access to IT resources. 
        My responsibilities included diagnosing and resolving software and hardware issues, maintaining AV setups in classrooms and event spaces, and assisting in troubleshooting network-related problems. 
        I gained extensive experience in customer-facing IT support, problem-solving under pressure, and ensuring the reliability of Northwestern's AV and IT systems for academic use.
      </Typography>

      {/* Skills Section */}
      <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mt: 5 }}>
        Skills & Technologies
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
        - **IT & Technical Support** (Hardware troubleshooting, software diagnostics, network issue resolution)<br/>
        - **Audio-Visual (AV) Support** (Classroom technology management, live event AV troubleshooting, system configuration)<br/>
        - **Customer Support & Communication** (Interacting with faculty, students, and staff to resolve technical issues effectively)<br/>
        - **System Administration Basics** (Assisting in configuring and maintaining university IT resources)<br/>
        - **Problem-Solving & Quick Thinking** (Resolving IT issues in high-pressure academic environments)
      </Typography>

      <Button 
            variant="contained" 
            size="small" 
            sx={{ bgcolor: "black", color: "white", "&:hover": { bgcolor: "gray" } }} 
            href="https://services.northwestern.edu/TDClient/30/Portal/Requests/ServiceDet?ID=106" 
            target="_blank"
            >
            More Info
        </Button>

    </Container>
  );
};

export default NorthwesternIT;
