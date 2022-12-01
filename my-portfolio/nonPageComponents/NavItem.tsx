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
            ? "font-Roboto font-semibold text-customWhite flex flex-col py-4 justify-around text-center text-2xl hover:text-waterBlue hover:underline hover:underline-offset-8 hover:decoration-towerBlue"
            : "font-Roboto font-semibold text-customWhite text-2xl py-5 px-3 hover:underline hover:underline-offset-8 hover:text-waterBlue hover:decoration-towerBlue"
        }`}
        >
        {props.name}
        </Link>
  );
};

export default NavItem;
