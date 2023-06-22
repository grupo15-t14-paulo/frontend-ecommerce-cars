export interface ICarFiltter {
  brand?: string;
  model?: string;
  fuel?: string;
  year?: string;
  color?: string;
  minPrice?: string;
  maxPrice?: string;
  minMileage?: string;
  maxMileage?: string;
}

export interface IPropsBarMobile {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
