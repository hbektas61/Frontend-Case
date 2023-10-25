import React from "react";
import { Chart } from "react-google-charts";
import { patientsOfAge } from "../../../utils/patientOfAge";
import { pieChartOptions } from "../../../configs/pieChartOptions";

export default function BasicPie({ patients }) {
  const data = patientsOfAge(patients);

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={pieChartOptions}
      width={"100%"}
      height={"300px"}
    />
  );
}
