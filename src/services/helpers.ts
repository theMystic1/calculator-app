export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en").format(value);
}
