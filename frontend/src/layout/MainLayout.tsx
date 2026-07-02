import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-7xl p-8">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;