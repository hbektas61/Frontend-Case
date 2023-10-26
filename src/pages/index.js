import { getAuth, buildClerkProps } from "@clerk/nextjs/server";
import { BASE_URL } from "@/configs/base";
import Layout from "@/layout/Layout";
import {
  Container,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import Ribbon from "@/components/Dashboard/Ribbon/Ribbon";
import PatientList from "@/components/PatientList/PatientList";
import { useUser } from "@clerk/nextjs";
import BasicPie from "@/components/Dashboard/BasicPie/BasicPie";
import BarCharts from "@/components/Dashboard/BarCharts/BarCharts";

function HomePage(props) {
  const { isLoaded, isSignedIn, user } = useUser();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Layout>
      {isLoaded && (
        <Container maxWidth="lg">
          <Typography variant={isMobile ? "h5" : "h4"} gutterBottom>
            {isSignedIn && `Good morning, Dr.${user.username}!`}
          </Typography>
          Hello there! Welcome to our medical app. How can we assist you today?
          <Box
            display="flex"
            justifyContent="space-between"
            marginBottom="20px"
          >
            <Ribbon patients={props.patients} />
          </Box>
          <PatientList patients={props.patients} />
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <BasicPie patients={props.patients} />
            </Grid>
            <Grid item xs={12} md={6}>
              <BarCharts patients={props.patients} />
            </Grid>
          </Grid>
        </Container>
      )}
    </Layout>
  );
}

export default HomePage;

export async function getServerSideProps(ctx) {
  const { userId } = getAuth(ctx.req);

  if (!userId) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get`);
    if (!response.ok) {
      throw new Error("Failed to fetch patients");
    }
    const data = await response.json();

    return {
      props: {
        patients: data,
        ...buildClerkProps(ctx.req),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
