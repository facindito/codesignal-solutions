function solution(sequence) {
  let bad = 0;
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) bad++;
    if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1])
      bad++;
  }
  return bad <= 1;
}

function solution(sequence) {
  sequence.every((currentNum, index) => {
    const previousNum = sequence[index - 1];
    return (
      index === 0 ||
      currentNum >= previousNum ||
      ((index < 2 || currentNum > sequence[index - 2]) &&
        (index + 1 >= sequence.length || currentNum < sequence[index + 1]))
    );
  });
}
