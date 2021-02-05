export const valueDistributor = (currentValue, solar) => {
  const value = 
  {
    Earth: () =>  solar.getEarthAge(),
    Mercury: () => solar.getMercuryAge(),
    Venus: () => solar.getVenusAge(),
    Mars: () => solar.getMarsAge(),
    Jupiter: () => solar.getJupiterAge(),
    Default: () => null
  };
  return (value[currentValue]() || value['Default']());
};