function solution(matrix) {
  let count = 0;
  let revMatrix = matrix[0].map((value, column) =>
    matrix.map((row) => row[column])
  );
  revMatrix.forEach((row) => {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === 0) return;
      count += row[i];
    }
  });
  return count;
}
