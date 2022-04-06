import tokens from 'config/constants/tokens'
import { getChamVaultAddress, getIfoPoolAddress, getMasterChefAddress } from 'utils/addressHelpers'

const chamLpAddress = '0x08f279d5daFf191408114651e54889F46A5FCB90'

const ChamBalanceStrategy = {
  name: 'erc20-balance-of',
  params: {
    address: tokens.cham.address,
    decimals: 0,
    symbol: tokens.cham.symbol,
  },
}

const ChamVaultSharesStrategy = {
  name: 'contract-call',
  params: {
    address: getChamVaultAddress(),
    decimals: 0,
    output: 'shares',
    methodABI: {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'userInfo',
      outputs: [
        {
          internalType: 'uint256',
          name: 'shares',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'lastDepositedTime',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'chamAtLastUserAction',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'lastUserActionTime',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  },
}

const ChamVaultPricePerFullShareStrategy = {
  name: 'contract-call',
  params: {
    address: getChamVaultAddress(),
    decimals: 0,
    args: [],
    methodABI: {
      inputs: [],
      name: 'getPricePerFullShare',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  },
}

const IFOPoolSharesStrategy = {
  name: 'contract-call',
  params: {
    address: getIfoPoolAddress(),
    decimals: 0,
    output: 'shares',
    methodABI: {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'userInfo',
      outputs: [
        {
          internalType: 'uint256',
          name: 'shares',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'lastDepositedTime',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'chamAtLastUserAction',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'lastUserActionTime',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  },
}

const IFOPoolPricePerFullShareStrategy = {
  name: 'contract-call',
  params: {
    address: getIfoPoolAddress(),
    decimals: 0,
    args: [],
    methodABI: {
      inputs: [],
      name: 'getPricePerFullShare',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  },
}

const UserStakeInChamPoolStrategy = {
  name: 'contract-call',
  params: {
    address: getMasterChefAddress(),
    decimals: 0,
    args: [0, '%{address}'],
    output: 'amount',
    methodABI: {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'userInfo',
      outputs: [
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'rewardDebt',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  },
}

const ChamBnbLpTotalSupplyStrategy = {
  name: 'contract-call',
  params: {
    address: chamLpAddress,
    decimals: 0,
    args: [],
    methodABI: {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  },
}

const ChamBnbLpReserve0Strategy = {
  name: 'contract-call',
  params: {
    address: chamLpAddress,
    decimals: 0,
    args: [],
    output: '_reserve0',
    methodABI: {
      constant: true,
      inputs: [],
      name: 'getReserves',
      outputs: [
        {
          internalType: 'uint112',
          name: '_reserve0',
          type: 'uint112',
        },
        {
          internalType: 'uint112',
          name: '_reserve1',
          type: 'uint112',
        },
        {
          internalType: 'uint32',
          name: '_blockTimestampLast',
          type: 'uint32',
        },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
  },
}

const ChamBnbLpChamBnbBalanceStrategy = {
  name: 'contract-call',
  params: {
    address: getMasterChefAddress(),
    decimals: 0,
    args: [2, '%{address}'],
    output: 'amount',
    methodABI: {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'userInfo',
      outputs: [
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'rewardDebt',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  },
}

function createPoolStrategy(poolAddress) {
  return {
    name: 'contract-call',
    params: {
      address: poolAddress,
      decimals: 0,
      output: 'amount',
      methodABI: {
        inputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        name: 'userInfo',
        outputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'rewardDebt',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    },
  }
}

export { createPoolStrategy }

export const snapshotStrategies = [
  ChamBalanceStrategy,
  ChamVaultSharesStrategy,
  ChamVaultPricePerFullShareStrategy,
  IFOPoolSharesStrategy,
  IFOPoolPricePerFullShareStrategy,
  UserStakeInChamPoolStrategy,
  ChamBnbLpTotalSupplyStrategy,
  ChamBnbLpReserve0Strategy,
  ChamBnbLpChamBnbBalanceStrategy,
]
