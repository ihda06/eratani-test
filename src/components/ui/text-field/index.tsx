import { forwardRef, MouseEventHandler, ReactNode, useId } from "react";

import { Input, InputProps } from "./input";
import { TextFieldWrapper, TextFieldWrapperProps } from "./wrapper";
import cn from "@/app/utils/clsx";

export interface TextFieldProps
  extends Omit<TextFieldWrapperProps, "children" | "htmlFor">,
    Omit<InputProps, "error"> {}

export const InputAdornment = ({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: MouseEventHandler;
  className?: string;
}) => {
  return (
    <div
      className={cn("relative flex items-center justify-center", className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { className, label, helperText, error, required, id: propsId, ...props },
    ref
  ) => {
    const id = useId();

    return (
      <TextFieldWrapper
        withAsterisk={required}
        className={className}
        label={label}
        helperText={helperText}
        error={error}
        htmlFor={propsId ?? id}
      >
        <Input ref={ref} id={propsId ?? id} error={error} {...props} />
      </TextFieldWrapper>
    );
  }
);
TextField.displayName = "TextField";
