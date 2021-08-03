import { OnTurn } from "./TicTacToeApp";
import { SquareData } from "./TicTacToeApp";

const COUNT_TO_WIN = 5;

export const checkAll = (turn: OnTurn, squares: SquareData[]): boolean => {
  let board = make2D(squares);
  return (
    checkRows(turn, board) ||
    checkCols(turn, board) ||
    checkDiagLR(turn, board) ||
    checkDiagRL(turn, board)
  );
};

const make2D = (squares: SquareData[]): any => {
  let result: SquareData[][] = [];
  let tenElements: SquareData[] = [];
  squares.forEach((el, index) => {
    tenElements.push(el);
    if ((index + 1) % 10 === 0) {
      result.push(tenElements);
      tenElements = [];
    }
  });
  return result;
};

//source: https://codepen.io/Howie_Burger/pen/rLQAxO?editors=0010

const checkRows = (turn: OnTurn, board: SquareData[][]): boolean => {
  for (let row = 0; row < board.length; row++) {
    let count = 0;
    let winArray: number[][] = [];
    for (let col = 0; col < board.length; col++) {
      if (board[row][col].value === turn) {
        count++;
        winArray.push(Array(row, col));
      } else {
        count = 0;
        winArray = [];
      }
      if (count === COUNT_TO_WIN) {
        return true;
      }
    }
  }
  return false;
};

const checkCols = (turn: OnTurn, board: SquareData[][]): boolean => {
  for (let col = 0; col < board.length; col++) {
    let count = 0;
    let winArray: number[][] = [];
    for (let row = 0; row < board.length; row++) {
      if (board[row][col].value === turn) {
        count++;
        winArray.push(Array(row, col));
      } else {
        count = 0;
        winArray = [];
      }
      if (count === COUNT_TO_WIN) {
        return true;
      }
    }
  }
  return false;
};

const checkDiagLR = (turn: OnTurn, board: SquareData[][]): boolean => {
  let count = 0;
  let length = board.length;
  let winArray: number[][] = [];
  let maxLength = length - COUNT_TO_WIN + 1;
  // Run Bottom Half diagonal Top Left to Bottom Right (incl middle)
  for (let rowStart = 0; rowStart < maxLength; rowStart++) {
    for (
      let row = rowStart, col = 0;
      row < length && col < length;
      row++, col++
    ) {
      if (board[row][col].value === turn) {
        count++;
        winArray.push(Array(row, col));
      } else {
        count = 0;
        winArray = [];
      }
      if (count === COUNT_TO_WIN) {
        return true;
      }
    }
  }
  // Run Top Half diagonal Top Left to Bottom Right (excl middle)
  for (let colStart = 1; colStart < maxLength; colStart++) {
    for (
      let col = colStart, row = 0;
      col < length && row < length;
      col++, row++
    ) {
      if (board[row][col].value === turn) {
        count++;
        winArray.push(Array(row, col));
      } else {
        count = 0;
        winArray = [];
      }
      if (count === COUNT_TO_WIN) {
        return true;
      }
    }
  }
  return false;
};

const checkDiagRL = (turn: OnTurn, board: SquareData[][]): boolean => {
  let count = 0;
  let length = board.length;
  let maxLength = length - COUNT_TO_WIN + 1;
  let winArray: number[][] = [];
  // Run Bottom half diagonal Top Right to Botom Left (incl middle)
  for (let rowStart = 0; rowStart < maxLength; rowStart++) {
    for (
      let row = rowStart, col = length - 1;
      row < length && col >= 0;
      row++, col--
    ) {
      if (board[row][col].value === turn) {
        count++;
        winArray.push(Array(row, col));
      } else {
        count = 0;
        winArray = [];
      }
      if (count === COUNT_TO_WIN) {
        return true;
      }
    }
  }
  // Run Top half diagonal Top Right to Botom Left (excl middle)
  for (let colStart = length - 2; colStart > COUNT_TO_WIN - 2; colStart--) {
    for (
      let col = colStart, row = 0;
      col >= 0 && row <= length - 2;
      col-- && row++
    ) {
      if (board[row][col].value === turn) {
        count++;
        winArray.push(Array(row, col));
      } else {
        count = 0;
        winArray = [];
      }
      if (count === COUNT_TO_WIN) {
        return true;
      }
    }
  }
  return false;
};
