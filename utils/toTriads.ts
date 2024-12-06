export const toTriads = (sum: number) => {
  return String(sum).replace(/(\d)(?=(\d\d\d)+(^\d|$))/g, '$1 ');
};
