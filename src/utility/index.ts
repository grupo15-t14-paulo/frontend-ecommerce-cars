interface Car {
  title: string;
  img: string;
  description: string;
  userName: string;
  km: string;
  year: string;
  value: number;
}

export const carros: Car[] = [
  {
    title: "Carro 1",
    img: "caminho/para/imagem1.jpg",
    description: "Descrição do Carro 1",
    userName: "Usuário 1",
    km: "10000 km",
    year: "2018",
    value: 25000,
  },
  {
    title: "Carro 2",
    img: "caminho/para/imagem2.jpg",
    description: "Descrição do Carro 2",
    userName: "Usuário 2",
    km: "5000 km",
    year: "2020",
    value: 35000,
  },
  {
    title: "Carro 3",
    img: "caminho/para/imagem3.jpg",
    description: "Descrição do Carro 3",
    userName: "Usuário 3",
    km: "8000 km",
    year: "2019",
    value: 30000,
  },
];
