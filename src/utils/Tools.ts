export const getCurrentDate = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const generateId = () => {
  const min: number = 0;
  const max: number = 99999;

  return Math.floor(Math.random() * (max - min) + min);
};
