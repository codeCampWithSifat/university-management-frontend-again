"use client";
import { useFormContext, Controller } from "react-hook-form";
import { Select } from "antd";

type SelectOptions = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  options?: SelectOptions[];
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOptions;
};

const FormSelectField = ({
  name,
  type,
  size,
  value,
  placeholder,
  options,
  label,
  defaultValue,
}: SelectFieldProps) => {
  const { control } = useFormContext();
  return (
    <>
      {" "}
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            size={size}
            options={options}
            value={value}
            style={{ width: "100%" }}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
