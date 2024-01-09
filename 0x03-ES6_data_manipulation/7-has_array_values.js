/* Checks if a set contains each element in array */
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
