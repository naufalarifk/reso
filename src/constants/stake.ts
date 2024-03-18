export const STAKE_COIN = [
  {
    staking_card: {
      crypto_name: "Bitcoin",
      ticker_symbol: "BTC",
      current_price: 50000,
      staking_balance: 2.5,
      annual_reward_percentage: 5,
      staking_duration: "6 months",
      estimated_reward: 0.3125,
      next_reward_date: "2024-09-18",
      staking_address: "bitcoin_staking_address",
      staking_platform: "Bitcoin Staking Platform",
    },
  },
  {
    staking_card: {
      crypto_name: "Ethereum",
      ticker_symbol: "ETH",
      current_price: 2000,
      staking_balance: 10,
      annual_reward_percentage: 7,
      staking_duration: "1 year",
      estimated_reward: 0.7,
      next_reward_date: "2025-03-18",
      staking_address: "ethereum_staking_address",
      staking_platform: "Ethereum Staking Platform",
    },
  },
  {
    staking_card: {
      crypto_name: "RESO",
      ticker_symbol: "RESO",
      current_price: 10.5,
      staking_balance: 1000,
      annual_reward_percentage: 8,
      staking_duration: "1 year",
      estimated_reward: 84,
      next_reward_date: "2025-03-18",
      staking_address: "dummy_coin_staking_address",
      staking_platform: "DummyCoin Staking Platform",
    },
  },
  {
    staking_card: {
      crypto_name: "MultiStake",
      staking_cryptos: [
        {
          crypto_name: "Bitcoin",
          ticker_symbol: "BTC",
          staking_balance: 1.5,
        },
        {
          crypto_name: "Ethereum",
          ticker_symbol: "ETH",
          staking_balance: 5,
        },
      ],
      total_staking_balance: 6.5,
      annual_reward_percentage: 6,
      staking_duration: "9 months",
      estimated_reward: 0.975,
      next_reward_date: "2024-12-18",
      staking_address: "multi_stake_address",
      staking_platform: "MultiStake Platform",
    },
  },
];