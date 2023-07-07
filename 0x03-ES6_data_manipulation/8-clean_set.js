// Clean a set of all items that start with a given string
export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || startString.length === 0) return '';

  const arr = [];
  for (const item of set) {
    if (item && item.startsWith(startString)) {
      arr.push(item.slice(startString.length));
    }
  }

  return arr.join('-');
}
