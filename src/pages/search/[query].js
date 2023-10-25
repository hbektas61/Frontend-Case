import PatientList from "@/components/PatientList/PatientList";
import { BASE_URL } from '@/configs/base';

function SearchResults({ patients }) {
  return (
        <PatientList patients={patients}/>
  );
}

export async function getServerSideProps(context) {
  const query = context.params.query;

  try {
    const response = await fetch(`${BASE_URL}/get?name=${query}`);
    const data = await response.json();

    return {
      props: {
        patients: data,
      }
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
}

export default SearchResults;
