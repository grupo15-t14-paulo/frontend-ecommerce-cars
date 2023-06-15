import InputMask from "react-input-mask";
import { IMaskedInputProps } from "./interface";

export const MaskedInput = ({
  label,
  placeholder,
  register,
  mask,
}: IMaskedInputProps) => {
  return (
    <div className={"flex flex-col gap-2"}>
      <label htmlFor={label} className={"text-sm"}>
        {label}
      </label>

      <InputMask
        mask={mask}
        placeholder={placeholder}
        {...register}
        className={
          "h-12 rounded border-2 border-colorGreyScaleGrey7 focus:outline-none focus:border-colorBrandBrand2 px-4"
        }
      />
    </div>
  );
};
