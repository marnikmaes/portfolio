import Link from "next/link";

type MyProps = {
  name: string;
  href: string;
  mobile?: boolean;
};

const NavItem = (props: MyProps) => {
  return (
    <Link
        href={props.href}
        passHref
        className={`${
            props.mobile
            ? "font-Roboto flex flex-col py-4 justify-around text-center text-2xl hover:underline hover:underline-offset-8 hover:decoration"
            : "font-Roboto py-5 px-3 hover:underline hover:underline-offset-8 hover:decoration"
        }`}
        >
        {props.name}
        </Link>
  );
};

export default NavItem;
