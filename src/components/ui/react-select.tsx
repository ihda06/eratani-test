import { useId } from "react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { cva, VariantProps } from "class-variance-authority";
import Select, {
  ClearIndicatorProps,
  components,
  DropdownIndicatorProps,
  GroupBase,
  MultiValueRemoveProps,
  OptionProps,
  Props,
} from "react-select";
import cn from "@/app/utils/clsx";
import { TextFieldWrapper, TextFieldWrapperProps } from "./text-field/wrapper";
import Show from "../utils/Show";

const reactSelectVariants = cva(null, {
  variants: {
    size: {
      sm: "px-3 py-2 text-sm",
      md: "px-3.5 py-2.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const controlVariants = cva("rounded-md border text-gray-700 transition-all", {
  variants: {
    size: {
      sm: "px-3 py-2",
      md: "px-3.5 py-2.5",
    },
    isFocused: {
      true: "ring",
    },
    isDisabled: {
      true: "border-gray-200 bg-gray-100",
    },
    error: {
      true: "border-red-500",
    },
  },
  compoundVariants: [
    {
      error: true,
      isFocused: true,
      className: "border-red-600 ring-red-100",
    },
    {
      isFocused: false,
      isDisabled: false,
      error: false,
      className: "border-gray-300 hover:border-gray-600",
    },
    {
      isFocused: true,
      isDisabled: false,
      error: false,
      className:
        "border-emerald-700/50 ring-emerald-50 hover:border-emerald-700/50",
    },
  ],
  defaultVariants: {
    size: "md",
    isFocused: false,
    isDisabled: false,
    error: false,
  },
});

const optionVariants = cva(
  "flex cursor-pointer items-center py-2 pl-8 pr-4 text-gray-700",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
      },
      isSelected: {
        true: "bg-emerald-100 text-emerald-900",
      },
      isFocused: {
        true: "bg-emerald-50",
      },
      isDisabled: {
        true: "cursor-default bg-gray-50 text-gray-300",
        false: "active:bg-emerald-100",
      },
    },
    compoundVariants: [
      {
        isSelected: true,
        isFocused: true,
        className: "bg-emerald-100",
      },
    ],
  }
);

const multiValueVariants = cva(
  "flex items-center gap-1.5 rounded-lg px-2 py-0.5 ring-1 ring-inset ring-gray-300 transition-shadow hover:ring-gray-600",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-sm",
      },
      isFocused: {
        true: "border-gray-600",
      },
    },
    defaultVariants: {
      size: "md",
      isFocused: false,
    },
  }
);

const Option = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  children,
  className,
  ...props
}: OptionProps<Option, IsMulti, Group>) => {
  return (
    <components.Option className={cn(className, "relative pl-8")} {...props}>
      <Show when={props.isSelected}>
        <CheckIcon
          className={"absolute left-0 ml-3 h-4 w-4 text-emerald-900"}
        />
      </Show>
      {children}
    </components.Option>
  );
};

const LoadingIndicator = () => {
  return (
    <div className="mr-3 flex items-center justify-center">
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-gray-500 border-t-transparent" />
    </div>
  );
};

const ClearIndicator = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  children,
  className,
  ...props
}: ClearIndicatorProps<Option, IsMulti, Group>) => {
  return (
    <components.ClearIndicator
      {...props}
      className={cn(
        className,
        "flex cursor-pointer items-center justify-center rounded-full bg-gray-100 p-1 opacity-80 hover:opacity-100"
      )}
    >
      <XMarkIcon className={"h-4 w-4 text-gray-700"} />
    </components.ClearIndicator>
  );
};

const DropdownIndicator = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  children,
  className,
  ...props
}: DropdownIndicatorProps<Option, IsMulti, Group>) => {
  return (
    <components.DropdownIndicator
      {...props}
      className={"flex items-center justify-center p-1"}
    >
      <ChevronUpDownIcon className={"h-4 w-4 text-gray-700"} />
    </components.DropdownIndicator>
  );
};

const MultiValueRemove = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  children,
  ...props
}: MultiValueRemoveProps<Option, IsMulti, Group>) => {
  return (
    <components.MultiValueRemove {...props}>
      <XMarkIcon className={"h-4 w-4 text-gray-700 active:bg-gray-100"} />
    </components.MultiValueRemove>
  );
};

export interface ReactSelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Partial<Props<Option, IsMulti, Group>>,
    VariantProps<typeof reactSelectVariants>,
    Omit<TextFieldWrapperProps, "children" | "htmlFor"> {}

export function ReactSelect<
  TOption,
  TIsMulti extends boolean = false,
  TGroup extends GroupBase<TOption> = GroupBase<TOption>
>({
  className,
  label,
  helperText,
  required,
  error,
  size,
  components,
  ...props
}: ReactSelectProps<TOption, TIsMulti, TGroup>) {
  const id = useId();

  return (
    <TextFieldWrapper
      className={className}
      withAsterisk={required}
      htmlFor={id}
      label={label}
      helperText={helperText}
      error={error}
    >
      <Select
        unstyled
        inputId={id}
        instanceId={id}
        className={cn("text-gray-700")}
        components={{
          Option,
          ClearIndicator,
          LoadingIndicator,
          DropdownIndicator,
          MultiValueRemove,
          ...components,
        }}
        menuPlacement={"auto"}
        hideSelectedOptions={false}
        minMenuHeight={240}
        maxMenuHeight={240}
        isClearable
        classNames={{
          menu: ({ className }) =>
            cn(
              className,
              "basic-transition !z-30 my-2 rounded bg-white shadow-md"
            ),
          option: ({ isSelected, isDisabled, isFocused }) =>
            cn(optionVariants({ isFocused, isSelected, isDisabled, size })),
          control: ({ isFocused, isDisabled }) =>
            cn(controlVariants({ isFocused, isDisabled, size, error })),
          indicatorSeparator: () => "bg-gray-300",
          indicatorsContainer: () => "gap-1.5",
          placeholder: () => "text-gray-400",
          valueContainer: () => "gap-1.5 mr-3",
          multiValue: ({ isFocused }) =>
            cn(multiValueVariants({ isFocused, size })),
          multiValueRemove: ({ isFocused }) =>
            cn(
              isFocused && "bg-gray-100",
              "ml-1 h-4 w-4 rounded-full transition-colors"
            ),
          noOptionsMessage: () => "py-2 text-gray-500",
        }}
        {...props}
      />
    </TextFieldWrapper>
  );
}
