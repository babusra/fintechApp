const API_KEY = process.env.CRYPTO_API_KEY;

export async function GET(request: Request) {
  // const url = new URL(request.url);
  // const ids = url.searchParams.get('ids');

  // const response = await fetch(
  //   `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${ids}`,
  //   {
  //     headers: {
  //       'X-CMC_PRO_API_KEY': API_KEY!,
  //     },
  //   }
  // );

  // const res = await response.json();

  // return new Response(
  //   JSON.stringify(res.data),
  //   {
  //     status: 200,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   }
  // );

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
}

const data = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    slug: 'bitcoin',
    num_market_pairs: 12021,
    date_added: '2010-07-13T00:00:00.000Z',
    tags: [
      'mineable',
      'pow',
      'sha-256',
      'store-of-value',
      'state-channel',
      'coinbase-ventures-portfolio',
      'three-arrows-capital-portfolio',
      'polychain-capital-portfolio',
      'binance-labs-portfolio',
      'blockchain-capital-portfolio',
      'boostvc-portfolio',
      'cms-holdings-portfolio',
      'dcg-portfolio',
      'dragonfly-capital-portfolio',
      'electric-capital-portfolio',
      'fabric-ventures-portfolio',
      'framework-ventures-portfolio',
      'galaxy-digital-portfolio',
      'huobi-capital-portfolio',
      'alameda-research-portfolio',
      'a16z-portfolio',
      '1confirmation-portfolio',
      'winklevoss-capital-portfolio',
      'usv-portfolio',
      'placeholder-ventures-portfolio',
      'pantera-capital-portfolio',
      'multicoin-capital-portfolio',
      'paradigm-portfolio',
      'bitcoin-ecosystem',
      'ftx-bankruptcy-estate',
      '2017-2018-alt-season',
      'us-strategic-crypto-reserve',
    ],
    max_supply: 21000000,
    circulating_supply: 19849046,
    total_supply: 19849046,
    infinite_supply: false,
    platform: null,
    cmc_rank: 1,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: '2025-04-09T23:38:00.000Z',
    quote: {
      EUR: {
        price: 75537.14394998543,
        volume_24h: 77236029983.60768,
        volume_change_24h: 76.3736,
        percent_change_1h: -0.5597287,
        percent_change_24h: 8.22696422,
        percent_change_7d: 0.12671211,
        percent_change_30d: 4.28836007,
        percent_change_60d: -14.4541213,
        percent_change_90d: -10.33828106,
        market_cap: 1499340244971.8826,
        market_cap_dominance: 62.4002,
        fully_diluted_market_cap: 1586280022949.6982,
        tvl: null,
        last_updated: '2025-04-09T23:39:04.000Z',
      },
    },
  },
  {
    id: 1027,
    name: 'Ethereum',
    symbol: 'ETH',
    slug: 'ethereum',
    num_market_pairs: 10116,
    date_added: '2015-08-07T00:00:00.000Z',
    tags: [
      'pos',
      'smart-contracts',
      'ethereum-ecosystem',
      'coinbase-ventures-portfolio',
      'three-arrows-capital-portfolio',
      'polychain-capital-portfolio',
      'binance-labs-portfolio',
      'blockchain-capital-portfolio',
      'boostvc-portfolio',
      'cms-holdings-portfolio',
      'dcg-portfolio',
      'dragonfly-capital-portfolio',
      'electric-capital-portfolio',
      'fabric-ventures-portfolio',
      'framework-ventures-portfolio',
      'hashkey-capital-portfolio',
      'kenetic-capital-portfolio',
      'huobi-capital-portfolio',
      'alameda-research-portfolio',
      'a16z-portfolio',
      '1confirmation-portfolio',
      'winklevoss-capital-portfolio',
      'usv-portfolio',
      'placeholder-ventures-portfolio',
      'pantera-capital-portfolio',
      'multicoin-capital-portfolio',
      'paradigm-portfolio',
      'ethereum-pow-ecosystem',
      'layer-1',
      'ftx-bankruptcy-estate',
      'sora-ecosystem',
      'rsk-rbtc-ecosystem',
      'world-liberty-financial-portfolio',
      'us-strategic-crypto-reserve',
    ],
    max_supply: null,
    circulating_supply: 120678504.32571557,
    total_supply: 120678504.32571557,
    infinite_supply: true,
    platform: null,
    cmc_rank: 2,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: '2025-04-09T23:39:00.000Z',
    quote: {
      EUR: {
        price: 1517.9374263111995,
        volume_24h: 36473792295.235794,
        volume_change_24h: 88.4339,
        percent_change_1h: -0.82463022,
        percent_change_24h: 12.78986729,
        percent_change_7d: -7.68287442,
        percent_change_30d: -12.08834176,
        percent_change_60d: -37.1305512,
        percent_change_90d: -48.30479714,
        market_cap: 183182418267.26166,
        market_cap_dominance: 7.6238,
        fully_diluted_market_cap: 183182418267.25903,
        tvl: null,
        last_updated: '2025-04-09T23:39:04.000Z',
      },
    },
  },
  {
    id: 825,
    name: 'Tether USDt',
    symbol: 'USDT',
    slug: 'tether',
    num_market_pairs: 123334,
    date_added: '2015-02-25T00:00:00.000Z',
    tags: [
      'stablecoin',
      'asset-backed-stablecoin',
      'usd-stablecoin',
      'ethereum-pow-ecosystem',
      'fiat-stablecoin',
      'tron20-ecosystem',
      'rsk-rbtc-ecosystem',
      'telos-ecosystem',
      'world-liberty-financial-portfolio',
    ],
    max_supply: null,
    circulating_supply: 144014397535.68182,
    total_supply: 147858996006.40207,
    platform: {
      id: 1027,
      name: 'Ethereum',
      symbol: 'ETH',
      slug: 'ethereum',
      token_address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    infinite_supply: true,
    cmc_rank: 3,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: '2025-04-09T23:38:00.000Z',
    quote: {
      EUR: {
        price: 0.9130805535088414,
        volume_24h: 127207700883.62901,
        volume_change_24h: 71.9642,
        percent_change_1h: -0.01561149,
        percent_change_24h: 0.05788129,
        percent_change_7d: -0.00314561,
        percent_change_30d: 0.01433085,
        percent_change_60d: -0.04744271,
        percent_change_90d: -0.03544284,
        market_cap: 131496745815.12268,
        market_cap_dominance: 5.4727,
        fully_diluted_market_cap: 135007173914.78654,
        tvl: null,
        last_updated: '2025-04-09T23:39:04.000Z',
      },
    },
  },
  {
    id: 52,
    name: 'XRP',
    symbol: 'XRP',
    slug: 'xrp',
    num_market_pairs: 1581,
    date_added: '2013-08-04T00:00:00.000Z',
    tags: [
      'medium-of-exchange',
      'enterprise-solutions',
      'xrp-ecosystem',
      'arrington-xrp-capital-portfolio',
      'galaxy-digital-portfolio',
      'a16z-portfolio',
      'pantera-capital-portfolio',
      'ftx-bankruptcy-estate',
      '2017-2018-alt-season',
      'klaytn-ecosystem',
      'made-in-america',
      'us-strategic-crypto-reserve',
    ],
    max_supply: 100000000000,
    circulating_supply: 58274974538,
    total_supply: 99986277500,
    infinite_supply: false,
    platform: null,
    cmc_rank: 4,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: '2025-04-09T23:39:00.000Z',
    quote: {
      EUR: {
        price: 1.876495934781472,
        volume_24h: 8558977707.384078,
        volume_change_24h: 44.8795,
        percent_change_1h: -0.82012081,
        percent_change_24h: 14.34434501,
        percent_change_7d: 1.20273818,
        percent_change_30d: 0.33572685,
        percent_change_60d: -15.46868399,
        percent_change_90d: -9.74822224,
        market_cap: 109352752820.05078,
        market_cap_dominance: 4.5511,
        fully_diluted_market_cap: 187649593478.14377,
        tvl: null,
        last_updated: '2025-04-09T23:39:04.000Z',
      },
    },
  },
  {
    id: 1839,
    name: 'BNB',
    symbol: 'BNB',
    slug: 'bnb',
    num_market_pairs: 2459,
    date_added: '2017-07-25T00:00:00.000Z',
    tags: [
      'marketplace',
      'centralized-exchange',
      'payments',
      'smart-contracts',
      'alameda-research-portfolio',
      'multicoin-capital-portfolio',
      'bnb-chain-ecosystem',
      'layer-1',
      'alleged-sec-securities',
      'celsius-bankruptcy-estate',
    ],
    max_supply: null,
    circulating_supply: 142470889.01,
    total_supply: 142470889.01,
    infinite_supply: false,
    platform: null,
    cmc_rank: 5,
    self_reported_circulating_supply: null,
    self_reported_market_cap: null,
    tvl_ratio: null,
    last_updated: '2025-04-09T23:39:00.000Z',
    quote: {
      EUR: {
        price: 532.3380472858609,
        volume_24h: 1796717634.7009661,
        volume_change_24h: 17.3008,
        percent_change_1h: -0.08738898,
        percent_change_24h: 5.34133137,
        percent_change_7d: -1.19433357,
        percent_change_30d: 8.82878855,
        percent_change_60d: -5.52490545,
        percent_change_90d: -14.89879249,
        market_cap: 75842674850.66402,
        market_cap_dominance: 3.1569,
        fully_diluted_market_cap: 75842674850.6604,
        tvl: null,
        last_updated: '2025-04-09T23:39:04.000Z',
      },
    },
  },
];
