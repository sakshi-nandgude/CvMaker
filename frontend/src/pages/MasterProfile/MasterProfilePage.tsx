import MainLayout from "../../components/layout/MainLayout";
import PageHeader from "../../components/common/PageHeader";

import PersonalProfileForm from "../../features/profile/components/PersonalProfileForm";
import ExperienceSection from "../../features/experience/components/ExperienceSection";

function MasterProfilePage() {
  return (
    <MainLayout>
      <PageHeader
        title="Master Profile"
        subtitle="Manage your professional information."
      />

      <PersonalProfileForm />
      <div className="mt-8">
    <ExperienceSection />
</div>
    </MainLayout>
  );
}

export default MasterProfilePage;