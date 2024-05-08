import React from "react";
// import { Route } from "react-router-dom";
import { Auth, Settings } from "./routes";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
const App: React.FC = () => {
  const isUserLoggedInString =
    localStorage.getItem("isUserLoggedIn") || "false";
  const isUserLoggedIn = JSON.parse(isUserLoggedInString) || false;
  console.log(isUserLoggedIn);
  return (
    <>
      {/* <Auth /> */}
      <Settings />
      {/* : <Auth />} */}
      {/* Add a catch-all route for unmatched paths */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </>
  );
};

export default App;
