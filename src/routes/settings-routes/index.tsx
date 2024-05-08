import React from "react";
import { Route, Routes } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { General } from "../../containers";
const SettingRoutes: React.FC = () => {
  return (
    <div className="setting-route-container">
      <Sidebar
        style={{
          height: "100vh",
          backgroundColor: "#F5F9FF",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            alt="profileImage"
            style={{
              objectFit: "fill",
              height: "55px",
              width: "55px",
              borderRadius: "17px",
            }}
          />
          <div>
            <h1>Ildiko Gaspar</h1>
            <h6>@igaspar</h6>
          </div>
        </div>
        <Menu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
      <Routes>
        <Route index path="/" element={<General />} />
      </Routes>
    </div>
  );
};
export default SettingRoutes;
