import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import { DisplayText } from "./display-text";

/** Preserve semantic markup and links while giving prose the display reveal. */
export function AnimatedCopy({ children }: { children: ReactNode }) {
  return Children.map(children, (child): ReactNode => {
    if (typeof child === "string" || typeof child === "number") {
      const text = String(child);
      const trimmed = text.trim();
      if (!trimmed) return text;
      return (
        <>
          {text.match(/^\s*/)?.[0]}
          <DisplayText text={trimmed} />
          {text.match(/\s*$/)?.[0]}
        </>
      );
    }
    if (!isValidElement<{ children?: ReactNode; className?: string }>(child))
      return child;
    if (
      child.type === DisplayText ||
      child.type === AnimatedCopy ||
      child.props.className?.includes("sr-only")
    )
      return child;
    if (child.props.children === undefined) return child;
    return cloneElement(
      child,
      {},
      <AnimatedCopy>{child.props.children}</AnimatedCopy>,
    );
  });
}
