import { ReactNode } from "react";
import { AppSidebar } from "../Sidebar";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}
