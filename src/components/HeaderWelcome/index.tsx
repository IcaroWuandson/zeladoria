import { ModeToggle } from "../ThemeToggle";

export function HeaderWelcome() {
  return (
    <div className="mb-4 w-full flex flex-row items-center justify-between">
      <p className="font-bold text-2xl">Seja Bem-Vindo(a)!</p>

      <ModeToggle />
    </div>
  );
}
