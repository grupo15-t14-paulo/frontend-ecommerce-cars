export const profileName = (name: string | undefined) => {
  if (!name) {
    name = "Nome Default";
  }

  const partName = name.split(" ");
  const firstWordName = partName[0].charAt(0);
  const secondWordName = partName.length > 1 ? partName[1].charAt(0) : "";

  return `${firstWordName}${secondWordName}`;
};

export const profileTitleName = (name: string | undefined) => {
  if (!name) {
    name = "Nome Default";
  }
  const partName = name.split(" ");
  const firstName = partName[0];
  const secondName = partName.length > 1 ? partName[1] : "";

  return `${firstName} ${secondName}`;
};
