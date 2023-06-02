function solution(year) {
  return year % 100 === 0 
    ? Math.trunc(year / 100) 
    : Math.trunc(year / 100) + 1;
}

// solution(1905) => 20
// solution(1700) => 17