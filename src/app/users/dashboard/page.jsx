import { authUserSession } from "@/components/libs/auth-libs";
import { redirect } from "next/navigation";
import Image from "next/image";
const Page = async () => {
  const user = await authUserSession();
  return !user ? (
    redirect("/")
  ) : (
    <div className="text-color-primary">
      <h3>Dashboard</h3>
      <h3>Welcome, {user?.name}</h3>
      <Image src={user?.image} alt="..." width={250} height={250} />
    </div>
  );
};

export default Page;
