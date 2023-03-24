function calculateMoney(inheritedMoney, yearToLive) {
  let moneyLeft = inheritedMoney;
  let age = 18;
  for (let year = 1800; year <= yearToLive; year++) {
    if (year % 2 == 0) {
      moneyLeft -= 12000;
    } else {
      moneyLeft -= 12000 + 50 * age;
      age++;
    }
    if (moneyLeft < 0) {
      return `He will need ${(-moneyLeft).toFixed(2)} dollars to survive.`;
    }
  }
  return `Yes! He will live a carefree life and will have ${moneyLeft.toFixed(2)} dollars left.`;
}
console.log(calculateMoney(100000, 1850));
