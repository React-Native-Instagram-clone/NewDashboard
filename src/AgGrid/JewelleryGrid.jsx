import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import "ag-grid-enterprise";
import { JwelleryColsDefs, JwelleryData } from "../assets/JewelleryData";
import { useTheme } from "@mui/material";

const JewelleryGrid = () => {
  const [rowData, setRowData] = useState(JwelleryData);
  const [colDefs, setColDefs] = useState(JwelleryColsDefs);
  const theme = useTheme();

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

export default JewelleryGrid;