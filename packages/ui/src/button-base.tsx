import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from ".";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-[#cfd4dc] bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "border border-[#86c9ed] bg-secondary text-center text-secondary-foreground shadow-sm hover:bg-primary hover:text-primary-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 rounded-md px-3 text-xs",
        md: "h-9 px-4 py-2",
        lg: "h-10 rounded-lg px-3.5 py-2.5",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      disabled,
      children,
      type = "button",
      isLoading = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    const buttonProps = {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      disabled: isLoading || disabled,
      type,
      ...props,
    };

    return <Comp {...buttonProps}>{children}</Comp>;
  },
);
ButtonBase.displayName = "ButtonBase";

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export { ButtonBase, buttonVariants, type ButtonBaseProps };
