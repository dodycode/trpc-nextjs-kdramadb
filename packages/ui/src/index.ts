import { cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export { useIsMobile } from "./hooks/use-mobile";
export { useMediaQuery } from "./hooks/use-media-query";

const cn = (...inputs: Parameters<typeof cx>) => twMerge(cx(inputs));

export { cn };
