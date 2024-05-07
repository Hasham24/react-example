import React from "react";
import { Route, Routes } from "react-router-dom";
import { General } from "../../containers";
const SettingRoutes: React.FC = () => {
  return (
    <div className="setting-route-container">
      <span>asdj</span>
      <Routes>
        <Route path="/general" element={<General />} />
      </Routes>
    </div>
  );
};
export default SettingRoutes;
