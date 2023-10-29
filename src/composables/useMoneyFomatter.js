export const useCurrencyFormatter = (data) => {
  let usdFormat = data.toLocaleString("en-US");
  return usdFormat.replaceAll(",", " ");
};
