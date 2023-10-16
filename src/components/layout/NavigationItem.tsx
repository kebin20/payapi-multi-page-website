import Link from "next/link";
import React, { ReactNode } from "react";

function NavigationItem({
  onClick,
  href,
  children,
}: {
  onClick?: () => void;
  href: string;
  children: ReactNode;
}) {
  return (
    <li className="  w-4/5 text-center text-white opacity-60 font-bold md:text-blue">
      <Link onClick={onClick} href={href}>
        {children}
      </Link>
    </li>
  );
}

export default NavigationItem;
