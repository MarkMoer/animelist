import { authUserSession } from "@/components/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();
  return (
    <div className="text-color-primary flex flex-col justify-center items-center mt-8">
      <h3 className="text-2xl font-bold mb-4">Welcome, {user?.name}</h3>
      <Image
        className="inline object-cover rounded-full w-32 h-32 border-4 border-color-accent"
        src={user?.image}
        alt="..."
        width={250}
        height={250}
      />
      <div className="flex flex-wrap gap-4 py-8">
        <Link
          href="/users/dashboard/collection"
          className="bg-color-accent text-color-dark font-bold px-4 py-4 text-xl rounded-lg hover:underline hover:transition-all"
        >
          My Collection
        </Link>
        <Link
          href="/users/dashboard/comment"
          className="bg-color-accent text-color-dark font-bold px-4 py-4 text-xl rounded-lg hover:underline hover:transition-all"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default Page;
