function solution(inputArray) {
  return Math.max(
    ...inputArray
      .slice(1)
      .map((num, index) => num * inputArray[index])
  );
}
