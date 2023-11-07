import { Box, Button, Container, Stack, Typography } from "@mui/material";
import hospitalImg from "../../assets/hospital.webp";

const Banner = () => {
  return (
    <Container>
      <Stack
        spacing={2}
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        textAlign={{ xs: "center", md: "left" }}
      >
        <Box>
          <Typography variant="h2" color="primary">
            Welcome to My Clinic
          </Typography>
          <Typography variant="h5">
            This is a Hospital Management System where you can manage your
            patients and doctors.
          </Typography>
          <Button variant="contained" sx={{ margin: "1rem 0" }}>
            Continue
          </Button>
        </Box>
        <Box
          component="img"
          src={hospitalImg}
          alt="Banner Image"
          sx={{ width: { xs: "100%", lg: "60%" }, margin: "0" }}
        />
      </Stack>
    </Container>
  );
};

export default Banner;
