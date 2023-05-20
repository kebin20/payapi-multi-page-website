import React, { ReactNode } from "react";

function NavigationItem({
  onClick,
  href,
  children,
}: {
  onClick: () => void;
  href: string;
  children: ReactNode;
}) {
  return (
    <li className="first:border-t border-white/10 first:pt-8  w-4/5 text-center text-white opacity-60 font-bold">
      <a onClick={onClick} href={href}>
        {children}
      </a>
    </li>
  );
}

export default NavigationItem;
