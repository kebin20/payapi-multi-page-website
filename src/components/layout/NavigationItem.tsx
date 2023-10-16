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
      className={`w-4/5 text-center text-white opacity-60 font-bold ${className}`}
    >
      <Link onClick={onClick} href={href}>
        {children}
      </Link>
    </li>
  );
}

export default NavigationItem;
