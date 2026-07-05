type Props = {
  title: string;
};

function SidebarItem({ title }: Props) {
  return (
    <button
      className="w-full rounded-lg px-4 py-3 text-left transition hover:bg-blue-100"
    >
      {title}
    </button>
  );
}

export default SidebarItem;