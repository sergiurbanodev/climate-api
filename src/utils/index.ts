export const formatTemperature = (temperature: number): number => {
  const KELVIN = 273.15;
  return parseInt((temperature - KELVIN).toString());
};
