export interface ICardProps {
  id: string;
  title: string;
  img: Images[];
  imgCover: string;
  description: string | null | undefined;
  userName: string;
  km: number;
  year: string;
  value: number;
  fipePrice: number;
  createdAt: string;
}

export interface Images {
  urlImage: string;
}
