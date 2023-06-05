export const profileName = (name: string) => {
  const partName = name.split(" ");
  const firstWordName = partName[0].charAt(0);
  const secondWordName = partName[1].charAt(0);

  return `${firstWordName}${secondWordName}`;
};

export const profileTitleName = (name: string) => {
  const partName = name.split(" ");
  const firstName = partName[0];
  const secondName = partName[1];

  return `${firstName} ${secondName}`;
};
