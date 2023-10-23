"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type ActiveLinkProps = LinkProps & {
  activeClassName: string;
  className: string;
};

export default function ActiveLink({
  children,
  className,
  activeClassName,
  ...props
}: PropsWithChildren<ActiveLinkProps>) {
  const pathName = usePathname();
  const { href } = props;
  const isActive = pathName === href;

  return (
    <Link
      className={`${isActive ? activeClassName : ""} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
