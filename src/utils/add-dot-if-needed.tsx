export function addDotIfNeeded(number: string) {
  return [
    "6",
    "9",
    "60",
    "66",
    "68",
    "69",
    "86",
    "89",
    "90",
    "96",
    "98",
    "99",
  ].includes(number)
    ? `${number}.`
    : number;
}
