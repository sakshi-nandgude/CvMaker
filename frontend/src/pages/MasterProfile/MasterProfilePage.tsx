import MainLayout from "../../layout/MainLayout";
import PageHeader from "../../components/common/PageHeader";

import PersonalProfileForm from "../../features/profile/components/PersonalProfileForm";

function MasterProfilePage() {
  return (
    <MainLayout>
      <PageHeader
        title="Master Profile"
        subtitle="Manage your professional information."
      />

      <PersonalProfileForm />
    </MainLayout>
  );
}

export default MasterProfilePage;