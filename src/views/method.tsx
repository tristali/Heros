const getHerosNumber = (pathname: string):string => {
  const result = pathname.split('/')[2];
  const isHeros = !Number.isNaN(Number(result));

  return isHeros ? result : '';
};

const getColor = (id: string, colors: string[][]):string[] => {
  return colors[(Number(id) % colors.length) - 1];
};

export { getColor, getHerosNumber };