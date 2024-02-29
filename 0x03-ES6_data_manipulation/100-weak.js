/* Pointer to weak map of endpoints & no of calls made. */
export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= 5) throw Error('Endpoint load is high');
}
