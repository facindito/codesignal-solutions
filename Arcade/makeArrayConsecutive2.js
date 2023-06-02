function solution(statues) {
  let count = 0;
  statues.sort((a, b) => a - b);
  const start = statues[0];
  const end = statues[statues.length - 1];

  for (let i = start; i < end; i++) {
    if (!statues.includes(i)) {
      count++;
    }
  }

  return count;
}
