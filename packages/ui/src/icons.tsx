import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { PanelLeftIcon } from "lucide-react";

import { cn } from ".";

export type IconProps = Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>;
export type Icon = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

const icons = {
  panelLeft: PanelLeftIcon,
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      className={cn("animate-spin", props.className)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
} as const;

export type IconType = keyof typeof icons;

export const Icon = ({
  type,
  className,
}: {
  type: IconType;
  className?: string;
}) => {
  const IconComponent = icons[type];

  return <IconComponent className={className} />;
};
