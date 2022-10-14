const { expect } = require("@jest/globals");
const whoWon = require("../src/2");

const testCases = [
  ["rock", "rock", "tie"],
  ["scissors", "scissors", "tie"],
  ["paper", "paper", "tie"],
  ["rock", "paper", "player 2"],
  ["rock", "scissors", "player 1"],
  ["scissors", "rock", "player 2"],
  ["scissors", "paper", "player 1"],
  ["paper", "rock", "player 1"],
  ["paper", "scissors", "player 2"],
];

testCases.forEach(([playerOneChoice, playerTwoChoice, outcome]) => {
  test(`whoWon should return a win for ${outcome} if player 1 gives ${playerOneChoice} and player 2 gives ${playerTwoChoice}`, () => {
    expect(whoWon(playerOneChoice, playerTwoChoice)).toMatch(
      new RegExp(outcome, "i")
    );
  });
});

