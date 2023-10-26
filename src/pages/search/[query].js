import PatientList from "@/components/PatientList/PatientList";
import Layout from "@/layout/Layout";
import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import { BASE_URL } from "@/configs/base";

function SearchResults({ patients }) {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Layout>
      <Box
        sx={{
          height: 400,
          padding: isMobileView ? 2 : 10,
        }}
      >
        <PatientList patients={patients} />
      </Box>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const query = context.params.query;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get?name=${query}`);
    const data = await response.json();

    return {
      props: {
        patients: data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default SearchResults;
