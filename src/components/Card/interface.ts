export interface ICardProps {
  id: string;
  title: string;
  img: Images[];
  imgCover: string;
  description: string | null | undefined;
  userName: string;
  km: string;
  year: string;
  value: string;
  fipePrice: string;
  createdAt: string;
}

export interface Images{
  urlImage: string
}