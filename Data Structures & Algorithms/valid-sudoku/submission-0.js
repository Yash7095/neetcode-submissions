class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
  let flag = true;
  for (let i = 0; i < board.length; i++) {
    const subBoxRow = new Set();
    for (let ele of board[i]) {
      if (Number(ele) && subBoxRow.has(ele)) {
        return (flag = false);
      }
      subBoxRow.add(ele);
    }
    // console.log(`for ${i} set is: `, subBox);
    const subBoxCol = new Set();
    for (let j = 0; j < board.length; j++) {
      // console.log(`fro j loop: ${board[j][i]}`);
      if (Number(board[j][i]) && subBoxCol.has(board[j][i])) {
        return (flag = false);
      }
      subBoxCol.add(board[j][i]);
    }
    for (let j = 0; j < board.length; j++) {
      // console.log(board[i], board[j][i]);
      // console.log((board[i] / 3) * 3 + board[j][i] / 3);
    }
  }
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      let subBox = new Set();
      for (let i = boxRow * 3; i < boxRow * 3 + 3; i++) {
        for (let j = boxCol * 3; j < boxCol * 3 + 3; j++) {
          const val = board[i][j];

          if (val !== "." && subBox.has(val)) return false;
          subBox.add(val);
        }
      }
    }
  }

  return flag;
    }
}
