import { useEffect, useState } from "react";

import type {
  PersonalProfile,
} from "../types/resume";

import {
  getProfile,
  saveProfile,
} from "../services/profileApi";

const emptyProfile: PersonalProfile = {
  fullName: "",
  title: "",
  email: "",
  phone: "",
  location: "",
  linkedin: "",
  portfolio: "",
  summary: "",
};

export function useProfile() {

  const [profile, setProfile] =
    useState<PersonalProfile>(emptyProfile);

  const [loading, setLoading] =
    useState(true);

  async function loadProfile() {

    try {

      const data = await getProfile();

      setProfile({
        fullName: data.fullName,
        title: data.title,
        email: data.email,
        phone: data.phone,
        location: data.location,
        linkedin: data.linkedin,
        portfolio: data.portfolio,
        summary: data.summary,
      });

    } catch {

      console.log("No profile found.");

    } finally {

      setLoading(false);

    }

  }

  async function handleSave() {

    await saveProfile(profile);

    alert("Profile Saved!");

  }

  useEffect(() => {
    loadProfile();
  }, []);

  return {
    profile,
    setProfile,
    loading,
    handleSave,
  };

}