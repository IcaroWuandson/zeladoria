import { ReactNode } from "react";
import { AppSidebar } from "../Sidebar";
import { HeaderWelcome } from "../HeaderWelcome";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-row max-h-screen max-w-screen">
      <AppSidebar />
      <div className="flex-1 p-1 max-w-[95vw] flex-col">
         <HeaderWelcome />
        {children}
        </div>
    </div>
  );
}
