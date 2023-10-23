import { Fragment, useEffect, useState } from "react";
import PatientList from "../components/PatientList/PatientList";
import Ribbon from "../components/Dashboard/Ribbon/Ribbon";
import Head from "next/head";

function HomePage (props) {
    return (
        <Fragment>
            <Head>
                <title>Patient App</title>
                <meta name="description" content="dummy"/>
            </Head>
            <Ribbon/>
            <PatientList patients={props.patients}/>  
        </Fragment>
    )
}

export default HomePage;

export async function getServerSideProps(context) {
  try {
    const response = await fetch('http://localhost:3002/api/get');
    if (!response.ok) {
      throw new Error('Failed to fetch patients');
    }
    const data = await response.json();

    return {
      props: {
        patients: data
      }
    }
  } catch (error) {
    return {
      notFound: true
    };
  }
}
