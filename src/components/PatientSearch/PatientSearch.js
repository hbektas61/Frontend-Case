import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/system";


const PatientSearch = () => {
    const [searchValue, setSearchValue] = React.useState("");
    const theme = useTheme();

    const handleSearch = async (query) => {
        try {
            const response = await fetch(`/api/get?name=${query}`);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Arama sırasında bir hata oluştu:", error);
        }
    };

    return (
        <Box sx={{ flexGrow: 1, position: 'relative', marginLeft: 'auto', marginRight: 2 }}>
        <SearchIcon sx={{
          position: 'absolute',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          color: theme.palette.text.secondary,
          zIndex: 1,
          fontSize:'2em'
        }} />
        <InputBase
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => {
              if (e.key === "Enter") {
                  handleSearch(searchValue);
              }
          }}
          sx={{
            color: 'black',
            pl: '30px',
            transition: theme.transitions.create('width'),
            width: '100%',
            backgroundColor: theme.palette.common.white, 
            borderRadius: theme.shape.borderRadius,      
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', 
            [theme.breakpoints.up('sm')]: {
              width: '40ch',
              '&:focus': {
                width: '50ch',
              },
            },
          }}
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Box>
    )
}

export default PatientSearch;