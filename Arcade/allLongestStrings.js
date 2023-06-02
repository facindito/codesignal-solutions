function solution(inputArray) {
  const orderArray = inputArray.sort((a, b) => b.length - a.length);
  return orderArray.filter((word) => orderArray[0].length === word.length);
}
