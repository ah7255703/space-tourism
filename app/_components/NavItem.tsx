"use client";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import Link from "next/link";
import cn from "../_utils/cn";

export default function NavItem({
  number,
  children,
  className,
  ...props
}: ComponentProps<typeof Link> & { number: string }) {
  const pathname = usePathname()
  const active = props.href === pathname ;
  
  return (
    <li className={cn("after:-bottom-9 px-2 after:w-full after:rounded-2xl after:h-0 after:transition-all after:bg-white after:left-0 after:absolute relative",active ? "after:h-[2px]" : "hover:after:h-[2px]" )}>
      <Link {...props} className={cn("",className)}>
        <div className="flex items-center gap-2">
          <span className="text-white">{number}</span>
          <span className="font-barlow_condensed text-base uppercase text-secondary tracking-[2.7px]">
            {children}
          </span>
        </div>
      </Link>
    </li>
  );
}
