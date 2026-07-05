import { NavLink } from "react-router-dom";

type Props = {
  title: string;
  to: string;
};

function SidebarItem({ title, to }: Props) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block w-full rounded-lg px-4 py-3 text-left transition ${
          isActive
            ? "bg-blue-600 text-white"
            : "hover:bg-blue-100"
        }`
      }
    >
      {title}
    </NavLink>
  );
}

export default SidebarItem;