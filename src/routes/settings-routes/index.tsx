import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import {
  General,
  Analytics,
  Billing,
  Notifications,
  Security,
} from "../../containers";
import { Drawer, SettingHeader } from "../../components";

const SettingRoutes: React.FC = () => {
  const drawerRef: any = useRef(null);

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer ref={drawerRef} />
      <Box sx={{ flex: 1 }}>
        <SettingHeader onClick={() => drawerRef.current.handleDrawerToggle()} />
        <Routes>
          <Route index path="/" element={<General />} />
          <Route index path="/security" element={<Security />} />
          <Route index path="/notifications" element={<Notifications />} />
          <Route index path="/billing" element={<Billing />} />
          <Route index path="/analytics" element={<Analytics />} />
        </Routes>
      </Box>
    </Box>
  );
};
export default SettingRoutes;
