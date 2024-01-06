import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "ag-grid-enterprise";
import { JwelleryColsDefs, JwelleryData } from "../assets/JewelleryData";
import { useTheme } from "@mui/material";
import Header from "../components/Header";

const JewelleryGrid = () => {
  const theme = useTheme();

  return (
    <>
      <Header title="JEWELLERY DATA" />
      <div
        className={
          theme.palette.mode === "light"
            ? "ag-theme-quartz"
            : "ag-theme-quartz-dark"
        }
        style={{ height: 500 }}
      >
        <AgGridReact
          rowData={JwelleryData}
          columnDefs={JwelleryColsDefs}
          rowSelection={"multiple"}
          rowMultiSelectWithClick={true}
          rowDragManaged={true}
        />
      </div>
    </>
  );
};

export default JewelleryGrid;
