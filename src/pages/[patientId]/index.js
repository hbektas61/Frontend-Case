import { BASE_URL } from "@/configs/base";
import Layout from "@/layout/Layout";
import UploadFile from "@/components/UploadFile/UploadFile";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function PatientDetails(props) {
  if (props.patientData.length === 0) {
    return <Typography variant="body1">Patient data not available.</Typography>;
  }

  const patient = props.patientData[0];

  return (
    <Layout>
      <Box p={3}>
        <Paper elevation={3} sx={{ padding: "16px", marginBottom: "16px" }}>
          <Typography variant="h5" gutterBottom>
            Medical History
          </Typography>
          <Typography variant="body1">{patient.medicalHistory}</Typography>
        </Paper>

        <Paper elevation={3} sx={{ padding: "16px", marginBottom: "16px" }}>
          <Typography variant="h6" gutterBottom>
            Contact Information
          </Typography>
          <Typography variant="body1">
            {patient.contactInformation.email}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "8px" }}>
            {patient.contactInformation.telephone}
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ padding: "16px", marginBottom: "16px" }}>
          <Typography variant="h5" gutterBottom>
            Disease
          </Typography>
          <Typography variant="body1">{patient.disease}</Typography>
        </Paper>
        <UploadFile user={patient} />
      </Box>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const patientId = context.params.patientId;

  const response = await fetch(`${BASE_URL}/get?id=${patientId}`);

  if (!response.ok) {
    console.error("Data fetching error:", response.statusText);
    return { notFound: true };
  }

  const patientData = await response.json();
  return {
    props: {
      patientData,
    },
  };
}

export default PatientDetails;
