import { ReactNode } from "react";
import { AppSidebar } from "../Sidebar";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-row max-h-screen max-w-screen">
      <AppSidebar />
      <div className="flex-1 p-4 max-w-[95vw]">{children}</div>
    </div>
  );
}
