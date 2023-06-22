import cn from "@/app/_utils/cn";
import React, { forwardRef, HTMLAttributes } from "react";

export const H1 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, _ref) => (
  <h1 className={cn("whitespace-nowrap font-bellefair leading-none text-[9.4rem] uppercase text-white", className)} {...props}>
    {children}
  </h1>
));

H1.displayName = "Heading1";

export const H2 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, _ref) => (
  <h2 className={cn("whitespace-nowrap text-white font-bellefair uppercase leading-none text-8xl", className)} {...props}>
    {children}
  </h2>
));

H2.displayName = "Heading2";

export const H3 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, _ref) => (
  <h3 className={cn("whitespace-nowrap text-white font-bellefair uppercase text-6xl !leading-none", className)} {...props}>
    {children}
  </h3>
));

H3.displayName = "Heading3";

export const H4 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, _ref) => (
  <h4 className={cn("whitespace-nowrap text-secondary font-bellefair uppercase leading-none text-3xl", className)} {...props}>
    {children}
  </h4>
));

H4.displayName = "Heading4";

export const H5 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, _ref) => (
  <h5 className={cn("font-barlow_condensed leading-none text-2xl tracking-[4.75px] text-secondary whitespace-nowrap", className)} {...props}>
    {children}
  </h5>
));

H5.displayName = "Heading5";

export const H6 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, _ref) => (
  <h6 className={cn("", className)} {...props}>
    {children}
  </h6>
));

H6.displayName = "Heading6";
