import { useEffect } from "react";

export default function useClickAway(
  ref: React.RefObject<HTMLElement>,
  handler: (event: PointerEvent) => void
) {
  useEffect(() => {
    const listener = (event: PointerEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("pointerdown", listener);
    return () => {
      document.removeEventListener("pointerdown", listener);
    };
  }, [ref, handler]);
}
