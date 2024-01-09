/* Combines a set of strings with a dash after stripping the leading sub string */
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || typeof set !== 'object') return '';
  return [...set]
    .filter((el) => el.startsWith(startString))
    .map((el) => el.slice(startString.length))
    .join('-');
}
