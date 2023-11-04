"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";

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
  const [computedClassName, setComputedClassName] = useState(className);

  const newClassName =
    pathName === href ? `${className} ${activeClassName}`.trim() : className;

  if (newClassName !== computedClassName) {
    setComputedClassName(newClassName);
  }

  return (
    <Link className={computedClassName} {...props}>
      {children}
    </Link>
  );
}
