// Update unique items in list of groceries
export default function updateUniqueItems(groceriesList) {
  if (!(groceriesList instanceof Map)) throw new Error('Cannot process');
  groceriesList.forEach((value, key) => (value === 1 ? groceriesList.set(key, 100) : ''));
}
