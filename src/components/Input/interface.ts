import { UseFormRegisterReturn } from "react-hook-form";

export interface IInputProps {
  type: string;
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  isRequired?: boolean;
}
