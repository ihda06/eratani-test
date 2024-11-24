"use client";

import { forwardRef, InputHTMLAttributes, ReactNode, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import cn from "@/app/utils/clsx";
import Show from "@/components/utils/Show";

const inputVariants = cva(
  "w-0 min-w-[32px] grow overflow-hidden bg-white text-ellipsis whitespace-nowrap text-gray-900 outline-none placeholder:text-gray-400 disabled:cursor-not-allowed disabled:text-gray-600",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-md",
      },
      error: {
        true: null,
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
    },
  }
);

const inputWrapperVariants = cva(
  "relative flex flex-wrap bg-white items-center gap-2 rounded-lg border border-gray-300 transition-colors hover:border-gray-600",
  {
    variants: {
      focus: {
        true: "border-green-700/50 ring-2 border-2 ring-green-50 hover:border-green-700/50",
      },
      disabled: {
        true: "cursor-not-allowed border-gray-200 bg-gray-100 hover:border-gray-200",
      },
      error: {
        true: "border-red-500 hover:border-red-500",
      },
      size: {
        sm: "px-3 py-2",
        md: "px-3.5 py-2.5",
      },
    },
    compoundVariants: [
      {
        error: true,
        focus: true,
        className: "border-red-600 ring ring-red-100",
      },
      {
        error: true,
        focus: false,
        className: "border-red-500",
      },
    ],
    defaultVariants: {
      error: false,
      disabled: false,
      focus: false,
      size: "md",
    },
  }
);

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      disabled,
      error,
      size,
      startAdornment,
      endAdornment,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      autoComplete,
      type,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [focus, setFocus] = useState<boolean>(false);

    return (
      <div
        className={cn(inputWrapperVariants({ disabled, error, focus, size }))}
      >
        <Show when={!!startAdornment}>{startAdornment}</Show>
        <input
          type={type}
          autoComplete={"off"}
          className={cn(inputVariants({ size, className }))}
          disabled={disabled}
          onFocus={(event) => {
            setFocus(true);
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            onFocus && onFocus(event);
          }}
          onBlur={(event) => {
            setFocus(false);
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            onBlur && onBlur(event);
          }}
          ref={ref}
          {...props}
        />
        <Show when={!!endAdornment}>{endAdornment}</Show>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
