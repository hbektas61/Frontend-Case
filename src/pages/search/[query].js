import PatientList from "@/components/PatientList/PatientList";

function SearchResults({ patients }) {
  return (
        <PatientList patients={patients}/>
  );
}

export async function getServerSideProps(context) {
  const query = context.params.query;

  try {
    const response = await fetch(`http://localhost:3002/api/get?name=${query}`);
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
