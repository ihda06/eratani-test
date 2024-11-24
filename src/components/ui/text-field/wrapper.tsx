import cn from "@/app/utils/clsx";
import Show from "@/components/utils/Show";
import { ReactNode } from "react";

export interface TextFieldWrapperProps {
  htmlFor?: string;
  children: ReactNode;
  label?: ReactNode;
  helperText?: ReactNode;
  error?: boolean;
  className?: string;
  withAsterisk?: boolean;
}

export const TextFieldWrapper = ({
  className,
  htmlFor,
  children,
  label,
  helperText,
  error,
  withAsterisk,
}: TextFieldWrapperProps) => {
  return (
    <div className={cn("flex flex-col", !!label && "space-y-1.5", className)}>
      <label
        htmlFor={htmlFor}
        className={cn(
          "text-sm font-medium",
          !label && "sr-only",
          error ? "text-red-600" : "text-gray-600"
        )}
      >
        {label}
        <Show when={!!withAsterisk}>
          <span className="text-red-500"> *</span>
        </Show>
      </label>
      {children}
      <Show when={!!helperText}>
        <span
          className={cn(
            "text-sm font-normal",
            error ? "text-red-600" : "text-gray-500"
          )}
        >
          {helperText}
        </span>
      </Show>
    </div>
  );
};
