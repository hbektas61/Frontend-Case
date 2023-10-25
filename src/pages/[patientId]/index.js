import PatientDetail from "@/components/PatientDetail/PatientDetail";
import { BASE_URL } from '@/configs/base';

function PatientDetails(props) {
  return (

      <PatientDetail data={props.patientData} />
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
