import { ButtonHTMLAttributes, forwardRef, ReactElement } from "react";
import { cva, VariantProps } from "class-variance-authority";
import cn from "@/app/utils/clsx";
import Show from "../utils/Show";

const buttonVariants = cva(
  [
    "focus-visible:outline-none duration-300 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2",
    "inline-flex min-w-[9rem] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md tracking-tight transition-colors disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        filled: "",
        outline: "border bg-white disabled:border-primary-400 ",
        text: "",
      },
      size: {
        sm: "px-5 py-2 text-sm",
        md: "px-6 py-2.5 text-base",
      },
      color: {
        green: "text-white",
        gray: "text-gray-700",
        red: "text-red-700",
      },
    },
    compoundVariants: [
      {
        color: "green",
        variant: "filled",
        className: "bg-primary-500 hover:bg-primary-700",
      },
      {
        color: "green",
        variant: "outline",
        className: "border-primary-900",
      },
      {
        color: "green",
        variant: ["outline", "text"],
        className: "hover:bg-primary-600",
      },
      {
        color: "gray",
        variant: "filled",
        className: "bg-gray-100 hover:bg-gray-200",
      },
      {
        color: "gray",
        variant: "outline",
        className: "border-gray-500",
      },
      {
        color: "gray",
        variant: ["outline", "text"],
        className: "hover:bg-gray-100",
      },
      {
        color: "red",
        variant: "filled",
        className: "bg-red-100 hover:bg-red-200",
      },
      {
        color: "red",
        variant: "outline",
        className: "border-red-500",
      },
      {
        color: "red",
        variant: ["outline", "text"],
        className: "hover:bg-red-100",
      },
    ],
    defaultVariants: {
      variant: "filled",
      size: "sm",
      color: "green",
    },
  }
);

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  icon?: ReactElement;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      disabled,
      isLoading = false,
      icon,
      className,
      variant,
      size,
      color,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, color, className }), {
          "disabled:bg-gray-100 disabled:text-gray-400": disabled,
        })}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        <Show
          when={!isLoading}
          fallback={
            <div className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-solid border-gray-500 border-t-transparent" />
          }
        >
          {icon}
        </Show>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
