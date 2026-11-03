import type { ReactNode } from "react";
export function PageCanvas({
  children,
  ...props
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return <main {...props}>{children}</main>;
}
