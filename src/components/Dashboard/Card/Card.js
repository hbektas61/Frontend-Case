import { Paper, Typography, Tooltip, IconButton } from "@mui/material";
import classes from "./Card.module.css";
import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Card = ({title,value,description}) => {  
  return (
    <Paper className={classes.dataCard}>
      <div className={classes.header}>
        <Typography fontSize={"h6"} color={"lightslategrey"}>
          {title}
        </Typography>
        <Tooltip
          title={
            <Typography fontSize={16}>
              {`${description} which is ${value}`}
            </Typography>
          }
        >
          <IconButton>
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </div>
      <Typography fontSize={"h4"}>{value}</Typography>
    </Paper>
  );
};

export default Card;
