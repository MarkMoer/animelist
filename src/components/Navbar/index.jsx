import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex flex-col justify-between p-4 gap-2 md:flex-row md:items-center">
        <Link href="/" className="font-bold text-white text-2xl">
          Anime List
        </Link>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
};
export default Navbar;
