# Tic-Tac-Toe and Go
We have implemented the game of Tic-Tac-Toe and Go in Solidity and Cairo. They have been tested on testnets such as Goerli, Arbitrum Testnet, Polygon Mumbai and Starknet Testnet.

# Testing
We have made simulations of the whole game where every move is written on to the chain. 
We have also made a simulation version using state channels. In the State channels scripts, none of the player's moves are written to the chain. Only the start and end of the game is submitted to the network because one of the players can submit their proof that they won the game. 

#### Note
1. You'll need a `.env` file to run these:
```
ALCHEMY_API_KEY = 
ARBITRUM_GOERLI_L2RPC=

P1_PRIVKEY = 
P2_PUBKEY = 
P2_PRIVKEY = 

CONTRACT_ADDRESS = 

GAME_STAKE_ETH = "0.01"
GAME_TURN_LENGTH = "10000"
P1_NONCE = "101"
P2_NONCE = "42"

GAS_LIMIT = 2100000
```

2. Go was implemented in a simplified version where none of the special rules(preventing illegal moves, black plays first etc) are not implemented. 
