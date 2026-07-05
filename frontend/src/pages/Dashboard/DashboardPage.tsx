import DashboardLayout from "../../components/layout/MainLayout";
import { Outlet } from "react-router-dom";

function DashboardPage() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

export default DashboardPage;