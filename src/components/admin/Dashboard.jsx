import React from "react";
import { styles } from "../../styles";
import AdminNaV from "./AdminNaV";

function Dashboard() {
  return (
    <React.Fragment>
      <AdminNaV />
      <div
        className={`${styles.paddingWithoutY} max-w-7xl mx-auto relative z-0 mt-16`}
      >
        Dashboard
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
