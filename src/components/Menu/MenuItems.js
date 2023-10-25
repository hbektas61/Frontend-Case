import React, { useEffect, useRef } from "react";
import { useSearch } from "@/hooks/useSearch";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import NextLink from "next/link";
import classes from "./FixedSiderBarItems.module.css";
import HomeIcon from "@mui/icons-material/Home";
import {
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const PatientMenu = () => {
  const {
    searchValue,
    setSearchValue,
    searchResults,
    handleSearchInputChange,
    fetchSearchResultsDebounced,
  } = useSearch();

  const theme = useTheme();
  const router = useRouter();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSearchValue("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setSearchValue]);

  const handleSearch = async (query) => {
    if (query.trim() === "") return;

    try {
      router.push(`/search/${query}`);
      setSearchValue("");
    } catch (error) {
      console.error("Arama sırasında bir hata oluştu:", error);
    }
  };

  const handleResultClick = (id) => {
    router.push(`/${id}`);
    setSearchValue("");
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
          onChange={(e) => {
            setSearchValue(e.target.value);
            fetchSearchResultsDebounced(e.target.value);
          }}
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
              width: "50ch",
              "&:focus": {
                width: "50ch",
              },
            },
          }}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        {searchValue.trim() !== "" && (
          <Box
            ref={wrapperRef}
            sx={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "white",
              borderRadius: "4px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              zIndex: 1000,
              mt: 1,
              maxHeight: "200px",
              overflowY: "auto",
            }}
          >
            {searchResults.map((result, index) => (
              <div
                key={index}
                style={{ padding: "8px", cursor: "pointer", color: "black" }}
                onClick={() => handleResultClick(result.id)}
              >
                {result.name}
              </div>
            ))}
          </Box>
        )}
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
          <HomeIcon style={{ color: theme.palette.common.white }} key={0} />
          <ListItemText
            primary={isMobileView ? "" : "Home"}
            sx={{
              color: theme.palette.common.white,
              opacity: 1,
            }}
          />
        </ListItemButton>
      </NextLink>
    </>
  );
};

export default PatientMenu;
