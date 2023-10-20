import { Fragment, useEffect, useState } from "react";
import PatientList from "../components/PatientList/PatientList";
import Head from "next/head";

const Dummy_Patients = [
    {
        id: '1',
        name: 'John Brown',
        age: 32,
        gender: 'Men',
      },
      {
        id: '2',
        name: 'Joe Black',
        age: 42,
        gender: 'Men',
      },
      {
        id: '3',
        name: 'Jim Green',
        age: 32,
        gender: 'Men',
      },
      {
        id: '4',
        name: 'Jim Red',
        age: 32,
        gender: 'Woman',
      },
      {
        id: '5',
        name: 'Jim se',
        age: 32,
        gender: 'Woman',
      },
      {
        id: '6',
        name: 'Jim se',
        age: 32,
        gender: 'Woman',
      },
];


function HomePage () {
    const [loadPatients,setLoadedPatients] = useState(Dummy_Patients);

    useEffect(() => {

        setLoadedPatients(Dummy_Patients);
    }, []);

    return (
        <Fragment>
            <Head>
                <title>Patient App</title>
                <meta name="description" content="dummy"/>
            </Head>
            <PatientList patients={loadPatients}/>
        </Fragment>
    )
}

export default HomePage;