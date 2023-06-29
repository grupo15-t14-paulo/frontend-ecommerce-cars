import { IInputProps } from "./interface";

export const Input = ({
  type,
  label,
  placeholder,
  register,
  isRequired = true,
  isDisabled = false,
}: IInputProps) => {
  return (
    <div className={"flex flex-col gap-2"}>
      <label htmlFor={label} className={"text-sm"}>
        {label}
      </label>

      <input
        id={label}
        type={type}
        placeholder={placeholder}
        className={
          "h-12 rounded border-2 border-colorGreyScaleGrey7 focus:outline-none focus:border-colorBrandBrand2 px-4"
        }
        {...register}
        required={isRequired}
        disabled={isDisabled}
      />
    </div>
  );
};
