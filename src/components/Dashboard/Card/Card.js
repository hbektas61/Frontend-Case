import { Paper, Typography, Tooltip, IconButton, Box } from "@mui/material";
import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Card = ({ title, value, description }) => {
  return (
    <Paper
      sx={{
        position: 'relative',
        top: '1rem',
        textAlign:'center',
        height: '100%',
        width: 'calc(100% - 0.1rem)',
        padding: '1rem 0.5rem',
        '& p': {
          padding: '0.5rem 1rem',
          margin: 0,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          '& button, & p': {
            padding: '0.25rem',
          },
        }}
      >
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
      </Box>
      <Typography fontSize={"h4"}>{value}</Typography>
    </Paper>
  );
};

export default Card;
