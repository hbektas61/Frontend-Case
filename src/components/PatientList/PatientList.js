import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "age", headerName: "Age", type: "number", width: 150 },
  { field: "gender", headerName: "Gender", width: 150 },
];

const PatientList = ({ patients }) => {
  const [filterModel, setFilterModel] = useState({
    items: [],
    quickFilterExcludeHiddenColumns: true,
    quickFilterValues: [],
  });

  const [columnVisibilityModel, setColumnVisibilityModel] = useState({});

  const router = useRouter();

  const redirectToPatientDetails = (event) => {
    const { id } = event.row;
    router.push(`/${id}`);
  };

  return (
    <Box sx={{ width: 1 }} marginBottom={2}>
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
          onRowClick={redirectToPatientDetails}
        />
      </Box>
    </Box>
  );
};

export default PatientList;
