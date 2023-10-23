import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import PatientSearch from "../PatientSearch/PatientSearch";

const Header = () => {
  return (
    <AppBar position="static" sx={{ marginBottom: "40px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         <PatientSearch/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
