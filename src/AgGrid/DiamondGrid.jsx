import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { DiamondColsDefs, DiamondData } from "../assets/DiamondData";
import "ag-grid-enterprise";
import { useTheme } from "@mui/material";

const DiamondGrid = () => {
  const [rowData, setRowData] = useState(DiamondData);
  const theme = useTheme();

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState(DiamondColsDefs);
  return (
    <>
      <div
        className={
          theme.palette.mode === "light"
            ? "ag-theme-quartz"
            : "ag-theme-quartz-dark"
        }
        style={{ height: 500 }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          rowSelection={"multiple"}
          rowMultiSelectWithClick={true}
          rowDragManaged={true}
        />
      </div>
    </>
  );
};

export default DiamondGrid;