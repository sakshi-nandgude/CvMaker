import type { PersonalProfile } from "../../../types/resume";

interface Props {
  profile: PersonalProfile;
}

function ResumeHeader({ profile }: Props) {
  return (
    <div className="border-b pb-6 text-center">
      <h1 className="text-4xl font-bold">
        {profile.fullName}
      </h1>

      <p className="mt-2 text-lg">
        {profile.title}
      </p>

      <p className="mt-2 text-sm text-gray-600">
        {profile.email} | {profile.phone}
      </p>

      <p className="text-sm text-gray-600">
        {profile.location}
      </p>

      <p className="text-sm text-blue-600">
        {profile.linkedin}
      </p>
    </div>
  );
}

export default ResumeHeader;