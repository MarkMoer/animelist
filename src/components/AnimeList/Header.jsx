import Link from "next/link";
const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-4 flex justify-between item-center text-color-primary">
      <h1 className="text-md md:text-xl font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="text-md md:text-xl underline hover:text-color-accent transition-all font-medium"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};
export default Header;
