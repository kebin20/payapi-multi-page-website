import Link from "next/link";
import React, { ReactNode } from "react";

function NavigationItem({
  onClick,
  href,
  children,
  className,
}: {
  onClick?: () => void;
  href: string;
  children: ReactNode;
  className: string;
}) {
  return (
    <li
      className={`text-center text-white opacity-60 font-bold ${className} md:w-4/5 `}
    >
      <Link onClick={onClick} href={href}>
        {children}
      </Link>
    </li>
  );
}

export default NavigationItem;
