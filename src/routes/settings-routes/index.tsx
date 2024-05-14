import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { General } from "../../containers";
import { Drawer, ToolBar } from "../../components";

export default function ResponsiveDrawer() {
  const drawerRef: any = useRef(null);

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer ref={drawerRef} />
      <Box sx={{ width: "100%" }}>
        <ToolBar onClick={() => drawerRef.current.handleDrawerToggle()} />
        <Routes>
          <Route index path="/" element={<General />} />
        </Routes>
      </Box>
    </Box>
  );
}
