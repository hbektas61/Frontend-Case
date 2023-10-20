import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number' , width: 180},
  { field: 'gender', headerName: 'Gender', width: 80 },
];

export default function PatientList({patients}) {
  const [filterModel, setFilterModel] = React.useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [],
  });

  const [columnVisibilityModel, setColumnVisibilityModel] = React.useState({});

  return (
    <Box sx={{ width: 1 }}>
      <Box sx={{ height: 400 }}>
        <DataGrid
          columns={columns}
          rows={patients}
          disableColumnFilter
          disableDensitySelector
          slots={{ toolbar: GridToolbar }}
          filterModel={filterModel}
          onFilterModelChange={(newModel) => setFilterModel(newModel)}
          slotProps={{ toolbar: { showQuickFilter: true } }}
          columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityModelChange={(newModel) =>
            setColumnVisibilityModel(newModel)
          }
        />
      </Box>
    </Box>
  );
}