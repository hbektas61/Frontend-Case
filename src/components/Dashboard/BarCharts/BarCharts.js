import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { processData } from "../../../utils/dataProcessing";

const BarCharts = ({ patients }) => {
  const data = processData(patients);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="man" fill="#8884d8" barSize={20} />
        <Bar dataKey="woman" fill="#82ca9d" barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarCharts;
