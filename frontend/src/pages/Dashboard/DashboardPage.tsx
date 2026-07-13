import { Outlet } from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";

function DashboardPage() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

export default DashboardPage;