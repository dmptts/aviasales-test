export const getFormattedCount = (
  amount: number,
  zero: string,
  one: string,
  few: string,
  many: string
) => {
  if (amount !== 0) {
    const hundredthRemainder = amount - Math.floor(amount / 100) * 100;
  
    if (hundredthRemainder >= 10 && hundredthRemainder < 20) {
      return many;
    } else {
      const decimalRemainder = amount - Math.floor(amount / 10) * 10;

      if (decimalRemainder === 1) {
        return one;
      } else if (decimalRemainder > 1 && decimalRemainder < 5) {
        return few;
      } else {
        return many;
      }
    }
  } else {
    return zero;
  }
  
}