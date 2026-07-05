import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <aside className="w-72 border-r bg-white p-6">

      <h1 className="mb-8 text-2xl font-bold">
        CV Maker
      </h1>

      <div className="space-y-2">

        <SidebarItem title="👤 Personal Information" />

        <SidebarItem title="💼 Experience" />

        <SidebarItem title="🚀 Projects" />

        <SidebarItem title="🛠 Skills" />

        <SidebarItem title="🎓 Education" />

        <SidebarItem title="🏆 Certifications" />

        <hr className="my-5" />

        <SidebarItem title="🤖 Generate Resume" />

        <SidebarItem title="⚙️ Settings" />

      </div>

    </aside>
  );
}

export default Sidebar;