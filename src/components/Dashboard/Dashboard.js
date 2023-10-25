import React from "react";
import {
  Container,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import Ribbon from "./Ribbon/Ribbon";
import PatientList from "../PatientList/PatientList";
import { useUser } from "@clerk/nextjs";
import BasicPie from "./BasicPie/BasicPie";
import BarCharts from "./BarCharts/BarCharts";

function Dasboard({ patients }) {
  const { isLoaded, isSignedIn, user } = useUser();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    isLoaded && (
      <Container maxWidth="lg">
        <Typography variant={isMobile ? "h5" : "h4"} gutterBottom>
          {isSignedIn && `Good morning, Dr.${user.username}!`}
        </Typography>
        Hello there! Welcome to our medical app. How can we assist you today?
        <Box display="flex" justifyContent="space-between" marginBottom="20px">
          <Ribbon patients={patients} />
        </Box>
        <PatientList patients={patients} />
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <BasicPie patients={patients} />
          </Grid>
          <Grid item xs={12} md={6}>
            <BarCharts patients={patients} />
          </Grid>
        </Grid>
      </Container>
    )
  );
}

export default Dasboard;
