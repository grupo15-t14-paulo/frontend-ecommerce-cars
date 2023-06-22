import { UseFormRegisterReturn } from "react-hook-form";

export interface IMaskedInputProps {
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  mask: string;
  isRequired?: boolean;
}
