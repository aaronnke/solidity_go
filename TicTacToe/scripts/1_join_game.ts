const contract = require("../artifacts/contracts/TicTacToe.sol/TicTacToe.json");

async function main() {
  const contractAddress = process.env.CONTRACT_ADDRESS || ''

  const [_, p2] = await ethers.getSigners();
  const stake = process.env.GAME_STAKE_ETH || ''
  const p2Nonce = parseInt(process.env.P2_NONCE || '');
  
  const bet = ethers.utils.parseEther(stake);
  const gameContract = new ethers.Contract(contractAddress, contract.abi, p2);
  await gameContract.joinGame(p2Nonce, {value: bet});
}

main();