import React from "react";
import { styles } from "../../styles";
import AdminNaV from "./AdminNaV";
import { Outlet } from "react-router-dom";

function CommonDashboard() {
  return (
    <React.Fragment>
      <AdminNaV />
      <div
        className={`${styles.paddingWithoutY} max-w-7xl mx-auto relative z-0 mt-16`}
      >
        <Outlet />
      </div>
    </React.Fragment>
  );
}

export default CommonDashboard;
