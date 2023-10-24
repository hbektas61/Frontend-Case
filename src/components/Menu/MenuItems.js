import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Person2Icon from "@mui/icons-material/Person2";
import NextLink from "next/link";
import classes from "./FixedSiderBarItems.module.css";
import HomeIcon from "@mui/icons-material/Home";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const PatientMenu = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const theme = useTheme();
  const router = useRouter();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm")); // Adjust the breakpoint as needed

  const handleSearch = async (query) => {
    try {
      router.push(`/search/${query}`);
    } catch (error) {
      console.error("Arama sırasında bir hata oluştu:", error);
    }
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          position: "relative",
          marginLeft: "auto",
          marginRight: 2,
        }}
      >
        <SearchIcon
          sx={{
            position: "absolute",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 1,
            color: theme.palette.text.secondary,
            zIndex: 1,
            fontSize: "2em",
          }}
        />
        <InputBase
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(searchValue);
            }
          }}
          sx={{
            color: "black",
            pl: "30px",
            transition: theme.transitions.create("width"),
            width: "100%",
            backgroundColor: theme.palette.common.white,
            borderRadius: theme.shape.borderRadius,
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            [theme.breakpoints.up("sm")]: {
              width: "40ch",
              "&:focus": {
                width: "50ch",
              },
            },
          }}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Box>
      <NextLink className={classes.link} href="/">
        <ListItemButton
          onClick={() => {}}
          title={isMobileView ? "" : "Home"}
          aria-label={isMobileView ? "" : "Home"}
          sx={{
            minHeight: 48,
            justifyContent: "initial",
            px: 2.5,
          }}
        >
          <HomeIcon key={0} />
          <ListItemText
            primary={isMobileView ? "" : "Home"}
            sx={{
              color: theme.palette.text.primary,
              opacity: 1,
            }}
          />{" "}
        </ListItemButton>
      </NextLink>
    </>
  );
};

export default PatientMenu;
