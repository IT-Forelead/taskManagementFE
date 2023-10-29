export function cleanObjectEmptyFields(obj) {
  for (let propName in obj) {
    if (!obj[propName]) {
      delete obj[propName];
    }
  }
  return obj;
}
