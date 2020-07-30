const getColor = (id: string, colors: string[][]):string[] => {
  return colors[(Number(id) % colors.length) - 1];
};
export { getColor };