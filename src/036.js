/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  const rows = board;
  const columns = [];
  const subBoxes = [];
  for (let i = 0; i < 9; i += 1) {
    if (withRepetition(rows[i])) return false;
    // 填充 columns
    for (let j = 0; j < 9; j += 1) {
      columns[j] = columns[j] || [];
      columns[j][i] = rows[i][j];
    }
    // 填充 subBoxes
    let k = 0;
    const low = Math.floor(i / 3) * 3;
    const high = low + 3;
    for (let j = low; j < high; j += 1) {
      subBoxes[j] = subBoxes[j] || [];
      subBoxes[j].push(...rows[i].slice(k, k + 3));
      k += 3;
    }
  }

  for (let i = 0; i < 9; i += 1) {
    if (withRepetition(columns[i])) return false;
    if (withRepetition(subBoxes[i])) return false;
  }

  return true;

  function withRepetition(arr) {
    const filled = arr.filter(digit => digit !== '.');
    return filled.length > new Set(filled).size;
  }
}

export default isValidSudoku;
