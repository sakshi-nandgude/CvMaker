import { useEffect, useState } from "react";

import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import SectionCard from "../../../components/common/SectionCard";
import TextArea from "../../../components/common/TextArea";

import { useProfile } from "../hooks/useProfile";

import type { PersonalProfile } from "../../../types/resume";

function PersonalProfileForm() {
  const { data, isLoading } = useProfile();

  const [profile, setProfile] = useState<PersonalProfile>({
    fullName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    portfolio: "",
    summary: "",
  });

  useEffect(() => {
  if (data) {
    setProfile({
      fullName: (data as any).full_name,
      title: data.title,
      email: data.email,
      phone: data.phone,
      location: data.location,
      linkedin: data.linkedin,
      portfolio: data.portfolio,
      summary: data.summary,
    });
  }
}, [data]);

  const updateField = (
    field: keyof PersonalProfile,
    value: string
  ) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (isLoading) {
    return <p>Loading profile...</p>;
  }

  return (
    <SectionCard
      title="Personal Information"
      description="Manage your personal information."
    >
      <div className="space-y-5">
        <Input
          label="Full Name"
          value={profile.fullName}
          onChange={(value) => updateField("fullName", value)}
        />

        <Input
          label="Professional Title"
          value={profile.title}
          onChange={(value) => updateField("title", value)}
        />

        <Input
          label="Email"
          value={profile.email}
          onChange={(value) => updateField("email", value)}
        />

        <Input
          label="Phone"
          value={profile.phone}
          onChange={(value) => updateField("phone", value)}
        />

        <Input
          label="Location"
          value={profile.location}
          onChange={(value) => updateField("location", value)}
        />

        <Input
          label="LinkedIn"
          value={profile.linkedin}
          onChange={(value) => updateField("linkedin", value)}
        />

        <Input
          label="Portfolio"
          value={profile.portfolio}
          onChange={(value) => updateField("portfolio", value)}
        />

        <TextArea
          label="Professional Summary"
          value={profile.summary}
          onChange={(value) => updateField("summary", value)}
        />

        <Button
          text="Save Profile"
        />
      </div>
    </SectionCard>
  );
}

export default PersonalProfileForm;