import { Grid } from "@mui/material";
import Card from "../Card/Card";

const Ribbon = ({ patients }) => {
  return (
    <Grid container spacing={2} marginBottom={5}>
      <Grid item xs={12} sm={3}>
        <Card
          title={"Total Patients (live)"}
          value={patients.length}
          description={"The total of patients"}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card
          title={"Average Patient Age (live)"}
          value={
            patients
              .reduce((acc, { age }) => acc + Number(age) / patients.length, 0)
              .toFixed(2)
          }
          description={"Average age of total patients"}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card
          title={"Total Appointment"}
          value={"100"}
          description={"The total of appointments"}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
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
