import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <aside className="w-72 border-r bg-white p-6">
      <h1 className="mb-8 text-2xl font-bold">
        CV Maker
      </h1>

      <div className="space-y-2">

        <SidebarItem
          title="👤 Personal Information"
          to="/dashboard/profile"
        />

        <SidebarItem
          title="💼 Experience"
          to="/dashboard/experience"
        />

        <SidebarItem
          title="🚀 Projects"
          to="/dashboard/projects"
        />

        <SidebarItem
          title="🛠 Skills"
          to="/dashboard/skills"
        />

        <SidebarItem
          title="🎓 Education"
          to="/dashboard/education"
        />

        <SidebarItem
          title="🏆 Certifications"
          to="/dashboard/certifications"
        />

        <hr className="my-5" />

        <SidebarItem
          title="🤖 Generate Resume"
          to="/dashboard/resume"
        />

        <SidebarItem
          title="⚙️ Settings"
          to="/dashboard/settings"
        />

      </div>
    </aside>
  );
}

export default Sidebar;