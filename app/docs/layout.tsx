import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function DocsLayout({ children }: Props) {
  return <>{children}</>;
}
