import { Grid } from "@mui/material";
import Card from "../Card/Card";
import classes from "./Ribbon.module.css";
import BasicPie from "../BasicPie/BasicPie";

const Ribbon = ({patients}) => {
  return (
    <Grid container gap={2} className={classes.dataRibbon} marginBottom={5}>
      <Grid item>
        <Card
          title={"Total Patients (live)"}
          value={patients.length}
          description={
            "The total of patients"
          }
        />
      </Grid>
      <Grid item>
        <Card
          title={"Average Patient Age (live)"}
          value={patients.reduce((acc, { age }) => acc + Number(age) / patients.length, 0).toFixed(2)}
          description={"Average age of total patients"}
        />
      </Grid>
      <Grid item>
        <Card
          title={"Total Appointment"}
          value={"100"}
          description={
            "The total of appointments"
          }
        />
      </Grid>
      <Grid item>
        <Card
          title={"Treatments"}
          value={"402"}
          description={"The total of treatments"}
        />
      </Grid>
    </Grid>
  );
};

export default Ribbon;
