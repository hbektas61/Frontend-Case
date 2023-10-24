import { getAuth, buildClerkProps } from "@clerk/nextjs/server";
import MainPage from "@/components/Dashboard/MainPage";
import Head from "next/head";

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Patient App</title>
        <meta name="description" content="dummy" />
      </Head>
      <MainPage patients={props.patients}/>
    </div>
  );
}

export default HomePage;

export async function getServerSideProps(ctx) {
  const { userId } = getAuth(ctx.req);

  if (!userId) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    }
  }


  try {
    const response = await fetch('http://localhost:3010/api/get');
    if (!response.ok) {
      throw new Error('Failed to fetch patients');
    }
    const data = await response.json();

    return {
      props: {
        patients: data,
        ...buildClerkProps(ctx.req)
      }
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
}
