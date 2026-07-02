import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Card({ children }: Props) {
  return (
    <div className="rounded-xl bg-white p-8 shadow-md">
      {children}
    </div>
  );
}

export default Card;