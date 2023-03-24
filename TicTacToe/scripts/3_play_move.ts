const contract = require("../artifacts/contracts/TicTacToe.sol/TicTacToe.json");

async function main() {
  const contractAddress = process.env.CONTRACT_ADDRESS || ''

  const playerIdx = parseInt(process.env.PLAYER || '') - 1;
  const square = parseInt(process.env.SQUARE || '');
  const players = await ethers.getSigners();
  const player = players[playerIdx];


  const game = new ethers.Contract(contractAddress, contract.abi, player);
  await game.playMove(square);
}

main();