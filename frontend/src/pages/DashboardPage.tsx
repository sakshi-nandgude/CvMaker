import DashboardLayout from "../layouts/DashboardLayout";

function DashboardPage() {
  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold">
        Welcome to CV Maker
      </h1>

      <p className="mt-3 text-gray-500">
        Select a section from the sidebar.
      </p>

    </DashboardLayout>
  );
}

export default DashboardPage;