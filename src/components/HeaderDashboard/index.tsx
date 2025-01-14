"use-client";

import { DatePickerComponent } from "../DatePicker";
import { MenubarDashboard } from "./MenuBarDashboard";

export function HeaderDashboardComponent() {
  return (
    <div className="flex flex-row justify-between">
      <MenubarDashboard />
      <DatePickerComponent />
    </div>
  );
}
