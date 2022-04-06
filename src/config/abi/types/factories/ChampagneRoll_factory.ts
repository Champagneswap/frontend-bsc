import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ChampagneRoll, ChampagneRollInterface } from "../ChampagneRoll";

const _abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_champagnefactory",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "old_pairaddr",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "cham_pairaddr",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "champ_lp",
        "type": "uint256"
      }
    ],
    "name": "Migrated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "champagnefactory",
    "outputs": [
      {
        "internalType": "contract IUniswapV2Factory",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "orig_pairaddr", "type": "address" },
      { "internalType": "uint256", "name": "liquidity", "type": "uint256" }
    ],
    "name": "migrate",
    "outputs": [
      { "internalType": "address", "name": "cham_pairaddr", "type": "address" },
      { "internalType": "uint256", "name": "pooledAmountA", "type": "uint256" },
      { "internalType": "uint256", "name": "pooledAmountB", "type": "uint256" }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "orig_pairaddr", "type": "address" }
    ],
    "name": "migrate_user",
    "outputs": [
      { "internalType": "address", "name": "", "type": "address" },
      { "internalType": "uint256", "name": "", "type": "uint256" },
      { "internalType": "uint256", "name": "", "type": "uint256" },
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_champagnefactory",
        "type": "address"
      }
    ],
    "name": "setMigrateFactory",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "newOwner", "type": "address" }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]


export class ChampagneRoll__factory {
  static readonly abi = _abi;
  static createInterface(): ChampagneRollInterface {
    return new utils.Interface(_abi) as ChampagneRollInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ChampagneRoll {
    return new Contract(address, _abi, signerOrProvider) as ChampagneRoll;
  }
}
