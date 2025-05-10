import { ModeToggle } from "../ThemeToggle";

export function HeaderWelcome() {
  return (
    <div className="mb-2 w-full flex flex-row items-center justify-end">
      <ModeToggle />
    </div>
  );
}
