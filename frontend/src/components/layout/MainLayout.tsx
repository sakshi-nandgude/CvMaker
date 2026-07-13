import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <main className="min-h-screen bg-gray-100">
      {children}
    </main>
  );
}

export default MainLayout;