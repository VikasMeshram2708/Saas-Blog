import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./modToggle";

export default function Navbar() {
  return (
    <header className="w-full p-4 border-b shadow">
      <nav className="container mx-auto flex items-center justify-between">
        <h1 className="text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold">
          <Link href="/">vBlogs</Link>
        </h1>
        <div className="space-x-2">
          <Button>Login / Sign Up</Button>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
