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
            ? "font-Roboto text-customWhite flex flex-col py-4 justify-around text-center text-2xl hover:underline hover:underline-offset-8 hover:decoration-customOrange"
            : "font-Roboto text-customBlack py-5 px-3 hover:underline hover:underline-offset-8 hover:decoration-customOrange"
        }`}
        >
        {props.name}
        </Link>
  );
};

export default NavItem;
