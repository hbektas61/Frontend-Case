import { useRouter } from 'next/router';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 150},
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number' , width: 150},
  { field: 'gender', headerName: 'Gender', width: 150 },
];

const PatientList = (props) => {
  const [filterModel, setFilterModel] = React.useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [],
  });

  const [columnVisibilityModel, setColumnVisibilityModel] = React.useState({});

  const router = useRouter();
  
  const redirectToPatientDetails = (event) => {
    const id = event.row.id;

    router.push(`/${id}`);
  }

  return (
    <Box sx={{ width: 1 }} marginBottom={2}>
      <Box sx={{ height: 400 }}>
        <DataGrid
          columns={columns}
          rows={props.patients}
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
          onRowClick={redirectToPatientDetails}
        />
      </Box>
    </Box>
  );
}

export default PatientList;