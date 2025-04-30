
export const CryptoList = [
    {
        id: 'BTC',
        name: 'Bitcoin',
        symbol: 'BTC'
    },
    {
        id: 'ETH',
        name: 'Ethereum',
        symbol: 'ETH'
    },
    {
        id: 'XRP',
        name: 'XRP',
        symbol: 'XRP'
    },
    {
        id: 'BCH',
        name: 'Bitcoin Cash',
        symbol: 'BCH'
    },
    {
        id: 'LTC',
        name: 'Litecoin',
        symbol: 'LTC'
    },
    {
        id: 'EOS',
        name: 'EOS',
        symbol: 'EOS'
    },
    {
        id: 'BNB',
        name: 'Binance Coin',
        symbol: 'BNB'
    },
    {
        id: 'LINK',
        name: 'Chainlink',
        symbol: 'LINK'
    },
    {
        id: 'NEO',
        name: 'NEO',
        symbol: 'NEO'
    },
    {
        id: 'ETC',
        name: 'Ethereum Classic',
        symbol: 'ETC'
    },
    {
        id: 'ONT',
        name: 'Ontology',
        symbol: 'ONT'
    },
    {
        id: 'CRO',
        name: 'Crypto.com Chain',
        symbol: 'CRO'
    },
    {
        id: 'CUC',
        name: 'Cucumber',
        symbol: 'CUC'
    },
    {
        id: 'USDC',
        name: 'USD Coin',
        symbol: 'USDC'
    },
];

export const CoinPurchaseAvailabilityList = [
    {
        coinId: 'BTC',
        availability: true,
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        coinId: 'ETH',
        availability: true,
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        coinId: 'XRP',
        availability: true,
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        coinId: 'BCH',
        availability: false,
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        coinId: 'LTC',
        availability: true,
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        coinId: 'EOS',
        availability: false,
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        coinId: 'BNB',
        availability: true,
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        coinId: 'LINK',
        availability: false,
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        coinId: 'NEO',
        availability: true,
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        coinId: 'ETC',
        availability: false,
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        coinId: 'ONT',
        availability: true,
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        coinId: 'CRO',
        availability: false,
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        coinId: 'CUC',
        availability: true,
        createdAt: Date.now(),
        updatedAt: Date.now()
    },
    {
        coinId: 'USDC',
        availability: false,
        createdAt: Date.now(),
        updatedAt: Date.now()
    },

]

export const FiatList = [
    {
        id: 'SGD',
        name: 'Singapore Dollar',
        symbol: '$',
        code: 'SGD'
    },
    {
        id: 'EUR',
        name: 'Euro',
        symbol: '€',
        code: 'EUR'
    },
    {
        id: 'GBP',
        name: 'British Pound',
        symbol: '£',
        code: 'GBP'
    },
    {
        id: 'HKD',
        name: 'Hong Kong Dollar',
        symbol: '$',
        code: 'HKD'
    },
    {
        id: 'JPY',
        name: 'Japanese Yen',
        symbol: '¥',
        code: 'JPY'
    },
    {
        id: 'AUD',
        name: 'Australian Dollar',
        symbol: '$',
        code: 'AUD'
    },
    {
        id: 'USD',
        name: 'United States Dollar',
        symbol: '$',
        code: 'USD'
    }
]

export enum CurrencyType {
    CRYPTO = 'CRYPTO',
    FIAT = 'FIAT',
    ALL = 'ALL'
}
