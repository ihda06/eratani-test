import { forwardRef, TextareaHTMLAttributes, useId, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { TextFieldWrapper, TextFieldWrapperProps } from "./wrapper";
import cn from "@/app/utils/clsx";

const textareaVariants = cva(
  [
    "rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 tracking-tight text-gray-900 outline-none transition-colors placeholder:text-gray-400 hover:border-gray-600",
    "disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-600 disabled:hover:border-gray-200",
  ],
  {
    variants: {
      focus: {
        true: "border-green-700/50 ring-2 border-2 ring-green-50 hover:border-green-700/50",
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
      focus: false,
    },
  }
);

export interface TextAreaProps
  extends Omit<TextFieldWrapperProps, "children" | "htmlFor" | "error">,
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      error,
      required,
      label,
      helperText,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [focus, setFocus] = useState<boolean>(false);
    const id = useId();

    return (
      <TextFieldWrapper
        withAsterisk={required}
        className={className}
        label={label}
        helperText={helperText}
        error={!!error}
        htmlFor={id}
      >
        <textarea
          id={id}
          className={cn(textareaVariants({ error, focus, className }))}
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
      </TextFieldWrapper>
    );
  }
);
TextArea.displayName = "TextArea";
