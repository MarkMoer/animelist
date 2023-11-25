import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Dashboard/Header";

const Page = () => {
  return (
    <section className="mt-6 w-full px-4">
      <Header title={"My Collection"} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/" className=" relative border-2 border-color-accent">
          <Image
            className="inline object-cover w-full"
            src=""
            alt=""
            width={350}
            height={350}
          />
          <div className=" absolute flex items-center justify-center w-full bg-color-accent h-16 bottom-0 ">
            <h5 className="text-xl text-color-primary font-medium">
              Judul Anime
            </h5>
          </div>
        </Link>
        <Link href="/" className=" relative border-2 border-color-accent">
          <Image
            className="inline object-cover w-full"
            src=""
            alt=""
            width={350}
            height={350}
          />
          <div className=" absolute flex items-center justify-center w-full bg-color-accent h-16 bottom-0 ">
            <h5 className="text-xl text-color-primary font-medium">
              Judul Anime
            </h5>
          </div>
        </Link>
        <Link href="/" className=" relative border-2 border-color-accent">
          <Image
            className="inline object-cover w-full"
            src=""
            alt=""
            width={350}
            height={350}
          />
          <div className=" absolute flex items-center justify-center w-full bg-color-accent h-16 bottom-0 ">
            <h5 className="text-xl text-color-primary font-medium">
              Judul Anime
            </h5>
          </div>
        </Link>
        <Link href="/" className=" relative border-2 border-color-accent">
          <Image
            className="inline object-cover w-full"
            src=""
            alt=""
            width={350}
            height={350}
          />
          <div className=" absolute flex items-center justify-center w-full bg-color-accent h-16 bottom-0 ">
            <h5 className="text-xl text-color-primary font-medium">
              Judul Anime
            </h5>
          </div>
        </Link>
      </div>
    </section>
  );
};
export default Page;
