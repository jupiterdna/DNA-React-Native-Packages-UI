import json from "../../dw_config/generated.json";

/**
 * Converts a string into an array by splitting it with spaces.
 * @param value - The string to convert.
 * @returns An array of strings.
 */
const toArray = (value: string) => {
  return value.split(" ");
};

/**
 * Custom hook that returns a function to query the DNA Wind styles.
 * @returns A function that accepts a query string and returns the corresponding styles.
 */
export const useDNAWind = () => {
  return (query: string) => {
    const arr = toArray(query);
    if (!arr.length) {
      return {};
    }

    return arr.reduce((acc, val) => {
      if ((json as any)[val]) {
        return { ...acc, ...(json as any)[val].style };
      } else {
        console.warn(`Warning: '${val}' is not defined in dna-wind`);
        return acc;
      }
    }, {});
  };
};
