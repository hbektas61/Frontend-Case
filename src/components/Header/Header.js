import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Menu from "../Menu/MenuItems";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useUser, UserButton } from "@clerk/nextjs";

const Header = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <AppBar position="static" sx={{ marginBottom: "40px" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {isLoaded && isSignedIn && (
            <>
              <Menu />
              <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <Typography variant="body1">{`${user.username}`}</Typography>
                <UserButton afterSignOutUrl="/" />
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
