import React from "react";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { DiamondColsDefs, DiamondData } from "../assets/DiamondData";
import "ag-grid-enterprise";
import { useTheme } from "@mui/material";
import Header from "../components/Header";

const DiamondGrid = () => {
  const theme = useTheme();

  return (
    <>
      <Header title="DIAMOND DATA" />
      <div
        className={
          theme.palette.mode === "light"
            ? "ag-theme-quartz"
            : "ag-theme-quartz-dark"
        }
        style={{ height: 500 }}
      >
        <AgGridReact
          rowData={DiamondData}
          columnDefs={DiamondColsDefs}
          rowSelection={"multiple"}
          rowMultiSelectWithClick={true}
          rowDragManaged={true}
        />
      </div>
    </>
  );
};

export default DiamondGrid;
