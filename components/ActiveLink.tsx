"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type ActiveLinkProps = LinkProps & {
  activeClassName: string;
};

export default function ActiveLink({
  children,
  activeClassName,
  ...props
}: PropsWithChildren<ActiveLinkProps>) {
  const pathName = usePathname();
  const { href } = props;
  const isActive = pathName === href;

  return (
    <Link className={`${isActive && activeClassName}`} {...props}>
      {children}
    </Link>
  );
}
