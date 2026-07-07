import PageHeader from "../../components/common/PageHeader";
import PersonalProfileForm from "../../features/profile/components/PersonalProfileForm";

function MasterProfilePage() {
  return (
    <>
      <PageHeader
        title="Master Profile"
        subtitle="Manage your professional information."
      />

      <PersonalProfileForm />
    </>
  );
}

export default MasterProfilePage;