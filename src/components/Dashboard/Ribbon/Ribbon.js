import { Grid } from "@mui/material";
import Card from "../Card/Card";
import classes from "./Ribbon.module.css";
import BasicPie from "../BasicPie/BasicPie";

const Ribbon = () => {
  return (
    <Grid container gap={2} className={classes.dataRibbon} marginBottom={5}>
      <Grid item>
        <Card
          title={"Total Sales"}
          value={"462"}
          description={
            "The totals of all DataSoft products in the current financial year"
          }
        />
      </Grid>
      <Grid item>
        <Card
          title={"Total Value"}
          value={"$25,732.53"}
          description={"The total sales of the current financial year"}
        />
      </Grid>
      <Grid item>
        <Card
          title={"Avg. Order Value"}
          value={"$159.30"}
          description={
            "The average order value for all sales this current financial year"
          }
        />
      </Grid>
      <Grid item>
        <Card
          title={"Conversion rate"}
          value={"0.61%"}
          description={"How many pitches become sales"}
        />
      </Grid>
    </Grid>
  );
};

export default Ribbon;
