import DashboardLayout from "../../layouts/DashboardLayout";
import { Outlet } from "react-router-dom";

function DashboardPage() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

export default DashboardPage;