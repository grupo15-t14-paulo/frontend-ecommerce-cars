export interface ICardValueProps {
  id: string;
  title: string;
  img: Images[];
  imgCover: string;
  description: string | null | undefined;
  km: number;
  year: string;
  value: number;
  fipePrice: number;
  createdAt: string | Date;
  user: IUser;
}

export interface ICardProps {
  id: string;
  title: string;
  img: Images[];
  imgCover: string;
  description: string | null | undefined;
  km: string;
  year: string;
  value: string;
  fipePrice: string;
  createdAt: string;
  user: IUser;
  brand: string;
  typeCar: string;
  color: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  tel: string;
  dateBirth: string;
  description: string | null | undefined;
  isSeller: boolean;
}

export interface Images {
  urlImage: string;
}

export interface IComments {
  id: string;
  comment: string;
  createdAt:string
}

export interface ICarUserReturn {
  id: string;
  brand: string;
  model: string;
  year: string;
  typeCar: string;
  mileage: number;
  color: string;
  fipePrice: number;
  price: number;
  description: string;
  imageCover: string;
  createdAt: string;
  isAvailable: boolean;
  images: Image[];
  comments: IComments[];
  user: IUser;
}

interface Image {
  urlImage: string;
}
