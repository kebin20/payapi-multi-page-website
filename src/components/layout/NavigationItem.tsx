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
    <li>
      <a onClick={onClick} href={href}>
        {children}
      </a>
    </li>
  );
}

export default NavigationItem;
