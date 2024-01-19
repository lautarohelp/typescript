(()=> {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((i) => {
      total += i;
    });
    return total.toString();
  }

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);

  };

  printTotal([1,2,1,2,1,2,1,2]);

})();
