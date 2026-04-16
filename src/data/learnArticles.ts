import warCryptoImg from "@/assets/learn/war-crypto-markets.jpg";
import bitcoinGlobalImg from "@/assets/learn/bitcoin-global-news.jpg";
import safeCryptoImg from "@/assets/learn/safe-crypto-war.jpg";
import beginnerTradingImg from "@/assets/learn/beginner-trading.jpg";
import whatIsBitcoinImg from "@/assets/learn/what-is-bitcoin.jpg";
import blockchainImg from "@/assets/learn/blockchain-technology.jpg";
import inflationImg from "@/assets/learn/inflation-crypto.jpg";
import cryptoAppsImg from "@/assets/learn/crypto-apps-beginners.jpg";
import exchangeNewsImg from "@/assets/learn/exchange-news-market.jpg";
import globalMarketImg from "@/assets/learn/global-market-update.jpg";

export interface LearnArticle {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: "Beginner Guides" | "Trading Basics" | "Glossary" | "How-To";
  categorySlug: string;
  publishedAt: string;
  readTime: string;
  image: string;
}

export const learnArticles: LearnArticle[] = [
  {
    id: 101,
    title: "How Global Wars Affect Crypto Markets",
    slug: "how-global-wars-affect-crypto-markets",
    summary: "Understand how geopolitical conflicts create volatility in Bitcoin and the wider crypto market.",
    content: `Wars and geopolitical conflicts have a massive impact on financial markets — and crypto is no exception. When a major conflict breaks out, investors tend to panic. This panic causes rapid selling across all asset classes, including Bitcoin and Ethereum.

However, crypto has a unique dual nature during wars. In the short term, prices often drop sharply as investors move to cash and traditional safe havens like gold. But in the medium term, Bitcoin has sometimes acted as a "digital safe haven" — especially in countries directly affected by conflict where local currencies collapse.

During the Russia-Ukraine conflict in 2022, Bitcoin initially dropped 10% but then recovered as Ukrainians used crypto to receive donations and preserve wealth. Similar patterns emerged during other regional conflicts.

The key factors that drive crypto during wartime include: capital flight from affected regions, sanctions driving alternative payment methods, energy disruptions affecting mining, and general risk-off sentiment in global markets.

For investors, the lesson is clear: wars create short-term volatility but can also highlight crypto's unique value proposition as a borderless, censorship-resistant store of value. The best strategy is to avoid panic selling and focus on long-term fundamentals.

Understanding these dynamics helps you make better decisions during times of global uncertainty. Instead of reacting emotionally, informed investors can identify opportunities while managing their risk appropriately.`,
    category: "Trading Basics",
    categorySlug: "trading-basics",
    publishedAt: "2026-04-15T09:00:00Z",
    readTime: "7 min",
    image: warCryptoImg,
  },
  {
    id: 102,
    title: "Why Bitcoin Reacts to Global News",
    slug: "why-bitcoin-reacts-to-global-news",
    summary: "Learn the correlation between world events and Bitcoin price movements explained simply.",
    content: `Bitcoin doesn't exist in a vacuum. Every major global event — from central bank decisions to political upheavals — can move Bitcoin's price significantly. Understanding why helps you become a smarter investor.

Bitcoin reacts to global news for several key reasons. First, it's traded 24/7 across every country, making it one of the most liquid assets in the world. When news breaks at 3 AM, Bitcoin is still trading while stock markets are closed.

Second, Bitcoin is heavily influenced by macroeconomic factors. When the US Federal Reserve raises interest rates, Bitcoin often drops because investors prefer the safety of bonds. When rates are cut, Bitcoin tends to rise as investors seek higher returns.

Third, regulatory news has an outsized impact. When a country bans crypto, prices dip. When a country approves a Bitcoin ETF, prices surge. The market is extremely sensitive to government attitudes toward crypto.

Fourth, social media and sentiment play a huge role. A single tweet from a major figure can move Bitcoin by 5% or more. This is unique to crypto — traditional assets don't react this strongly to social media.

The correlation between Bitcoin and traditional markets has been increasing over time. In 2020, Bitcoin traded independently of stocks. By 2026, Bitcoin often moves in sync with the Nasdaq, especially during major market events.

For beginners, the key takeaway is: stay informed about global news, but don't trade based on headlines alone. Most short-term reactions are overblown, and the market usually corrects within days.`,
    category: "Trading Basics",
    categorySlug: "trading-basics",
    publishedAt: "2026-04-14T11:00:00Z",
    readTime: "6 min",
    image: bitcoinGlobalImg,
  },
  {
    id: 103,
    title: "Is Crypto Safe During War Conditions?",
    slug: "is-crypto-safe-during-war-conditions",
    summary: "Explore the risks and benefits of holding crypto during geopolitical tensions and conflicts.",
    content: `One of the most common questions during times of global tension is: should I hold crypto during a war? The answer is nuanced and depends on your situation.

The risks of holding crypto during wartime are real. Prices can drop 20-30% in a single day due to panic selling. Exchanges in affected regions may freeze withdrawals. Internet disruptions can prevent access to your funds. And the overall uncertainty can cause extreme volatility.

However, there are also compelling reasons why crypto can be valuable during conflicts. In countries directly affected by war, crypto provides a way to preserve wealth when local currencies collapse. It's borderless — you can carry your wealth in a hardware wallet across any border. And it's censorship-resistant — no government can freeze your Bitcoin.

During recent conflicts, we've seen crypto used for humanitarian aid, cross-border remittances, and wealth preservation by ordinary citizens. This real-world utility during crises has strengthened the case for crypto as a component of a diversified portfolio.

The best practices for crypto safety during geopolitical tension include: using hardware wallets for long-term storage, diversifying across multiple assets, keeping some holdings in stablecoins to reduce volatility, and never investing more than you can afford to lose.

For beginners, the advice is straightforward: if you're in a safe region, treat crypto like any other investment — don't panic sell based on headlines. If you're in an affected region, crypto might be one of the safest ways to protect your wealth, but make sure you have secure access to your private keys.`,
    category: "Beginner Guides",
    categorySlug: "beginner-guides",
    publishedAt: "2026-04-13T08:00:00Z",
    readTime: "6 min",
    image: safeCryptoImg,
  },
  {
    id: 104,
    title: "Beginner Guide: How to Start Crypto Trading in 2026",
    slug: "beginner-guide-crypto-trading-2026",
    summary: "A complete step-by-step guide to buying your first cryptocurrency safely in 2026.",
    content: `Starting your crypto journey in 2026 has never been easier — or more important to do correctly. This guide walks you through every step from zero to your first trade.

Step 1: Educate Yourself First. Before spending a single dollar, understand the basics. Bitcoin is digital money. Blockchain is the technology behind it. Exchanges are where you buy and sell. Wallets are where you store your crypto.

Step 2: Choose a Reliable Exchange. In 2026, the safest options for beginners are Coinbase (easiest to use), Binance (most features), and Kraken (best security). All three are regulated and have insurance on deposits.

Step 3: Complete Identity Verification. Every legitimate exchange requires KYC (Know Your Customer). You'll need a government ID and sometimes a selfie. This process takes 5-30 minutes and protects you from fraud.

Step 4: Start with a Small Amount. Deposit $50-$100 to start. Never invest money you need for rent, food, or emergencies. Crypto is volatile — your investment can lose 50% of its value in weeks.

Step 5: Buy Bitcoin or Ethereum First. Don't start with meme coins or obscure altcoins. BTC and ETH are the safest entry points. They have the longest track records and the most institutional support.

Step 6: Secure Your Account. Enable two-factor authentication (2FA) immediately. Use an authenticator app, not SMS. Create a strong, unique password. Consider a hardware wallet for amounts over $1,000.

Step 7: Learn to Read the Market. Understand basic concepts like market cap, volume, support/resistance, and the difference between market orders and limit orders. Free resources on YouTube and crypto education platforms can teach you this in a weekend.

Step 8: Develop a Strategy. Decide if you're investing long-term (holding for months/years) or trading short-term. For beginners, long-term holding (also called "HODLing") is almost always the better choice.

Remember: every successful crypto investor started exactly where you are now. Patience and education are your best tools.`,
    category: "Beginner Guides",
    categorySlug: "beginner-guides",
    publishedAt: "2026-04-12T10:00:00Z",
    readTime: "9 min",
    image: beginnerTradingImg,
  },
  {
    id: 105,
    title: "What Is Bitcoin? Simple Explanation",
    slug: "what-is-bitcoin-simple-explanation",
    summary: "Understand Bitcoin in plain English — no technical jargon, just clear explanations.",
    content: `Bitcoin is digital money. That's the simplest way to put it. But let's go a little deeper without making it complicated.

Imagine money that exists only on the internet. You can't hold it in your hand, but you can send it to anyone in the world in minutes, without needing a bank. That's Bitcoin.

Bitcoin was created in 2009 by someone using the name Satoshi Nakamoto. Nobody knows who this person really is. They published a paper explaining how Bitcoin works and then disappeared.

How does it work? Bitcoin runs on a technology called blockchain — think of it as a giant public notebook that records every Bitcoin transaction ever made. This notebook is stored on thousands of computers around the world, so no single person or company controls it.

There will only ever be 21 million Bitcoin. This is hardcoded into the system and cannot be changed. This scarcity is one reason why Bitcoin has value — it's like digital gold.

You don't need to buy a whole Bitcoin. You can buy a fraction — even $10 worth. Each Bitcoin can be divided into 100 million smaller units called "satoshis."

Bitcoin is valuable because: it's scarce (limited supply), it's decentralized (no government controls it), it's borderless (works the same everywhere), and it's secure (nearly impossible to hack the network).

Common misconceptions: Bitcoin is NOT anonymous (transactions are public), it's NOT only used by criminals (major companies accept it), and it's NOT too late to invest (we're still early in adoption).

For beginners: think of Bitcoin as a long-term savings technology. Don't try to get rich quick. Buy small amounts regularly and hold for years. That's how most Bitcoin millionaires built their wealth.`,
    category: "Glossary",
    categorySlug: "glossary",
    publishedAt: "2026-04-11T09:00:00Z",
    readTime: "5 min",
    image: whatIsBitcoinImg,
  },
  {
    id: 106,
    title: "What Is Blockchain Technology?",
    slug: "what-is-blockchain-technology",
    summary: "Blockchain explained in beginner-friendly language — the technology powering all cryptocurrencies.",
    content: `Blockchain is the technology that makes Bitcoin and all other cryptocurrencies possible. But what exactly is it?

Think of a blockchain as a digital ledger — like a spreadsheet that records transactions. But unlike a regular spreadsheet that sits on one computer, a blockchain is copied across thousands of computers worldwide.

Every time someone sends Bitcoin, that transaction is recorded as a "block" of data. This block is then linked to the previous block, forming a "chain" — hence the name blockchain.

What makes blockchain special is that once a block is added, it cannot be changed or deleted. This is called immutability. It means no one can cheat the system by altering past records.

There's no central authority controlling the blockchain. Instead, it's maintained by a network of computers (called nodes) that all agree on the current state of the ledger. This is called decentralization.

To add a new block, the network must reach consensus — meaning most computers must agree that the transaction is valid. This prevents fraud and double-spending.

Blockchain isn't just for cryptocurrency. It's being used in supply chain management (tracking where products come from), healthcare (securing medical records), voting systems (preventing election fraud), and digital identity (proving who you are online).

The most well-known blockchains are Bitcoin (for payments), Ethereum (for smart contracts and apps), and Solana (for fast, cheap transactions).

For beginners: you don't need to understand the technical details to use crypto. Just know that blockchain makes crypto secure, transparent, and trustworthy without needing a bank or government to verify transactions.`,
    category: "Glossary",
    categorySlug: "glossary",
    publishedAt: "2026-04-10T14:00:00Z",
    readTime: "5 min",
    image: blockchainImg,
  },
  {
    id: 107,
    title: "How Inflation Affects Crypto Prices",
    slug: "how-inflation-affects-crypto-prices",
    summary: "Learn how macroeconomic inflation impacts Bitcoin and cryptocurrency markets.",
    content: `Inflation is one of the biggest factors driving crypto prices, yet most beginners don't understand the connection. Let's break it down simply.

Inflation means your money buys less over time. When a loaf of bread costs $3 today and $4 next year, that's inflation. Governments cause inflation by printing more money — increasing the supply while demand stays the same.

Bitcoin was designed to be the opposite of inflationary currencies. Its supply is fixed at 21 million coins. No one can "print" more Bitcoin. This is why Bitcoin is often called "digital gold" — it's scarce by design.

When inflation is high, crypto often benefits. Here's why: investors look for assets that hold their value. If the dollar is losing purchasing power, putting money into Bitcoin (which has a fixed supply) can protect against that loss.

However, the relationship isn't always straightforward. When central banks fight inflation by raising interest rates, it can hurt crypto in the short term. Higher rates make bonds and savings accounts more attractive, pulling money away from risky assets like crypto.

The key metric to watch is "real interest rates" — the interest rate minus inflation. When real rates are negative (inflation is higher than interest rates), crypto tends to perform well. When real rates are positive, crypto faces headwinds.

In 2026, with global inflation still above central bank targets in many countries, Bitcoin continues to attract investors as an inflation hedge. Countries with the highest inflation rates — like Argentina, Turkey, and Nigeria — have some of the highest crypto adoption rates.

For beginners: pay attention to inflation news and central bank decisions. They have a direct impact on your crypto investments. But remember, crypto is still young and volatile — it's not a perfect inflation hedge yet, but it's getting better with each market cycle.`,
    category: "Trading Basics",
    categorySlug: "trading-basics",
    publishedAt: "2026-04-09T12:00:00Z",
    readTime: "7 min",
    image: inflationImg,
  },
  {
    id: 108,
    title: "Best Crypto Apps for Beginners",
    slug: "best-crypto-apps-for-beginners",
    summary: "A curated list of the most beginner-friendly crypto apps and platforms in 2026.",
    content: `Choosing the right app is one of the most important decisions for a crypto beginner. The wrong app can be confusing, expensive, or even unsafe. Here are the best options in 2026.

1. Coinbase — Best for Absolute Beginners. Coinbase has the simplest interface of any major exchange. Buying Bitcoin takes literally three taps. The learning section rewards you with free crypto for watching educational videos. Downside: fees are slightly higher than competitors.

2. Binance — Best for Growing Traders. Once you're comfortable with basics, Binance offers the most features: hundreds of trading pairs, staking, futures, and more. The "Lite" mode keeps things simple, while "Pro" mode gives advanced traders everything they need.

3. Trust Wallet — Best for Self-Custody. If you want to control your own crypto (not leave it on an exchange), Trust Wallet is the easiest self-custody wallet. It supports thousands of tokens and has a built-in browser for DeFi apps.

4. Kraken — Best for Security. Kraken has never been hacked (one of the few exchanges that can say this). It offers strong security features and a clean interface. Great for users who prioritize safety above all else.

5. Ledger Live — Best for Hardware Wallet Users. If you buy a Ledger hardware wallet (recommended for holdings over $1,000), the Ledger Live app manages everything. It combines the security of cold storage with the convenience of a mobile app.

Tips for choosing an app: Start with one exchange and learn it well before trying others. Always enable 2FA. Check the fee structure before trading. Make sure the app is available in your country. Read recent reviews — app quality can change quickly.

For beginners: start with Coinbase or Binance Lite. Once you're comfortable, explore others. Never use obscure apps or exchanges you haven't researched — scams are common in crypto.`,
    category: "How-To",
    categorySlug: "how-to",
    publishedAt: "2026-04-08T10:00:00Z",
    readTime: "6 min",
    image: cryptoAppsImg,
  },
  {
    id: 109,
    title: "How Exchange News Moves the Market",
    slug: "how-exchange-news-moves-the-market",
    summary: "Understand how announcements from Binance and other exchanges impact crypto prices.",
    content: `Cryptocurrency exchanges are the backbone of the crypto market. When a major exchange makes an announcement, prices react — sometimes violently. Here's why and how.

Listing Announcements: When Binance or Coinbase announces they're listing a new token, that token's price typically surges 50-200% within hours. This is because listing on a major exchange gives a token access to millions of new buyers. Savvy traders watch for listing rumors and buy before the announcement.

Fee Changes: When an exchange reduces or eliminates trading fees, it attracts more traders and volume. This increased activity can push prices up. Conversely, fee increases can reduce trading volume and put downward pressure on prices.

Security Incidents: Exchange hacks are every crypto investor's nightmare. When a major exchange gets hacked, the entire market often drops 5-15% as fear spreads. The Mt. Gox hack in 2014 and the FTX collapse in 2022 caused market-wide crashes.

Regulatory Actions: When regulators take action against an exchange (like the SEC suing Binance), it creates massive uncertainty. Traders worry about access to their funds, and prices drop across the board.

Product Launches: New features like staking programs, savings products, or derivatives trading can attract new capital to an exchange and boost the prices of related tokens.

Delistings: When an exchange removes a token, its price usually crashes as holders rush to sell before losing access to the trading pair.

For traders, staying informed about exchange news is crucial. Follow official exchange blogs, Twitter/X accounts, and reliable crypto news sites. Set up alerts for your favorite exchanges.

For beginners: the main takeaway is that exchanges have enormous power over crypto prices. Choose a reliable exchange, keep informed about major announcements, and don't panic when negative news hits — most exchange-related dips recover within weeks.`,
    category: "Trading Basics",
    categorySlug: "trading-basics",
    publishedAt: "2026-04-07T15:00:00Z",
    readTime: "7 min",
    image: exchangeNewsImg,
  },
  {
    id: 110,
    title: "Crypto Market Update: Current Global Situation",
    slug: "crypto-market-update-global-situation",
    summary: "A comprehensive overview of the current crypto market including volatility, war effects, and investor sentiment.",
    content: `The crypto market in April 2026 is navigating a complex landscape of geopolitical tensions, macroeconomic shifts, and evolving regulation. Here's a comprehensive overview of where things stand.

Market Overview: Bitcoin is trading near $97,000, having recovered from a dip to $85,000 caused by escalating tensions in the Middle East. Ethereum holds steady around $5,200, buoyed by its recent Pectra upgrade. Total crypto market cap stands at approximately $4.2 trillion.

Geopolitical Impact: Ongoing conflicts and diplomatic tensions continue to create periodic volatility. Each escalation triggers a 3-8% dip in Bitcoin, followed by recovery within 1-2 weeks. The pattern suggests that while wars create short-term fear, the long-term trajectory remains upward.

Inflation Concerns: Global inflation remains stubbornly above targets in most major economies. The US CPI sits at 3.2%, the EU at 2.8%, and emerging markets face even higher rates. This persistent inflation continues to drive interest in Bitcoin as an inflation hedge.

Institutional Adoption: Bitcoin ETFs now hold over $150 billion in assets under management. Major corporations including Apple and Amazon have added Bitcoin to their balance sheets. This institutional backing provides a floor for prices that didn't exist in previous cycles.

Regulatory Landscape: The EU's MiCA framework is fully implemented, providing clarity for European crypto businesses. The US is making progress with a comprehensive crypto bill expected to pass by Q3 2026. This regulatory clarity is attracting more institutional capital.

Fear & Greed Index: Currently at 62 (Greed), indicating moderate optimism. The index reached 85 (Extreme Greed) in March before the geopolitical selloff pulled it back. Historical data suggests this level often precedes continued upward movement.

DeFi and Layer 2s: Total Value Locked across DeFi protocols has reached $180 billion, an all-time high. Layer 2 solutions on Ethereum are processing more transactions than Ethereum mainnet, with fees under $0.05.

For beginners: the current market is cautiously optimistic. The fundamentals are strong (institutional adoption, regulatory clarity, technological improvements), but short-term volatility from geopolitical events creates both risks and opportunities. Stay informed, don't over-leverage, and focus on the long-term picture.`,
    category: "Beginner Guides",
    categorySlug: "beginner-guides",
    publishedAt: "2026-04-16T08:00:00Z",
    readTime: "8 min",
    image: globalMarketImg,
  },
];

export function getLearnArticleBySlug(slug: string): LearnArticle | undefined {
  return learnArticles.find((a) => a.slug === slug);
}

export function getLearnArticlesByCategory(categorySlug: string): LearnArticle[] {
  return learnArticles.filter((a) => a.categorySlug === categorySlug);
}

export function getRelatedLearnArticles(article: LearnArticle, limit = 3): LearnArticle[] {
  return learnArticles
    .filter((a) => a.id !== article.id && a.categorySlug === article.categorySlug)
    .slice(0, limit);
}
