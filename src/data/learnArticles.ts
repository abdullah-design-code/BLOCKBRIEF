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
import walletsImg from "@/assets/learn/crypto-wallets.jpg";
import buyBitcoinImg from "@/assets/learn/buy-bitcoin-safely.jpg";
import scamsImg from "@/assets/learn/crypto-scams.jpg";
import termsImg from "@/assets/learn/crypto-terms.jpg";
import readingChartsImg from "@/assets/learn/reading-charts.jpg";
import supportResistanceImg from "@/assets/learn/support-resistance.jpg";
import orderTypesImg from "@/assets/learn/order-types.jpg";
import riskMgmtImg from "@/assets/learn/risk-management.jpg";
import rsiMaImg from "@/assets/learn/rsi-moving-averages.jpg";
import psychologyImg from "@/assets/learn/market-psychology.jpg";
import mcapImg from "@/assets/learn/glossary-marketcap.jpg";
import volumeImg from "@/assets/learn/glossary-volume.jpg";
import bullImg from "@/assets/learn/glossary-bull.jpg";
import bearImg from "@/assets/learn/glossary-bear.jpg";
import altcoinImg from "@/assets/learn/glossary-altcoin.jpg";
import liquidityImg from "@/assets/learn/glossary-liquidity.jpg";
import howtoWalletImg from "@/assets/learn/howto-create-wallet.jpg";
import howtoBuyImg from "@/assets/learn/howto-buy-crypto.jpg";
import howtoTransferImg from "@/assets/learn/howto-transfer.jpg";
import howtoStopLossImg from "@/assets/learn/howto-stop-loss.jpg";
import howtoPortfolioImg from "@/assets/learn/howto-portfolio.jpg";

export interface LearnArticle {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  whatItMeans?: string;
  beginnerTip?: string;
  category: "Beginner Guides" | "Trading Basics" | "Glossary" | "How-To";
  categorySlug: string;
  publishedAt: string;
  readTime: string;
  image: string;
}

export const learnArticles: LearnArticle[] = [
  // ============== BEGINNER GUIDES ==============
  {
    id: 201,
    title: "What Is Bitcoin? A Simple Explanation",
    slug: "what-is-bitcoin-simple-explanation",
    summary: "Bitcoin explained in plain English — what it is, how it works, and why people are talking about it.",
    category: "Beginner Guides",
    categorySlug: "beginner-guides",
    publishedAt: "2026-04-16T09:00:00Z",
    readTime: "7 min",
    image: whatIsBitcoinImg,
    whatItMeans: "Bitcoin is internet-native money. You can send it anywhere in the world without asking a bank for permission, and no government can print more of it.",
    beginnerTip: "Don't try to understand every technical detail at once. Start by buying $20 of Bitcoin on a regulated exchange and watching how it moves for a month. Hands-on experience teaches faster than any article.",
    content: `## The Simplest Definition

Bitcoin is digital money that lives on the internet. Unlike the dollars in your bank account, no single company, government, or person controls it. It runs on a global network of computers that work together to keep records honest.

Bitcoin was created in 2009 by an anonymous person (or group) using the name **Satoshi Nakamoto**. They published a 9-page paper explaining the idea, released the software for free, and disappeared. Nobody has ever proven who they really are.

## How Does It Actually Work?

Imagine a giant public spreadsheet that lists every Bitcoin transaction ever made. This spreadsheet is copied to thousands of computers around the world. Whenever someone sends Bitcoin, the network checks the spreadsheet to make sure the sender actually has the coins, then updates every copy at once.

This spreadsheet is called a **blockchain**. Because it's stored on so many computers, no single party can fake a transaction or steal your money by hacking one server.

## Why Is Bitcoin Valuable?

Bitcoin has value for four main reasons:

1. **Scarcity.** Only 21 million Bitcoin will ever exist. The code makes it impossible to create more. Compare that to dollars, where central banks can print trillions whenever they want.
2. **Decentralization.** No CEO, no head office, no country can shut Bitcoin down. It's been running 24/7 since 2009 without a single hour of downtime.
3. **Borderless transfers.** You can send Bitcoin from New York to Tokyo in 10 minutes for less than a dollar. Try doing that with a wire transfer.
4. **Censorship resistance.** Banks can freeze your account. Governments can block payments. Bitcoin can't be blocked once you control your private keys.

## A Real-World Example

Say you live in Argentina, where the local currency loses 100% of its value every couple of years. If you saved 1,000,000 pesos in 2020, by 2024 it might buy you a single dinner. If you had bought $1,000 worth of Bitcoin instead, you'd still have $1,000 worth of buying power (often more). That's why countries with unstable currencies have some of the highest Bitcoin adoption rates in the world.

## Common Misconceptions

- **"Bitcoin is anonymous."** False. Every transaction is public forever. Bitcoin is *pseudonymous*, not anonymous.
- **"It's only used for crime."** False. Less than 0.5% of Bitcoin transactions are linked to illegal activity. Cash is used for crime far more.
- **"It's too late to invest."** Maybe. But people said that at $100, $1,000, $10,000, and $50,000. Nobody knows the future.
- **"It has no real value."** Gold also has no industrial use beyond jewelry and electronics, yet humans have valued it for 5,000 years. Value is whatever people agree it is.

## You Don't Need to Buy a Whole Bitcoin

This is the biggest barrier for beginners. You don't need $97,000 to own Bitcoin. Each coin can be split into 100,000,000 tiny pieces called **satoshis** (or "sats"). You can buy $5 of Bitcoin and own around 5,000 sats.

## How Do People Actually Use Bitcoin?

Most people today buy Bitcoin as a long-term investment, like digital gold. A smaller group uses it for cross-border payments and remittances. A growing number of merchants — from Microsoft to small coffee shops in El Salvador — accept it as payment. And in countries with capital controls, Bitcoin is a lifeline for ordinary people.

## What Are the Risks?

Bitcoin is volatile. It can swing 10-20% in a single week. It has dropped 80% multiple times in its history. It can be lost forever if you forget your password. And the regulatory landscape is still evolving in many countries. Never invest money you can't afford to lose.

## The Bottom Line

Bitcoin is the first form of money in human history that is digital, scarce, and not controlled by any government. Whether it changes the world or fades away is still being decided — but understanding it is no longer optional in 2026.`,
  },
  {
    id: 202,
    title: "What Is Blockchain? Explained Simply",
    slug: "what-is-blockchain-explained-simply",
    summary: "The technology behind Bitcoin and every cryptocurrency, explained without the jargon.",
    category: "Beginner Guides",
    categorySlug: "beginner-guides",
    publishedAt: "2026-04-15T10:00:00Z",
    readTime: "6 min",
    image: blockchainImg,
    whatItMeans: "A blockchain is a shared record book that nobody can secretly change. It's how strangers on the internet can agree on who owns what, without needing a bank in the middle.",
    beginnerTip: "You don't need to understand the math behind blockchain to use crypto, just like you don't need to understand TCP/IP to send an email. Focus on what it enables, not how it works internally.",
    content: `## A Simple Picture

Imagine a notebook where every page records a list of transactions. Once a page is full, it gets sealed with a unique fingerprint and the next page begins. Each new page also references the fingerprint of the previous page, creating a permanent chain.

Now imagine that this notebook isn't kept in one place. Instead, **identical copies** are held by thousands of people around the world. Whenever someone wants to add a new page, all the copies have to agree it's valid. If anyone tries to cheat, the rest of the network rejects them.

That's a blockchain.

## Why It's Revolutionary

Before blockchain, the only way two strangers could agree on a transaction was through a trusted middleman — a bank, a notary, a government. Blockchain replaces that middleman with math and a global network. For the first time in history, you can prove ownership of something digital without anyone's permission.

## The Three Key Properties

1. **Decentralized.** No single party controls the data. Thousands of computers (called nodes) maintain it together.
2. **Immutable.** Once data is added and confirmed, it can't be edited or deleted. The math makes tampering essentially impossible.
3. **Transparent.** Anyone can read the entire history. You can look up any transaction ever made on Bitcoin from your phone right now.

## How a Transaction Actually Travels

Let's say Sarah wants to send 0.1 BTC to Mike:

1. Sarah uses her wallet to sign the transaction with her **private key** (basically a digital signature).
2. The transaction is broadcast to the network.
3. Computers called **miners** (or **validators** on other chains) collect the transaction along with hundreds of others.
4. They bundle them into a block and compete to solve a math puzzle that "seals" the block.
5. Once sealed, the block is added to the chain and copied across the entire network.
6. Mike's wallet sees the transaction and his balance updates.

The whole process takes about 10 minutes on Bitcoin and a few seconds on faster chains like Solana.

## Beyond Crypto: What Else Can Blockchain Do?

Blockchain is a general-purpose tool for recording anything where trust matters:

- **Supply chains.** Walmart uses blockchain to trace produce from farm to store in seconds instead of days.
- **Real estate.** Some countries use blockchain to record land titles, preventing fraud.
- **Voting.** Pilot programs in Switzerland and Estonia use blockchain to secure election results.
- **Music & art.** NFTs (non-fungible tokens) prove digital ownership of artwork or songs.
- **Identity.** You can prove you're over 18 without revealing your name or address.

## The Two Big Categories

**Public blockchains** like Bitcoin and Ethereum are open to everyone. Anyone can use them, run a node, or build apps on top.

**Private blockchains** are run by single companies (like a bank using one internally). They use the same technology but trade openness for control.

## What's the Catch?

Blockchains aren't magic. They have real trade-offs:

- **Speed.** Public blockchains are slower than centralized databases.
- **Energy.** Bitcoin uses about as much electricity as a small country (though increasingly from renewable sources).
- **Complexity.** The user experience is still rough. Lose your private key and your funds are gone forever.
- **Scalability.** Most blockchains struggle to handle millions of transactions per second the way Visa does.

Researchers and developers are actively solving these problems with Layer 2s, sharding, and proof-of-stake.

## The Bottom Line

Blockchain is a way to keep a shared record of who owns what without trusting a middleman. Bitcoin was the first big use case, but the technology is now powering everything from finance to gaming to digital identity. Understanding it puts you a step ahead of 95% of internet users.`,
  },
  {
    id: 203,
    title: "Crypto Wallets Explained (Hot vs Cold)",
    slug: "crypto-wallets-hot-vs-cold",
    summary: "Hot wallets vs cold wallets — what they are, when to use each, and how to keep your crypto safe.",
    category: "Beginner Guides",
    categorySlug: "beginner-guides",
    publishedAt: "2026-04-14T11:00:00Z",
    readTime: "8 min",
    image: walletsImg,
    whatItMeans: "A wallet doesn't actually 'hold' your crypto. It holds the secret keys that prove you own it. Hot wallets are connected to the internet (convenient but riskier). Cold wallets are offline (slightly clunky but very safe).",
    beginnerTip: "Use a hot wallet for amounts you'd carry in your physical wallet (under $500). Anything bigger belongs on a hardware wallet you control yourself.",
    content: `## What a Wallet Actually Is

A crypto wallet is a small piece of software (or hardware) that stores **two things**: a public address (like your account number) and a private key (like your password and signature combined). Your coins live on the blockchain — your wallet just proves you're allowed to move them.

If you lose your private key, you lose your coins. There's no "forgot password" button. This is the single most important concept in crypto.

## Hot Wallets: Connected to the Internet

A **hot wallet** is any wallet that's connected to the internet. Examples include:

- Mobile apps like Trust Wallet, MetaMask, Phantom
- Browser extensions like MetaMask or Rabby
- Exchange wallets on Binance, Coinbase, Kraken
- Web wallets you log into through a browser

**Pros:** Fast, free, easy to use. Great for day-to-day spending, trading, and interacting with DeFi or NFTs.

**Cons:** Because they're online, they can be hacked through malware, phishing, or compromised devices. If your phone is stolen and unlocked, an attacker may drain the wallet.

## Cold Wallets: Offline Storage

A **cold wallet** keeps your private keys completely offline. The two main types are:

1. **Hardware wallets** like Ledger, Trezor, and BitBox — small USB-like devices that sign transactions inside a secure chip. Even if your computer is infected with malware, the keys never leave the device.
2. **Paper wallets** — your keys printed or written on paper and locked in a safe. Old-school but bulletproof if done right.

**Pros:** Almost impossible to hack remotely. Even nation-state attackers struggle with hardware wallets. Perfect for long-term storage of large amounts.

**Cons:** Cost money ($60-$200 for a hardware wallet). Slightly slower for transactions. You have to physically have the device.

## A Real-World Example

Think of crypto wallets like cash management:

- **Hot wallet** = the cash in your physical wallet. You take it out for daily spending. If you lose it, it hurts but it's not life-ruining.
- **Cold wallet** = your savings account or a safe at home. You move money to your wallet only when you need it.

Most experienced crypto users have both. They keep small amounts on a phone wallet for swaps and trades, and the bulk of their portfolio on a hardware wallet at home.

## Custodial vs Non-Custodial

This is the other key distinction:

- **Custodial wallets** (like the wallet on Coinbase) — the exchange holds your keys. You log in with email and password. Convenient, but if the exchange goes bankrupt (remember FTX), you might lose everything. "Not your keys, not your coins."
- **Non-custodial wallets** (MetaMask, Ledger) — you hold the keys. You're 100% in control and 100% responsible. No company can freeze, lose, or steal your funds.

## How to Set Up a Hardware Wallet (Quick Overview)

1. Buy directly from the manufacturer's website. Never buy used or from third parties — they may be tampered with.
2. Set it up in a private room. Write down the 12 or 24-word **seed phrase** on paper.
3. Store the seed phrase in a fireproof safe, or split it across two locations.
4. Never type the seed phrase into a computer or phone, ever. No support agent will ever ask for it.
5. Send a small test amount first to make sure everything works before transferring large sums.

## The 5 Rules of Wallet Safety

1. **Never share your seed phrase.** Not with friends, not with "support," not with anyone.
2. **Verify addresses character by character** before sending. Malware can swap clipboard addresses.
3. **Use a different password** for every exchange and wallet.
4. **Enable 2FA** with an authenticator app (not SMS — SIM swaps are real).
5. **Test small amounts first** when sending to a new address.

## Which Wallet Should You Pick?

- **Just starting out?** Use the wallet built into a regulated exchange like Coinbase or Kraken. It's training wheels.
- **Trading or using DeFi?** MetaMask (for Ethereum/EVM chains) or Phantom (for Solana).
- **Holding more than $1,000 long-term?** Buy a Ledger or Trezor. The $80 is the cheapest insurance you'll ever buy.
- **Holding life-changing money?** Use a hardware wallet plus a multi-signature setup so no single point of failure can drain you.

## The Bottom Line

The wallet decision is really about a trade-off between convenience and security. Match the security level to the amount you're holding. Treat your seed phrase like the master key to your entire crypto life — because it is.`,
  },
  {
    id: 204,
    title: "How to Start Crypto Trading (Step-by-Step)",
    slug: "how-to-start-crypto-trading",
    summary: "A complete beginner's roadmap from zero to your first trade, with safety tips at every step.",
    category: "Beginner Guides",
    categorySlug: "beginner-guides",
    publishedAt: "2026-04-13T09:00:00Z",
    readTime: "10 min",
    image: beginnerTradingImg,
    whatItMeans: "Starting to trade crypto is mostly about following a safe checklist: pick a regulated exchange, lock down your account, start tiny, and learn before you bet big.",
    beginnerTip: "Your first goal isn't to make money — it's to not lose money while you learn. Trade with $50 for your first 90 days. The lessons are the same; the losses are smaller.",
    content: `Starting to trade crypto in 2026 is easier than ever, but the mistakes are also more expensive. This guide walks you through the entire path — from creating your first account to placing your first trade — without the hype.

## Step 1: Set Realistic Expectations

Crypto is volatile. Bitcoin has dropped 80% multiple times. Most altcoins eventually go to zero. The "get rich overnight" stories you see online ignore the 95% of people who lose money trying.

A realistic goal for your first year: **don't lose more than 20% of your starting capital while you learn**. If you can do that, you're already ahead of most beginners.

## Step 2: Pick a Reliable Exchange

In 2026, the safest exchanges for beginners are:

- **Coinbase** — Easiest interface, US-regulated, slightly higher fees.
- **Kraken** — Strong security record, never been hacked, great for serious users.
- **Binance** — Most features and lowest fees, but interface is overwhelming at first.
- **Bitstamp / Gemini** — Solid second-tier options if the above don't serve your country.

Avoid: unregulated exchanges, brand-new exchanges nobody talks about, and any platform that won't let you withdraw to your own wallet.

## Step 3: Verify Your Identity (KYC)

Every legitimate exchange requires Know-Your-Customer verification. You'll need:

- Government-issued ID (passport or driver's license)
- A selfie or short video
- Proof of address (utility bill or bank statement)

This takes 5 minutes to 24 hours. Yes, it's annoying. No, you can't skip it on a real exchange. Anywhere that *doesn't* ask is probably a scam.

## Step 4: Lock Down Your Account

Before you deposit a single dollar:

1. Create a unique password (use a password manager).
2. Enable 2FA with **Google Authenticator** or **Authy** — never SMS.
3. Add an account recovery email separate from your main one.
4. Set a withdrawal whitelist so funds can only go to addresses you pre-approve.
5. Turn on email alerts for every login and withdrawal.

These five steps stop 99% of attacks before they start.

## Step 5: Make Your First Deposit

Start with an amount you genuinely don't need. Rent money is not crypto money. A good rule: never deposit more than 5% of your liquid savings during your first six months.

Bank transfer is usually free and takes 1-3 days. Debit cards are instant but charge 2-4%. For a first deposit, a few days is worth saving the fee.

## Step 6: Buy Bitcoin or Ethereum First

Don't start with meme coins or unknown altcoins. The two safest entries are **BTC** and **ETH** because they have:

- The longest track records (15+ and 10+ years)
- The most institutional backing
- The most liquidity (you can always sell)

Allocate maybe 70% to BTC/ETH and only experiment with smaller coins after you understand how the market moves.

## Step 7: Understand Order Types

There are two basic order types you must understand:

- **Market order** — buys instantly at the current price. Simple, but you might pay slightly more than expected if the market moves.
- **Limit order** — buys only at the price you set. Slower, but you control the entry exactly.

Beginners should use limit orders. Setting a target price forces you to think before you click.

## Step 8: Learn to Read Basic Charts

Open the chart on your exchange. You'll see candlesticks — green for price going up, red for going down. Each candle represents a time period (1 minute, 1 hour, 1 day, etc.).

Three things to look for:

1. The overall trend (up, down, or sideways)
2. Support levels (prices where buyers tend to step in)
3. Resistance levels (prices where sellers tend to take profit)

You don't need to be a charting wizard to start, but you should be able to glance at a chart and tell which way the trend is going.

## Step 9: Place Your First Trade

Here's the workflow:

1. Pick a coin (start with BTC).
2. Decide your buy price using the current chart.
3. Place a limit buy order at that price.
4. Set a mental or actual stop-loss 10-15% below.
5. Set a take-profit target where you'll sell, even partially.
6. Walk away from the screen.

Most losses happen because traders stare at charts all day and react emotionally.

## Step 10: Develop a Strategy

Decide upfront which type of trader you want to be:

- **Long-term holder (HODLer)** — buys regularly and holds for years. Lowest stress, historically the best returns.
- **Swing trader** — holds for days or weeks, trying to catch bigger moves. Requires real chart skills.
- **Day trader** — buys and sells within a single day. Looks exciting on YouTube. Most lose money.

For 95% of beginners, long-term holding (especially **dollar-cost averaging** — buying the same dollar amount every week regardless of price) outperforms any other approach.

## Common Mistakes to Avoid

- Investing money you need for bills.
- Buying because a coin is "going up fast."
- Selling everything in panic during a 20% dip.
- Trying to time the bottom.
- Putting everything into one coin.
- Trusting random Twitter influencers.

## The Bottom Line

Successful crypto traders are mostly disciplined, patient, and unemotional. They're not geniuses. They follow a system, control their risk, and let time do the heavy lifting. Start small, take it seriously, and the journey gets a lot easier.`,
  },
  {
    id: 205,
    title: "How to Buy Bitcoin Safely",
    slug: "how-to-buy-bitcoin-safely",
    summary: "A safety-first walkthrough on purchasing Bitcoin without losing money to scams or bad platforms.",
    category: "Beginner Guides",
    categorySlug: "beginner-guides",
    publishedAt: "2026-04-12T10:00:00Z",
    readTime: "7 min",
    image: buyBitcoinImg,
    whatItMeans: "Buying Bitcoin safely means using a regulated exchange, locking down your account before you deposit, and moving large amounts to a hardware wallet you control.",
    beginnerTip: "After your first purchase, immediately practice withdrawing $5 worth to your own wallet. Learning how withdrawals work on small amounts is far better than panicking the first time you try it with real money.",
    content: `Buying Bitcoin sounds simple — and it is — but the difference between a safe purchase and an expensive disaster usually comes down to a few choices most beginners don't think about. Here's how to do it right.

## Step 1: Choose a Regulated Exchange

This is the most important decision. Stick to exchanges that:

- Are licensed in your country (check the regulator's website to confirm)
- Have been operating for at least 5 years
- Hold customer funds in cold storage with insurance
- Have transparent leadership and a clean public record

The safest options in most regions are **Coinbase, Kraken, Gemini, Bitstamp, and Binance**. Avoid any exchange that promises "guaranteed returns" or only operates through Telegram.

## Step 2: Verify Your Identity Properly

Real exchanges require KYC. The process takes 5-30 minutes and protects you, not just the exchange. Have ready:

- Government ID
- Phone with a working camera (for the selfie step)
- A utility bill if proof of address is requested

Don't use VPNs to bypass restrictions. If your country isn't supported, your funds may get frozen.

## Step 3: Secure Your Account Before Depositing

Before sending any money, lock the account down:

1. Use a unique 16+ character password (password manager strongly recommended).
2. Enable **app-based 2FA** (Google Authenticator or Authy). Skip SMS — SIM swaps are real attacks.
3. Set a **withdrawal whitelist** so only your pre-approved addresses can receive coins.
4. Enable login alerts so any new device triggers an email.

## Step 4: Pick the Right Funding Method

| Method | Speed | Fee | Best for |
|--------|-------|------|----------|
| Bank transfer | 1-3 days | Free / low | Larger amounts |
| Debit card | Instant | 2-4% | Small first purchase |
| PayPal/Apple Pay | Instant | High | Convenience only |
| Wire transfer | Same day | $10-25 flat | Large purchases |

For a first-time buyer experimenting with $50-200, a debit card is fine. For larger amounts, always use bank transfer to save on fees.

## Step 5: Buy with a Limit Order

A market order buys instantly at whatever price the market is at. A **limit order** lets you set the exact price you're willing to pay. Set the limit slightly below the current price and wait — you might save 0.5-2% on the first buy.

## Step 6: Verify the Transaction

After purchase, check that:

- The amount of BTC matches what you expected
- The fee charged matches the fee shown before confirming
- Your portfolio total is updated

If anything looks off, contact support immediately.

## Step 7: Move It Off the Exchange (For Larger Amounts)

The phrase **"not your keys, not your coins"** exists for a reason. If you're holding more than $500-1,000 long-term, withdraw to your own wallet:

1. Set up a hardware wallet (Ledger or Trezor).
2. Generate your receive address inside the wallet app.
3. **Send a small test amount first** ($5-10) and confirm it arrives.
4. Once confirmed, withdraw the bulk of your holdings.

This protects you from exchange hacks, bankruptcies, and account freezes.

## Common Scams to Watch Out For

- **Fake websites.** Always type the exchange URL manually or use a bookmark. Phishing sites copy the real one perfectly.
- **"Support agents" in DMs.** No real support team will message you first on Telegram or Twitter.
- **Investment groups.** Anyone "guaranteeing" 20% monthly returns is running a Ponzi.
- **Romance scams.** "Pig butchering" scammers build trust over weeks, then convince you to invest in their fake exchange.
- **Fake apps.** Always download from the official App Store / Play Store and check the developer name matches the exchange's real one.

## How Much Should You Buy?

This is personal, but a few rules of thumb:

- Never invest money you need for rent, food, debt, or emergencies.
- Limit crypto to 1-10% of your total net worth as a beginner.
- **Dollar-cost average** instead of going all-in. Buying the same amount every week smooths out volatility and removes emotion.

## After Your First Purchase

1. Write down your wallet seed phrase (if using non-custodial) on paper.
2. Store it in a fireproof safe — never a photo on your phone.
3. Set a reminder to check your account once a week, no more.
4. Resist the urge to trade. Long-term holders almost always outperform active traders.

## The Bottom Line

Buying Bitcoin safely is mostly about discipline: pick the right exchange, secure the account, buy with a limit order, and move the bulk to a wallet you control. Do those four things and you're already safer than 90% of crypto buyers.`,
  },
  {
    id: 206,
    title: "Common Crypto Scams and How to Avoid Them",
    slug: "common-crypto-scams-how-to-avoid",
    summary: "Phishing, rug pulls, fake support, and pig butchering — the scams every crypto user must recognize.",
    category: "Beginner Guides",
    categorySlug: "beginner-guides",
    publishedAt: "2026-04-11T08:00:00Z",
    readTime: "8 min",
    image: scamsImg,
    whatItMeans: "Crypto scams are mostly old tricks dressed in new clothes. They almost always involve someone pressuring you to act fast, share a secret, or send money to a stranger.",
    beginnerTip: "If something feels rushed, secret, or too good to be true, stop and wait 24 hours before doing anything. No legitimate opportunity ever expires in five minutes.",
    content: `Crypto moves fast and is mostly irreversible — the perfect playground for scammers. Knowing how each scam works is your single best defense. Here are the most common tricks of 2026 and how to spot them.

## 1. Phishing Sites & Fake Wallets

Scammers create exact copies of popular exchanges and wallet apps. You log in, they steal your password, and your funds vanish.

**How to spot it:** Always type URLs manually or use bookmarks. Never click "exchange login" links from emails. Check the exact spelling — "bynance.com" and "binance-secure.com" are not Binance.

**Defense:** Use a password manager (it auto-fills only on the real domain). Bookmark official sites. Download apps only from the App Store or Play Store, and confirm the developer name.

## 2. Fake Support Agents

You post a question in a Telegram group or Discord. Within minutes, a "support agent" DMs you offering help. They ask for your seed phrase or send you to a "secure verification" link.

**Reality:** Real support never DMs first. Real support never asks for your seed phrase, password, or private key. Ever.

**Defense:** Disable DMs from non-friends in Telegram and Discord. Only contact support through the official help center on the exchange's website.

## 3. Rug Pulls

A new token launches with massive hype. Influencers shill it. Price 10x's in days. Then the team drains the liquidity pool and disappears. Your tokens become worthless overnight.

**How to spot it:**
- Anonymous team
- No working product, just promises
- Liquidity not locked
- Founders hold a large % of supply
- Hype is purely on Twitter/Telegram, no real traction

**Defense:** Only buy established coins (top 100 by market cap) until you really know what you're doing. For new launches, check if liquidity is locked on rugcheck.xyz or similar tools.

## 4. Pig Butchering Scams

The fastest-growing crypto scam of 2026. Scammers build a relationship with you over weeks (often pretending to be a romantic interest or successful "friend"). Once trust is established, they mention a "great investment opportunity" — usually a fake trading platform showing fake gains. You "invest" more and more. When you try to withdraw, you find out it was all fake.

**How to spot it:** Anyone who messages you randomly and steers the conversation toward investing. Photos that look like models. Stories that don't quite add up. Pressure to deposit "before the opportunity closes."

**Defense:** Never invest based on advice from someone you've only met online. Reverse-image-search their photos. If they refuse a video call, run.

## 5. Fake Airdrops & Free Token Scams

You receive an unexpected token in your wallet. To "claim" it, you visit a website that asks you to connect your wallet and approve a transaction. The transaction drains everything you own.

**Defense:** Never interact with random tokens that appear in your wallet. Never connect your wallet to a site you didn't visit intentionally. Use a separate "burner" wallet for experimenting with new dApps.

## 6. Impersonation Scams

Fake Elon Musk videos, fake Vitalik Buterin tweets, fake celebrity endorsements promising to "double your Bitcoin if you send some first." This is one of the oldest tricks in crypto and it still works because new people enter every day.

**Defense:** **Nobody is doubling your money.** No real celebrity is running a giveaway that requires you to send crypto first.

## 7. Investment & Trading Bots

Telegram and Discord groups promise "AI trading bots" with guaranteed 5% daily returns. They show fake screenshots, fake testimonials, and a slick website. Inside, it's a Ponzi — early users get paid with new users' deposits until the music stops.

**Math check:** 5% per day compounded over a year would turn $100 into $50 million. If it worked, the founders would already own the world.

## 8. SIM Swap Attacks

Attackers convince your phone carrier to transfer your number to their SIM card. They then receive your SMS 2FA codes and reset your accounts.

**Defense:** Use **app-based 2FA** (Google Authenticator, Authy) — never SMS. Set a port-out PIN with your carrier. Use a separate recovery email that nobody knows.

## 9. Malicious Browser Extensions

Fake MetaMask extensions and "free crypto" Chrome plugins steal your seed phrase the moment you type it.

**Defense:** Only install extensions from official websites. Check the developer, the install count, and the reviews. Periodically audit what extensions are installed in your browser.

## 10. "Recovery" Scammers (The Second Wave)

You got scammed once. Now a new "recovery service" promises to get your stolen crypto back — for a small upfront fee. They take the fee and disappear too.

**Defense:** Stolen crypto is almost never recovered. If recovery were possible, law enforcement would do it. Never pay anyone who promises to bring back lost funds.

## The 5 Universal Red Flags

1. **Urgency.** "Act now or miss out forever."
2. **Secrecy.** "Don't tell anyone about this."
3. **Guaranteed returns.** Markets don't guarantee anything.
4. **Asking for your seed phrase.** Always a scam, no exceptions.
5. **Requiring you to send crypto first.** No legitimate process works this way.

## The Bottom Line

Crypto scams work because they exploit emotion: greed, fear, loneliness, urgency. Take a breath. Sleep on every decision. The opportunities that disappear in five minutes were never opportunities.`,
  },
  {
    id: 207,
    title: "Crypto Terms Every Beginner Must Know",
    slug: "crypto-terms-every-beginner-must-know",
    summary: "HODL, FOMO, gas fees, halving — the essential crypto vocabulary, explained simply.",
    category: "Beginner Guides",
    categorySlug: "beginner-guides",
    publishedAt: "2026-04-10T09:00:00Z",
    readTime: "7 min",
    image: termsImg,
    whatItMeans: "Crypto has its own language. Once you know the 30 most common words, almost every news article, tweet, and chart starts to make sense.",
    beginnerTip: "Don't try to memorize all of these at once. Bookmark this page and look up terms as they come up in real conversations or news. The vocabulary sticks faster when you have context.",
    content: `Crypto has built up its own vocabulary over 15 years. New terms can feel intimidating, but most are simple ideas with funny names. Here's a beginner-friendly tour of the words you'll see most often.

## Core Concepts

**Bitcoin (BTC)** — The first and largest cryptocurrency. Often called "digital gold."

**Altcoin** — Any cryptocurrency that isn't Bitcoin. Ethereum, Solana, and Dogecoin are all altcoins.

**Blockchain** — The shared, public record book that tracks who owns what.

**Token vs Coin** — A *coin* runs on its own blockchain (BTC, ETH, SOL). A *token* runs on top of another blockchain (USDT and SHIB run on Ethereum).

**Stablecoin** — A token designed to always equal $1, like USDT or USDC. Used to park funds without converting to dollars.

## Trading Vocabulary

**HODL** — Originally a typo of "hold," now means "keep it for the long term, ignore short-term price moves."

**FOMO** — Fear Of Missing Out. The emotional urge to buy because price is going up fast. Usually leads to losses.

**FUD** — Fear, Uncertainty, Doubt. Negative news (true or fake) that makes prices drop.

**Bull market** — Prices rising, optimism high.

**Bear market** — Prices falling, sentiment low.

**ATH / ATL** — All-Time High / All-Time Low. The highest or lowest price a coin has ever hit.

**Pump** — A rapid price rise. **Dump** — a rapid fall.

**Whale** — Someone who holds enough crypto to move markets when they trade. A "Bitcoin whale" usually means 1,000+ BTC.

## Market Data Terms

**Market Cap** — Total value of all coins of a project. (Price × circulating supply.) Bitcoin's market cap is in the trillions; a small altcoin's might be a few million.

**Volume** — How much of a coin was traded in the last 24 hours. High volume = lots of activity = easier to buy/sell.

**Liquidity** — How easily a coin can be bought or sold without moving the price. BTC has massive liquidity; obscure tokens might have almost none.

**Slippage** — The difference between the price you expected and the price you got. Common when buying low-liquidity coins.

## Wallet & Security Terms

**Wallet** — Software or hardware that stores your private keys.

**Private key** — The secret password that controls your crypto. Whoever has it owns the coins.

**Public key / address** — Your "account number." Safe to share for receiving funds.

**Seed phrase / recovery phrase** — A list of 12 or 24 words that can restore your wallet. Treat it like the master key to your entire crypto life.

**Hot wallet** — Connected to the internet (mobile, browser).

**Cold wallet** — Offline (hardware, paper).

**Custodial vs Non-custodial** — Whether someone else holds your keys (custodial = exchange) or you do (non-custodial = your own wallet).

## DeFi & Web3 Terms

**DeFi** — Decentralized Finance. Apps like Uniswap or Aave that let you trade or lend crypto without a bank.

**dApp** — Decentralized application. Runs on a blockchain instead of a company's servers.

**Smart contract** — Self-executing code on a blockchain. The technology behind most DeFi.

**Gas fee** — The fee paid to the network to process a transaction. On Ethereum it can range from cents to dozens of dollars depending on traffic.

**Layer 1 vs Layer 2** — Layer 1 is the base blockchain (Ethereum). Layer 2 is a faster, cheaper network built on top (Arbitrum, Optimism, Base).

**Staking** — Locking up your crypto to help secure a network and earn rewards (like interest).

**NFT** — Non-Fungible Token. A unique digital item proving ownership of art, music, or a collectible.

## Bitcoin-Specific Terms

**Halving** — Every ~4 years, the reward Bitcoin miners receive is cut in half. This reduces new supply and historically precedes major bull runs.

**Satoshi (sat)** — The smallest unit of Bitcoin. 1 BTC = 100,000,000 sats.

**Mining** — The process of using computer power to validate Bitcoin transactions and earn newly created BTC.

**Hash rate** — The total computing power securing the Bitcoin network. Higher = more secure.

## Trading Strategy Terms

**DCA** — Dollar-Cost Averaging. Buying a fixed dollar amount on a regular schedule, regardless of price.

**ROI** — Return On Investment. Your profit (or loss) as a percentage of what you invested.

**Stop-loss** — An order that automatically sells if the price drops to a level you set, limiting your losses.

**Take-profit** — An order that automatically sells when the price hits a profit target you set.

## Sentiment & Slang

**Moon / "to the moon"** — Going way up.

**Rekt** — Took a big loss ("got wrecked").

**Diamond hands** — Holding through volatility without selling.

**Paper hands** — Selling at the first sign of trouble.

**Shitcoin** — Slang for low-quality, often worthless tokens.

**Maxi** — Someone who believes in only one coin (Bitcoin maxi, Ethereum maxi).

## The Bottom Line

You don't need to memorize all of these tonight. Read crypto news for two weeks with this glossary open in another tab and you'll absorb 80% of it naturally. The vocabulary is the door — once you walk through it, the entire industry suddenly starts making sense.`,
  },

  // ============== TRADING BASICS ==============
  {
    id: 301,
    title: "How Crypto Markets Work",
    slug: "how-crypto-markets-work",
    summary: "Exchanges, order books, market makers, and why prices move 24/7 — the mechanics behind the screen.",
    category: "Trading Basics",
    categorySlug: "trading-basics",
    publishedAt: "2026-04-16T11:00:00Z",
    readTime: "8 min",
    image: bitcoinGlobalImg,
    whatItMeans: "A crypto market is just thousands of buy and sell offers meeting each other on an exchange. The 'price' is simply the most recent deal that two people agreed on.",
    beginnerTip: "Spend an hour just watching the order book of Bitcoin on any exchange. You'll learn more about how markets work in 60 minutes than from any textbook.",
    content: `## Markets in One Sentence

A crypto market is a place where buyers and sellers meet. The current price is whatever the last buyer and last seller agreed on. Every other price you see is just a hope.

## The Order Book

Open any exchange and you'll see two columns: bids (buyers) and asks (sellers). This is the **order book**, the heart of every market.

- **Bids** — people offering to buy at specific prices, sorted highest to lowest.
- **Asks** — people offering to sell at specific prices, sorted lowest to highest.
- **Spread** — the gap between the highest bid and the lowest ask. Tighter spread = more liquid market.

When the highest bid meets the lowest ask, a trade happens and the price updates.

## Order Types You Need to Know

- **Market order** — buy/sell at the best available price right now. Fast but you accept whatever the order book gives you.
- **Limit order** — buy/sell only at a specific price. Patient but precise.
- **Stop-loss** — automatic sell once the price drops to a level you set. Critical risk management.
- **Take-profit** — automatic sell once the price hits your target. Removes emotion from selling.

## Why Prices Move

Every price move comes down to one thing: **more buyers than sellers (price up) or more sellers than buyers (price down)**. The deeper question is *why*. Common drivers include:

1. **News** — regulations, ETF approvals, exchange hacks.
2. **Macroeconomics** — interest rates, inflation, currency strength.
3. **Big trader activity** — when whales move, the market follows.
4. **Sentiment** — collective fear or greed shifts demand quickly.
5. **Technical levels** — automated trades fire when price hits common levels.

## Centralized vs Decentralized Exchanges

- **CEXes (Centralized Exchanges)** like Binance, Coinbase, Kraken hold your funds and match orders. Fast, deep liquidity, but you trust the company.
- **DEXes (Decentralized Exchanges)** like Uniswap and Jupiter let you trade directly from your wallet using smart contracts. Slower, sometimes pricier, but no middleman.

Most beginners start on a CEX for simplicity. Advanced users mix both.

## Market Makers vs Takers

- **Makers** place limit orders that sit on the order book waiting to be filled. They *make* liquidity.
- **Takers** place market orders that immediately consume existing offers. They *take* liquidity.

Most exchanges reward makers with lower fees because they help the market function. This is one reason limit orders are usually cheaper than market orders.

## Why Crypto Trades 24/7

Stocks have closing bells. Crypto doesn't. The blockchain is always running, exchanges around the world are always open, and demand from one timezone immediately spills into the next. This means:

- News breaking at 3 AM still moves your portfolio.
- Volatility can spike during weekends when traditional markets are closed.
- You should set alerts and stop-losses — staring at the screen 24/7 isn't possible (or healthy).

## How Liquidity Affects You

Imagine trying to sell 100 BTC. On a major exchange, that order barely moves the price. On a tiny exchange or a low-liquidity altcoin, it could crash the price 20% before all your coins are sold.

Always check:
- 24h trading volume (higher = easier to enter and exit)
- Order book depth (lots of orders close to current price = stable)
- Number of exchanges listing the coin (more = easier to find buyers)

## Spot vs Derivatives

- **Spot market** — you buy the actual coin and own it.
- **Derivatives (futures, perpetuals)** — you bet on the price without owning the coin. Often with leverage (borrowed money).

Beginners should stick to spot. Leverage can wipe out your account in minutes.

## How Big Traders Move Markets

Whales (large holders) and institutional traders use techniques like:

- **Iceberg orders** — splitting large orders into many small ones to hide their size.
- **Spoofing** — placing fake orders to trick others into buying or selling (technically illegal on regulated exchanges).
- **Algo trading** — bots that react to events in milliseconds.

You're never going to out-trade them. Your edge as a small trader is patience and discipline — they have to perform every day, you don't.

## The Bottom Line

Crypto markets are just a faster, louder version of any other financial market. Master the order book, understand order types, respect liquidity, and remember that price is a story written by everyone trading at once. Once you see markets this way, everything else becomes simpler.`,
  },
  {
    id: 302,
    title: "How to Read Crypto Charts",
    slug: "how-to-read-crypto-charts",
    summary: "Candlesticks, timeframes, volume, and trend lines — chart reading explained from scratch.",
    category: "Trading Basics",
    categorySlug: "trading-basics",
    publishedAt: "2026-04-15T12:00:00Z",
    readTime: "9 min",
    image: readingChartsImg,
    whatItMeans: "A crypto chart is a visual story of buyers and sellers fighting over price. Once you can read candles and trends, the price action stops looking random.",
    beginnerTip: "Stick to one timeframe (the daily chart) for your first month. Switching timeframes constantly is one of the fastest ways to confuse yourself.",
    content: `## Why Charts Matter

A chart turns thousands of trades into a picture you can interpret in seconds. Even if you never trade actively, understanding charts helps you spot trends, time entries better, and avoid panicking on normal pullbacks.

## The Candlestick Basics

Each "candle" represents price action over a specific period (1 minute, 1 hour, 1 day, etc.).

A candle has four parts:
- **Open** — the first price during the period.
- **Close** — the last price during the period.
- **High** — the highest price reached.
- **Low** — the lowest price reached.

**Green candle** — price closed higher than it opened (buyers won).
**Red candle** — price closed lower (sellers won).

The thick body shows open-to-close. The thin lines (wicks) show how far price reached above and below.

## Reading the Story

A long green body with small wicks = strong buying pressure.
A long red body with small wicks = strong selling pressure.
A small body with long wicks = indecision, equal pressure both ways.
A small body sitting at the top of a long wick after a rally = potential reversal (buyers ran out of steam).

Once you internalize this, you can read intent from a chart at a glance.

## Choosing a Timeframe

- **1-minute / 5-minute** — for scalpers. Very noisy.
- **1-hour / 4-hour** — for short-term swing traders.
- **Daily** — the most popular timeframe for serious traders. Filters out noise.
- **Weekly** — for long-term trend analysis.

Beginners should focus on the **daily chart**. It removes the panic of small wiggles and shows what's really happening.

## Identifying the Trend

The trend is the most important thing on a chart. Three possibilities:

- **Uptrend** — higher highs and higher lows. Buyers in control.
- **Downtrend** — lower highs and lower lows. Sellers in control.
- **Sideways / range** — price bouncing between two levels. Indecision.

A trend line is just a straight line connecting the lows in an uptrend (or the highs in a downtrend). Trends often continue until the trend line breaks.

**Rule of thumb:** trade with the trend. Most beginners lose money trying to call tops and bottoms.

## Support and Resistance

- **Support** — a price level where buyers historically stepped in. Looks like a floor.
- **Resistance** — a price level where sellers historically took profit. Looks like a ceiling.

Why do they matter? Because the more times a level has been tested, the more traders are watching it — and traders' attention turns into self-fulfilling prophecy.

When support breaks, it often becomes new resistance, and vice versa.

## The Power of Volume

Below the candles you'll see volume bars. Volume is the **proof** behind a price move.

- A breakout on **high volume** = real conviction. Likely to continue.
- A breakout on **low volume** = probably a fake-out.
- A red day on huge volume = sellers dumping. Watch out.
- Falling price on declining volume = sellers are running out of energy. Reversal coming.

Always check volume before acting on a price move.

## Common Patterns to Recognize

- **Double top / double bottom** — price hits the same level twice and reverses. Strong reversal signal.
- **Head and shoulders** — three peaks, with the middle highest. Classic bearish reversal.
- **Ascending triangle** — flat resistance with rising lows. Usually breaks upward.
- **Descending triangle** — flat support with falling highs. Usually breaks downward.
- **Bull flag / bear flag** — small consolidation after a big move. Usually continues in the original direction.

You don't need to know all patterns. Get really good at recognizing 3-4 and you're already ahead.

## Indicators (Optional but Useful)

A few helpful ones:

- **Moving Average (MA)** — average price over X periods. Smooths out noise. The 200-day MA is a major trend indicator.
- **RSI (Relative Strength Index)** — measures momentum. Above 70 = overbought, below 30 = oversold.
- **MACD** — shows momentum shifts and potential trend changes.

A common beginner mistake is stacking 8 indicators on one chart. Less is more. Most pros use 1-2 and rely mostly on price action.

## A Practical Reading Checklist

Every time you open a chart, ask:

1. What timeframe am I looking at?
2. What's the long-term trend (zoom out to weekly)?
3. What's the short-term trend (daily)?
4. Where are key support and resistance?
5. Is volume confirming the recent move?
6. Is RSI overbought or oversold?
7. What would invalidate my view? (Set a stop-loss there.)

Two minutes of this checklist beats two hours of staring.

## Common Mistakes

- **Cherry-picking timeframes** — switching until you find one that confirms what you want to do.
- **Drawing too many lines** — if your chart looks like a spider web, you've gone too far.
- **Ignoring volume** — every signal is twice as strong with volume confirming it.
- **Forcing trades** — sometimes the best trade is no trade. Wait for clean setups.

## The Bottom Line

Charts don't predict the future. They show you the current battle between buyers and sellers and help you stack the odds. Master the basics — candles, trends, support/resistance, and volume — and you'll already have an edge over most retail traders.`,
  },
  {
    id: 303,
    title: "Support and Resistance Explained",
    slug: "support-and-resistance-explained",
    summary: "The two most important price levels in trading — what they are, how to draw them, and how to trade them.",
    category: "Trading Basics",
    categorySlug: "trading-basics",
    publishedAt: "2026-04-14T10:00:00Z",
    readTime: "7 min",
    image: supportResistanceImg,
    whatItMeans: "Support is a price floor where buyers tend to step in. Resistance is a price ceiling where sellers tend to take profit. They're the simplest and most powerful concept in chart analysis.",
    beginnerTip: "Less is more. Mark only the levels you can see with the chart zoomed all the way out. Those are the ones every trader sees, and they're the ones that actually matter.",
    content: `## The Concept in Plain English

Imagine you're bouncing a tennis ball. The floor catches it and it bounces back up — that's **support**. Now toss it at the ceiling — it hits the top and falls back down. That's **resistance**.

Crypto charts behave the same way. Prices repeatedly bounce off certain levels. Knowing where those levels are is one of the highest-ROI skills in trading.

## Why Support and Resistance Exist

Markets are made of humans (and bots that watch humans). When price falls to a level where it bounced before, three things happen:

1. Old buyers who missed the bounce remember and buy again.
2. Sellers who already sold at that price feel validated and won't sell more.
3. New traders see the historical bounce and pile in expecting another one.

The result: enough buying pressure shows up to halt the fall. The same psychology in reverse creates resistance.

## How to Draw Support and Resistance

The good news: you don't need fancy tools.

1. Open the daily chart of any coin.
2. Look for prices where the chart bounced multiple times.
3. Draw a horizontal line through them.
4. Repeat for any other obvious bounce zones.

The more times a level has been tested, the more important it is. A level that has held 4 times is much stronger than one tested only once.

## A Real Example

If Bitcoin bounced near $60,000 in 2021, again in 2023, and again in 2024 — that's a major support level. Traders worldwide are watching it. The next time price approaches $60,000, expect strong buying interest.

If price *breaks* that level convincingly (with volume), it often **flips** into resistance. The traders who bought at $60K hoping for a bounce now want to break even on their position, so they sell when price comes back up to it.

This "support becomes resistance" flip is one of the most reliable patterns in technical analysis.

## Static vs Dynamic Levels

- **Static (horizontal)** — fixed prices that don't change. Easiest to spot and most reliable.
- **Dynamic (sloped)** — moving averages or trend lines. They move with price.

A 200-day moving average, for example, often acts as dynamic support during bull markets. When Bitcoin rides above its 200-day MA, the MA itself becomes the line that buyers defend.

## Trading With Support and Resistance

There are two main strategies:

**1. Range trading.** Buy at support, sell at resistance, repeat. Works great when a coin is moving sideways inside a clear range.

**2. Breakout trading.** Wait for price to break a major level on high volume, then ride the move. Works well during trending markets.

Neither strategy is "better" — it depends on the market environment.

## How to Set a Stop-Loss Around These Levels

Always put your stop-loss **just beyond** the level — not exactly at it. Why? Because price often pokes through a level briefly to trigger stops before reversing.

If support is at $60,000, set your stop at $58,500-$59,000. That gives the trade breathing room while still protecting you if the level truly fails.

## Common Mistakes

- **Drawing too many lines.** If you can't see the chart through your lines, you're guessing.
- **Trading every bounce.** Some bounces fail. Always wait for confirmation (a strong close back above support).
- **Ignoring the bigger timeframe.** A daily support might be meaningless if the weekly is in a strong downtrend.
- **Treating levels as exact prices.** Support and resistance are zones, not lines. Give them 1-2% wiggle room.
- **Forgetting volume.** A break on tiny volume usually fails.

## How to Tell If a Level Is "Strong"

A strong support or resistance has:

1. Been tested at least 2-3 times.
2. Shows clear bounces (long wicks at the level).
3. Was tested on high volume.
4. Lines up across multiple timeframes (visible on daily *and* weekly).
5. Coincides with round numbers ($50,000 BTC, $1,000 SOL) — humans love round numbers.

The more boxes ticked, the more weight the level carries.

## Putting It All Together

A typical setup looks like this:

1. Identify the major weekly support and resistance for your coin.
2. Wait for price to approach one of those levels.
3. Look for confirmation — bullish candles at support, bearish at resistance, with volume.
4. Enter the trade.
5. Place stop-loss just beyond the level.
6. Set profit target at the next major level.

Do this consistently and you'll outperform most active traders.

## The Bottom Line

Support and resistance are the bones of every chart. They're not magic and they don't predict the future, but they tell you where the battles are likely to happen. Mark a few levels, watch how price reacts, and you'll start seeing trades you used to miss.`,
  },
  {
    id: 304,
    title: "Market Orders vs Limit Orders",
    slug: "market-vs-limit-orders",
    summary: "The two basic order types every trader must understand — when to use each, and how they affect your fills.",
    category: "Trading Basics",
    categorySlug: "trading-basics",
    publishedAt: "2026-04-13T11:00:00Z",
    readTime: "5 min",
    image: orderTypesImg,
    whatItMeans: "A market order says 'fill me right now at any price.' A limit order says 'fill me only at this price or better.' Knowing when to use each is the difference between paying retail and getting wholesale.",
    beginnerTip: "Use limit orders for at least your first 30 trades. The discipline of choosing your price before you click 'buy' will save you thousands and teach you patience.",
    content: `## The Two Foundational Orders

Every trade you ever place will fall into one of two categories: market or limit. Everything else (stop-loss, take-profit, OCO) is built on top of these two.

## Market Orders: Speed Over Precision

A market order says "fill me now, whatever the price is." The exchange immediately matches you with the best available offers in the order book.

**When to use it:**
- You absolutely need in or out *right now* (major news, urgent risk management).
- The asset is highly liquid (BTC, ETH on a major exchange) and slippage will be minimal.
- The trade size is small relative to the order book depth.

**The downside:** in fast-moving markets or low-liquidity coins, a market order can fill at much worse prices than the one you saw a second ago. This is called **slippage**, and it can quietly cost you 1-5% on illiquid altcoins.

## Limit Orders: Precision Over Speed

A limit order specifies the *exact* price you're willing to pay (for a buy) or accept (for a sell). The exchange holds the order in the book until someone matches it.

**When to use it:**
- Almost always, especially if you're not in a rush.
- When trading a less liquid coin where slippage would hurt.
- When you have a specific support or resistance level in mind.
- When you want to "sell into strength" or "buy the dip" without watching the screen.

**The downside:** your order may never fill if price doesn't reach your level. That's actually a feature, not a bug — it means the trade you wanted didn't materialize.

## Maker vs Taker Fees

Most exchanges charge two different fees:

- **Maker fee** — for limit orders that add liquidity to the order book. Often 0.1% or less.
- **Taker fee** — for market orders that immediately consume liquidity. Often 0.1-0.2%.

Limit orders are not just more precise — they're cheaper. Over hundreds of trades, the savings add up significantly.

## A Practical Example

Bitcoin is trading at $97,000. You want to buy 0.1 BTC.

**Market order route:**
1. You click market buy.
2. The exchange consumes the cheapest sell orders.
3. Final fill: maybe $97,015 average. Slippage of $15.
4. You pay a 0.15% taker fee.
5. Total cost: $9,716 + slippage.

**Limit order route:**
1. You set a limit buy at $96,800 (a small dip you're waiting for).
2. The order sits in the book.
3. Two hours later, price dips and your order fills.
4. You pay a 0.05% maker fee.
5. Total cost: $9,684.

Same trade. About **$32 saved** just by using a limit order. Multiply by 100 trades a year and you've paid for a good vacation.

## Stop-Loss and Take-Profit

These are special cases built on top of the basics:

- **Stop-loss** — a *trigger* price that converts to a market sell once hit. Limits your downside.
- **Take-profit** — a trigger that converts to a market sell once a profit target is reached.
- **Stop-limit** — a trigger that converts to a *limit* order at a specified price. More precise but may not fill in fast crashes.

## Common Mistakes

- **Always using market orders.** You'll quietly bleed money to slippage and taker fees.
- **Setting limit orders too far away.** A buy order at $80,000 when price is $97,000 might never fill. Be realistic.
- **Forgetting to cancel old limit orders.** They sit forever and can fill at terrible prices weeks later if you forget.
- **Not using stop-losses.** Hope is not a strategy. Every trade needs an exit plan.
- **Panic market-selling during a flash crash.** Often the worst possible time to use a market order.

## Quick Decision Guide

| Situation | Use |
|-----------|-----|
| Small position in BTC, urgent | Market |
| Large position in any coin | Limit |
| Buying a low-liquidity altcoin | Limit (always) |
| Want to buy a specific dip | Limit |
| Want to take profit at a target | Take-profit (limit-based) |
| Want to cap losses | Stop-loss |

## The Bottom Line

Master the difference between market and limit orders and you'll avoid 80% of the dumb mistakes new traders make. Patience pays — both literally (lower fees) and emotionally (no impulse fills).`,
  },
  {
    id: 305,
    title: "Risk Management in Crypto Trading",
    slug: "risk-management-in-crypto-trading",
    summary: "Position sizing, stop-losses, and the rules that keep your account alive long enough to win.",
    category: "Trading Basics",
    categorySlug: "trading-basics",
    publishedAt: "2026-04-12T13:00:00Z",
    readTime: "8 min",
    image: riskMgmtImg,
    whatItMeans: "Risk management is the boring discipline that decides who survives crypto and who quits broke. The goal isn't to win every trade — it's to make sure no single trade can destroy you.",
    beginnerTip: "Risk no more than 1-2% of your account on any single trade. If you can't bring yourself to set a stop-loss, your position is too big. Cut it in half.",
    content: `## Why Risk Management Matters More Than Strategy

Most beginners obsess over finding the perfect entry signal. But here's the truth: a mediocre strategy with great risk management beats a great strategy with no risk management. Every. Single. Time.

The math is brutal:
- Lose 50% of your account → you need a 100% gain just to break even.
- Lose 80% → you need a 400% gain to recover.

Avoiding catastrophic losses is more important than maximizing wins.

## The 1% Rule

The single most important rule of risk management: **never risk more than 1-2% of your total account on a single trade.**

Example:
- Account: $10,000
- Max risk per trade: $100-200
- If your stop-loss is 5% below entry, your position size = $2,000-4,000.

Why it works: you can lose 10 trades in a row and still have 80%+ of your account. You stay in the game.

## Always Use a Stop-Loss

A stop-loss is the price at which you admit you were wrong and exit. Without one, you're just hoping. Hope is not a strategy.

Three places to put a stop-loss:

1. **Below the most recent swing low** (for long positions). Price breaking that low invalidates your bullish view.
2. **Just below a major support level** (with a small buffer for fakeouts).
3. **At a fixed percentage from entry** (e.g., -8%).

The stop should be **far enough** that normal volatility won't trigger it, but **close enough** that it actually limits damage.

## Position Sizing: The Formula

To work out how big a position should be:

\`\`\`
Position size = (Account × Risk %) / (Entry – Stop-loss)
\`\`\`

Example:
- Account: $10,000
- Risk per trade: 1% = $100
- Entry: $50,000
- Stop-loss: $48,000 (4% below)

Position size = $100 / ($50,000 - $48,000) = 0.05 BTC ≈ $2,500.

So you'd buy $2,500 of BTC, not $10,000. If your stop hits, you lose only $100 — exactly your planned risk.

This formula is the backbone of professional trading.

## Risk-to-Reward Ratio

Before entering any trade, ask: how much am I risking vs. how much could I make?

- A **1:2** ratio means risking $100 to make $200.
- A **1:3** ratio means risking $100 to make $300.

If your minimum ratio is 1:2 and you only win 40% of trades, you still come out profitable:
- 4 winners × $200 = $800
- 6 losers × $100 = $600
- Net: +$200

This is how professional traders are profitable even with losing more trades than they win.

## Diversification (But Not Too Much)

Don't put 100% of your portfolio in one coin. Don't put it in 50 coins either.

A reasonable beginner allocation:
- 50% Bitcoin
- 30% Ethereum
- 15% large-cap altcoins (top 20)
- 5% smaller / experimental positions

Adjust based on your goals. The key idea: no single coin should be able to wipe out more than 20% of your portfolio.

## Avoid Overleveraging

Leverage = borrowed money. 10x leverage means a 10% adverse move wipes you out completely (this is called **liquidation**).

In crypto, prices regularly swing 5-15% in a day. With high leverage, a normal Tuesday can liquidate you while you're asleep.

If you're under three years of trading experience: don't use leverage at all. The math is against you.

## Manage Your Emotions

Losing trades trigger fear. Winning trades trigger greed. Both lead to bad decisions.

Strategies that help:
- **Pre-decide your exit.** Set stop-loss and take-profit *before* you enter.
- **Walk away from the screen** after placing the trade.
- **Journal every trade.** What was your reason? What was the outcome? Pattern-spotting beats willpower.
- **Take breaks during big losses.** Tilt is real. Step away for a day.

## The Cooling-Off Rule

After three consecutive losing trades, stop trading for 24 hours. After a single trade where you broke your own rules, take 48 hours off.

This single rule has saved more accounts than every indicator combined.

## Diversify Your Risk Across Time

Instead of buying $10,000 of BTC at once, spread it over 10 weeks at $1,000 each. This is **dollar-cost averaging**, and it dramatically lowers the risk of buying right before a crash.

Long-term DCA on Bitcoin has historically outperformed almost every active trading strategy.

## What "Account Blowup" Looks Like

A typical beginner's path to zero:
1. Wins their first few trades. Confidence soars.
2. Doubles position size to "make money faster."
3. Hits a normal losing streak. Account drops 30%.
4. Tries to recover with bigger positions. Account drops 60%.
5. Uses leverage out of desperation. Liquidated.
6. Quits crypto angry, blaming "manipulation."

Almost every blowup follows this script. Risk management is what breaks the cycle.

## The Risk Management Checklist

Before every trade:

- [ ] Have I defined my stop-loss?
- [ ] Is my position size 1-2% risk?
- [ ] Is my risk-to-reward at least 1:2?
- [ ] Would this trade survive a normal pullback?
- [ ] Do I have a reason for entering — beyond "it's going up"?
- [ ] Am I trading with money I can afford to lose?

If you can't tick every box, don't enter.

## The Bottom Line

Risk management is unsexy. Nobody posts screenshots of "carefully sized 1% trades." But it's the single difference between traders who are still around in five years and those who aren't. Protect the downside, and the upside takes care of itself.`,
  },
  {
    id: 306,
    title: "RSI and Moving Averages Explained",
    slug: "rsi-and-moving-averages-explained",
    summary: "The two most popular indicators in crypto — what they tell you and how to actually use them.",
    category: "Trading Basics",
    categorySlug: "trading-basics",
    publishedAt: "2026-04-11T11:00:00Z",
    readTime: "7 min",
    image: rsiMaImg,
    whatItMeans: "Moving averages smooth out price to show you the trend. RSI tells you when an asset is overbought or oversold. Together, they answer 'which way is it going?' and 'is it stretched too far?'",
    beginnerTip: "Don't trade based on a single indicator. Use them as confirmation for an idea you already have from price action and support/resistance.",
    content: `## What Indicators Actually Are

Indicators are mathematical formulas applied to price (and sometimes volume). They turn raw data into a signal that's easier to read. They are *not* magic — they're just simplified summaries of what the chart is already telling you.

The two most useful indicators for beginners are **Moving Averages (MA)** and the **Relative Strength Index (RSI)**.

## Moving Averages: Smoothing the Noise

A moving average plots the average price over a specific number of recent periods. Each new candle, the oldest price drops off and the newest price gets added in.

Two common types:
- **Simple Moving Average (SMA)** — straight average. Lags more.
- **Exponential Moving Average (EMA)** — weighted toward recent prices. Reacts faster.

Most traders use EMAs for short-term and SMAs for long-term reference.

## The Three Most Important MAs

- **20 EMA** — short-term trend. Many day-traders treat it as their main level.
- **50 EMA** — medium-term trend. Good for swing traders.
- **200 SMA** — the king of long-term trend. When Bitcoin trades above the 200 SMA, we're in a bull cycle. Below it, bear cycle.

## How to Use Moving Averages

1. **Trend identification.** Price above the MA = uptrend. Below = downtrend.
2. **Dynamic support/resistance.** In strong trends, price often pulls back to the 20 or 50 EMA, then resumes.
3. **Crossovers.**
   - **Golden cross** = 50 SMA crosses above 200 SMA. Bullish long-term signal.
   - **Death cross** = 50 SMA crosses below 200 SMA. Bearish long-term signal.

These crossovers don't predict — they confirm trend changes that have already started. They're more useful as filters than as triggers.

## RSI: Measuring Momentum

The Relative Strength Index measures how fast price is moving on a scale from 0 to 100. It compares average gains to average losses over the past 14 periods (the default).

- **Above 70** — overbought. Buyers may be running out of steam. Price often pulls back.
- **Below 30** — oversold. Sellers may be exhausted. Price often bounces.
- **Around 50** — neutral. No clear momentum bias.

## How to Use RSI Properly

The classic mistake is treating RSI like a one-touch signal: "RSI is 75, sell!" Markets stay overbought for weeks during strong rallies. RSI alone is not enough.

Better uses:

1. **Confirm a reversal.** If price hits resistance *and* RSI is above 70, the case for a pullback is much stronger.
2. **Spot divergence.** This is RSI's superpower.
   - **Bullish divergence** — price makes a lower low, but RSI makes a higher low. Sellers are losing strength.
   - **Bearish divergence** — price makes a higher high, but RSI makes a lower high. Buyers are losing strength.
   Divergences often precede major reversals.
3. **Filter out chop.** When RSI hovers between 40-60, the market lacks momentum. Often best to stay flat.

## A Simple Combined Strategy

Here's a beginner-friendly system that uses both:

**Long entry:**
1. Price is above the 200 SMA (we're in an uptrend).
2. Price pulls back to the 50 EMA.
3. RSI dips into the 40-50 zone (cooling off).
4. Bullish candle prints at the 50 EMA.
5. Buy. Stop-loss below the recent swing low. Target the previous high.

**Short / sell signal:**
1. Price is below the 200 SMA (downtrend).
2. Price rallies into the 50 EMA from below.
3. RSI rises into the 50-60 zone.
4. Bearish candle prints at the 50 EMA.
5. Sell or short. Stop-loss above the recent swing high.

This isn't a holy grail — but it filters out 90% of bad setups beginners normally take.

## Common Indicator Mistakes

- **Loading 6+ indicators.** Most pros use 1-2. The rest just create noise.
- **Treating signals as predictions.** Indicators describe the *current* state. They don't promise the future.
- **Ignoring price action.** Always read candles and structure first; use indicators as confirmation second.
- **Using default settings forever.** On highly volatile crypto, a 9 EMA may suit a fast trader better than a 20 EMA. Test what works for your style.
- **Trading divergences alone.** RSI divergence in a strong trend can persist for weeks. Wait for price confirmation (a structural break) before acting.

## What About Other Indicators?

Once you're comfortable with MAs and RSI, the next two worth learning are:

- **MACD** — combines moving averages to spot momentum shifts.
- **Volume profile** — shows where the most trading happened, identifying real support/resistance.

But you don't need them to be profitable. Many full-time traders use only price action + 200 SMA + RSI.

## The Bottom Line

Moving averages tell you the trend. RSI tells you the energy behind it. Together, they answer the two most important trading questions: *which way is the market going* and *is it stretched too far?* Use them as confirmation tools — not crystal balls — and you'll navigate crypto markets with much more confidence.`,
  },
  {
    id: 307,
    title: "Crypto Market Psychology (Fear & Greed)",
    slug: "crypto-market-psychology",
    summary: "Why Bitcoin pumps when everyone is greedy and crashes when everyone is scared — and how to use it.",
    category: "Trading Basics",
    categorySlug: "trading-basics",
    publishedAt: "2026-04-10T12:00:00Z",
    readTime: "7 min",
    image: psychologyImg,
    whatItMeans: "Markets are driven by emotion as much as data. The Fear & Greed Index measures the mood of all crypto traders combined — and historically, the best buys happen when everyone is scared.",
    beginnerTip: "When the index reads 'Extreme Greed,' resist the urge to chase. When it reads 'Extreme Fear,' resist the urge to panic. Doing the opposite of the crowd is hard but profitable.",
    content: `## The Most Underrated Force in Markets

Charts, indicators, and news all matter — but underneath everything, **markets move because humans feel things**. Fear and greed drive most price action. The traders who understand this end up buying low and selling high; the rest do the opposite.

## The Fear & Greed Index

The Crypto Fear & Greed Index is a daily score from 0 to 100 that measures market sentiment.

- 0-24: **Extreme Fear** — investors are panicking. Often a buy zone.
- 25-49: **Fear** — caution dominates.
- 50: Neutral.
- 51-74: **Greed** — optimism is rising.
- 75-100: **Extreme Greed** — euphoria. Often a sell zone.

The index combines multiple inputs: volatility, trading volume, social media activity, dominance of Bitcoin, surveys, and Google Trends.

## Why Sentiment Matters

History shows two near-universal patterns:

1. **Bottoms form when sentiment is at its worst.** When everyone is scared, the marginal seller is exhausted. Anyone who was going to panic has already sold. The only direction left is up.
2. **Tops form when sentiment is euphoric.** When everyone is bullish, the marginal buyer is gone. Anyone who was going to FOMO in has already done it. The only direction left is down.

This is why Warren Buffett's classic line — "Be fearful when others are greedy, and greedy when others are fearful" — is so often quoted. It's also why most beginners do the opposite and lose.

## The Emotional Cycle of a Trader

Most beginners follow a predictable emotional arc during a bull run:

1. **Disbelief** — "Bitcoin is going up but it'll crash again."
2. **Hope** — "Maybe this rally is real."
3. **Optimism** — "I should buy in."
4. **Excitement** — "I'm making real money!"
5. **Thrill** — "I'm a genius."
6. **Euphoria** — "I'm going to be rich. Buying more."
7. **Anxiety** — "Why is it dipping?"
8. **Denial** — "It'll come back."
9. **Fear** — "Should I sell?"
10. **Capitulation** — "Sold everything. I'm done with crypto."
11. **Despair** — "Crypto is dead."

Smart money buys during steps 9-11. Most retail buys at step 6. That's the entire game.

## Real Examples

- **December 2017:** Bitcoin hit $20K. Everyone was talking about it on TV. Fear & Greed at 95. The next 12 months were brutal — BTC crashed 84%.
- **March 2020 (COVID crash):** BTC dropped to $4,000. Fear & Greed at 8. Buying then would have 10x'd your money in 18 months.
- **November 2021:** BTC at $69K. Greed at 84. The next 13 months saw a -77% crash.
- **November 2022 (FTX collapse):** Fear & Greed at 6. Anyone who bought BTC under $20K saw it more than 4x by 2024.

The pattern is so consistent it's almost embarrassing.

## How to Actually Use Sentiment

You don't need to time the *exact* top or bottom. Just lean against extreme readings:

- **When Fear & Greed is below 25**, scale into your favorite coins. Buy in tranches over a few weeks.
- **When Fear & Greed is above 80**, take partial profits. Move them to stablecoins or your bank.
- **When the index is 40-60**, just keep DCA'ing on schedule. Don't overthink it.

You will rarely buy the exact bottom or sell the exact top. That's fine. Catching 80% of the move with no stress beats trying to catch 100% with constant anxiety.

## Other Psychology Signals to Watch

- **Magazine cover effect.** When mainstream magazines put crypto on the cover (especially saying "buy now!"), the top is usually near.
- **Taxi driver test.** When your taxi driver, hairdresser, or grandma starts telling you which altcoin to buy — sell.
- **Crypto Twitter euphoria.** When timelines are full of Lambo memes and "we're going to $1 million," reduce risk.
- **Crypto Twitter despair.** When the same accounts say "crypto is over," that's usually a signal to start buying.

## Common Sentiment Mistakes

- **Trying to time the exact bottom.** You'll miss it. Buying gradually as fear sets in is better.
- **Selling because YouTube influencers said to.** They are usually selling to you, not for you.
- **Overweighting the latest tweet from a famous trader.** A single voice ≠ the market.
- **Thinking "this time is different."** Every cycle, people say it. They're almost always wrong.
- **Confusing your hopes for analysis.** Sentiment includes *your* emotions. Be aware of them.

## How to Build Discipline Against the Crowd

1. **Pre-define your rules.** "If Fear & Greed drops below 20, I'll buy $500 in BTC." Then follow it.
2. **Stop refreshing prices.** Once you DCA on schedule, looking at prices hourly does nothing useful.
3. **Read history.** Look at Bitcoin charts from 2018, 2021, 2022. The same emotions, the same outcomes.
4. **Talk to people who survived multiple cycles.** They've seen it all and they'll bring you back to earth.
5. **Journal your emotions when you trade.** You'll quickly see the patterns.

## The Bottom Line

Markets aren't rational. They're emotional, swinging between fear and greed. Understanding the cycle — and acting opposite the crowd at extremes — is one of the highest-edge skills you can develop. The Fear & Greed Index isn't a crystal ball, but it's a fantastic mirror for the mood of the market.`,
  },
  {
    id: 308,
    title: "How News Affects Crypto Prices",
    slug: "how-news-affects-crypto-prices",
    summary: "Why ETF approvals pump Bitcoin and exchange hacks crash it — the cause-and-effect of crypto news.",
    category: "Trading Basics",
    categorySlug: "trading-basics",
    publishedAt: "2026-04-09T13:00:00Z",
    readTime: "7 min",
    image: exchangeNewsImg,
    whatItMeans: "Crypto trades 24/7 across every country, so news from anywhere can move prices instantly. Different categories of news have different impacts — knowing which to take seriously is a key skill.",
    beginnerTip: "Don't trade headlines. Most news pops or dips reverse within 48 hours once the panic or hype fades. Wait, then act on what's left.",
    content: `## Crypto Lives in Real Time

Stock markets close on weekends. Bitcoin doesn't. Every news event — anywhere in the world, at any hour — can immediately affect the price of every coin. Understanding which news matters and which is noise is one of the highest-leverage skills in crypto.

## The Major News Categories

### 1. Regulatory News

This is the heaviest hitter. When governments make decisions, the entire market moves.

- **Bullish:** ETF approvals, country adopting Bitcoin as legal tender, friendly tax laws, clear regulation.
- **Bearish:** Bans, exchange shutdowns, lawsuits against major platforms, tax crackdowns.

**Real example:** When the US SEC approved Bitcoin ETFs in January 2024, BTC rallied from $42K to $73K in three months as institutions piled in.

### 2. Central Bank Decisions

The Federal Reserve and other central banks set interest rates and money policy. These macro decisions affect every risk asset, including crypto.

- **Rate cuts** = more liquidity = generally bullish for crypto.
- **Rate hikes** = tighter money = generally bearish.
- **Quantitative easing (QE)** = printing money = bullish for hard assets like Bitcoin.

This connection has gotten stronger every year. By 2026, BTC often moves in lockstep with macro liquidity.

### 3. Exchange Events

Events at major exchanges move prices fast and often violently.

- **Listings** — when Binance or Coinbase lists a new coin, that coin often jumps 30-100%.
- **Delistings** — usually crash the affected token.
- **Hacks** — drag the entire market down on fear.
- **Bankruptcies** — see FTX (Nov 2022). Caused months of pain.
- **Regulatory action against exchanges** — SEC suing Binance in 2023 wiped 8% off BTC overnight.

### 4. Adoption News

Real-world adoption tends to drive medium-term sentiment.

- Major company adds BTC to balance sheet (MicroStrategy, Tesla, Square).
- Country accepts Bitcoin (El Salvador, Central African Republic).
- Major payment processor integrates crypto (Visa, PayPal, Stripe).
- Bank starts offering crypto custody.

These are slower-moving stories but they tend to compound over time.

### 5. Tech & Protocol News

- **Halvings** (every ~4 years for Bitcoin) reduce new supply. Historically followed by major bull runs.
- **Major upgrades** (Ethereum's Merge, Solana's Firedancer) tend to drive sustained rallies if successful.
- **Bugs and hacks at the protocol level** can shake confidence in the affected chain.

### 6. Geopolitical Events

Wars, sanctions, elections — they all hit crypto.

- Conflicts often trigger short-term selling (risk off) followed by inflows from affected regions (capital flight).
- Sanctions create demand for non-state money.
- Elections shift regulatory expectations.

### 7. Whale & Institutional Moves

Large wallets transferring BTC to or from exchanges signal possible buying or selling pressure. On-chain analytics services track this in real time.

- Massive transfers *into* exchanges → potential selling.
- Massive withdrawals *to cold storage* → long-term holding intent.

## How Quickly Markets React

- **Major news (ETF approval, regulatory action):** seconds to minutes. Algos move first.
- **Macroeconomic data (CPI, Fed decisions):** instant volatility, lasting days.
- **Adoption news:** slow-moving — may take weeks to fully play out.
- **Rumors:** can move price more than confirmed news ("buy the rumor, sell the news").

## The "Buy the Rumor, Sell the News" Pattern

This is one of the most consistent patterns in trading: **prices often pump in anticipation of news, then dump when the news actually drops** — even if it's good news.

Why? Because by the time news is public, the people who knew first have already bought. They sell into the hype.

A famous example: Coinbase IPO in April 2021. Bitcoin pumped to a then-ATH of $64K days before. The day Coinbase went public, BTC topped and crashed 50% over the next two months.

## How to Filter Real News from Noise

1. **Source matters.** Bloomberg, Reuters, official agency websites > random Twitter accounts.
2. **Confirm before acting.** If you see breaking news on Twitter, wait 10 minutes for major outlets to confirm.
3. **Watch market reaction, not just headlines.** If "huge bullish news" drops and price drops anyway, the market is telling you something the headline isn't.
4. **Distinguish signal from speculation.** A signed ETF approval is signal. A pundit saying "I think they'll approve it" is speculation.

## How to Trade Around News

For most beginners, the answer is: don't.

Trading news is professional turf. Algos react in milliseconds. By the time you read the headline and click buy, the price has already moved 5%.

A better approach:

- **Position before the news.** If you expect an ETF approval, build your position calmly weeks ahead.
- **Wait for the dust to settle.** Major news creates 24-48 hours of volatility. Often the true direction shows up after.
- **Use limit orders.** Don't market-buy into chaos.
- **Have your stops set.** Volatility = opportunity to get stopped out badly. Pre-define your risk.

## Common Mistakes

- **Chasing the candle.** Buying after a 15% pump on news is usually right before the dump.
- **Believing every "leak."** Most leaks are intentional manipulation.
- **Holding through obvious negatives.** "I believe in fundamentals" doesn't help when an exchange is being shut down.
- **Reacting to every headline.** You'd never sleep. Pick the ones that actually matter.

## The Bottom Line

News moves crypto fast, but most movements reverse just as quickly. Identify which news categories actually matter, ignore the rest, and let other people panic. Patience and selectivity are the news trader's biggest edges.`,
  },

  // ============== GLOSSARY ==============
  {
    id: 401,
    title: "Market Cap",
    slug: "glossary-market-cap",
    summary: "Market cap = price × circulating supply. The single most important number for comparing crypto projects.",
    category: "Glossary",
    categorySlug: "glossary",
    publishedAt: "2026-04-16T08:00:00Z",
    readTime: "4 min",
    image: mcapImg,
    whatItMeans: "Market cap is the total value of all coins of a project combined. A coin priced at $1 with 1 billion in supply is worth more than a coin priced at $1,000 with only 100,000 in supply.",
    beginnerTip: "Don't fall for low-price coins thinking they have 'room to grow.' A $0.001 coin with massive supply isn't cheap. Always look at market cap first.",
    content: `## The Definition

**Market Cap = Price × Circulating Supply.**

It tells you the total value of all currently-existing coins of a project. It's how investors actually compare the size of crypto projects.

## A Quick Example

- Coin A: $50,000 per coin × 20 million coins = **$1 trillion** market cap.
- Coin B: $0.01 per coin × 1 trillion coins = **$10 billion** market cap.

Even though Coin A's price looks "expensive," it's the much larger project. Price alone is meaningless without context.

## The Three Tiers

- **Large cap** (>$10B): Bitcoin, Ethereum, Solana. Lower risk, lower volatility.
- **Mid cap** ($1B–$10B): Established but still growing.
- **Small cap** (<$1B): Higher risk, higher reward potential.

## Common Mistakes

1. **"Cheap coin" myth.** A coin priced at $0.0001 isn't more likely to 100x than a coin priced at $50,000. Look at market cap, not price.
2. **Confusing market cap with money invested.** Market cap is *theoretical* total value. Actual liquidity (money you could realistically extract) is usually 10-20% of market cap.
3. **Ignoring fully diluted valuation (FDV).** This is what the cap *would* be if all future tokens were already in circulation. If FDV is much higher than market cap, future inflation will pressure the price.

## Why It Matters

Market cap tells you:
- The relative size of a project.
- Roughly how stable it is (large caps move 5-10% a day, small caps 30-50%).
- Whether a target price is realistic (a coin reaching $1 with 100B supply would be worth more than the entire crypto market combined — clearly not realistic).

## The Bottom Line

Market cap is the first number you should look at when researching any coin. Price by itself is just a label. Market cap tells you what you're actually buying.`,
  },
  {
    id: 402,
    title: "Volume",
    slug: "glossary-volume",
    summary: "How much of a coin was traded over a period — the simplest measure of activity and liquidity.",
    category: "Glossary",
    categorySlug: "glossary",
    publishedAt: "2026-04-15T08:00:00Z",
    readTime: "4 min",
    image: volumeImg,
    whatItMeans: "Volume is the total dollar amount of a coin that changed hands in a given time period. High volume = active market. Low volume = ghost town.",
    beginnerTip: "Avoid coins with daily volume below $10 million. Low volume means you might not be able to sell when you want to.",
    content: `## The Definition

**Volume** is the total amount of an asset traded in a given period (usually 24 hours). It's reported in either the coin itself ("12,000 BTC traded") or in dollar terms ("$1.2 billion traded").

## Why Volume Matters

Volume tells you how *real* a price move is.

- **Price up + high volume** = strong buying conviction. Move likely to continue.
- **Price up + low volume** = weak rally. Likely to reverse.
- **Price down + high volume** = serious selling. Watch out.
- **Price down + low volume** = sellers running out of energy. Possible bottom.

Without volume, a price move is just a guess.

## Volume vs Liquidity

These are related but not identical:

- **Volume** = how much was traded (a flow).
- **Liquidity** = how much you can trade right now without moving the price (a stock).

A coin can have a brief volume spike and still have terrible liquidity the rest of the time.

## Reading the Volume Bars

Below candles on every chart, you'll see volume bars. Compare each bar to the recent average:

- A bar twice the size of average = unusual activity. Look for what caused it.
- A series of falling bars during a rally = warning sign.
- A spike on a price reversal day = often marks an important turning point.

## How Much Volume Is "Enough"?

A rough guide for safe trading:
- **>$1B daily** — top-tier liquidity (BTC, ETH).
- **$100M-$1B** — solid mid-cap territory.
- **$10M-$100M** — tradable, but check order book depth.
- **<$10M** — risky. Slippage will eat into your profits.

## Wash Trading Warning

Some sketchy exchanges fake volume by trading with themselves. Always cross-check on multiple data sources (CoinGecko, CoinMarketCap, on-chain explorers).

## The Bottom Line

Volume is the proof behind every price move. A pump without volume is hot air. A pump with volume is conviction. Always check before you trade.`,
  },
  {
    id: 403,
    title: "Bull Market",
    slug: "glossary-bull-market",
    summary: "A sustained period of rising prices and optimism. Where fortunes are made — and lost.",
    category: "Glossary",
    categorySlug: "glossary",
    publishedAt: "2026-04-14T08:00:00Z",
    readTime: "4 min",
    image: bullImg,
    whatItMeans: "A bull market is a long stretch (often months or years) where most assets in a sector are going up. The mood is optimistic, news is mostly bullish, and people who got in early look like geniuses.",
    beginnerTip: "Bull markets feel easy — but they're where most amateurs blow up. Take profits along the way, don't chase pumps, and never use leverage just because everything is going up.",
    content: `## The Definition

A **bull market** is a sustained uptrend, generally defined as a 20%+ rise from recent lows that lasts months or years. The term comes from the way a bull attacks — thrusting its horns *upward*.

## What a Bull Market Feels Like

- News is overwhelmingly positive.
- New all-time highs feel routine.
- Random altcoins 10x in weeks.
- Friends who never cared about crypto suddenly want tips.
- Influencers post Lambos and beach photos.
- "This time is different" is everywhere.

The collective mood swings from cautious optimism → confidence → euphoria.

## The Crypto Cycle (Simplified)

Bitcoin has historically run on roughly 4-year cycles aligned with the halving:

1. **Halving** — block rewards cut in half.
2. **Accumulation phase** — quiet sideways action.
3. **Bull market** — price discovery, often 5-10x returns.
4. **Mania peak** — euphoria, retail FOMO.
5. **Bear market** — 70-85% drawdown.
6. Repeat.

We're not guaranteed this pattern continues forever — but it's repeated 3 times so far.

## What Drives Bull Markets

- Loose monetary policy (low rates, money printing).
- New adoption (ETFs, institutional buyers, new countries).
- Major tech upgrades or narratives (DeFi summer, NFT boom, AI x crypto).
- Halving supply shocks.
- Improving regulatory environment.

## How to Survive (and Thrive) in a Bull Market

1. **Take profits in stages.** Set targets like "sell 10% at 2x, 20% at 5x." Don't rely on selling the exact top.
2. **Resist leverage.** Most blowups happen in bull markets, not bears.
3. **Keep your core holdings.** Don't sell all of your BTC chasing the next altcoin.
4. **Watch sentiment.** When Fear & Greed reads above 80 for weeks, the top is near.
5. **Have a plan for the bear.** Bear markets always come. Have stablecoins ready to deploy when fear returns.

## Common Mistakes

- **Believing the rally will never end.** It always does.
- **Buying the latest meme because it's "going to the moon."** 90% of meme coins eventually go to zero.
- **Quitting your job because you're up 5x.** You're not as smart as the bull market is making you feel.

## The Bottom Line

Bull markets are when wealth is made — and when most beginners give it all back. Take the gains seriously. Manage risk. The cycle always turns, and the only question is whether you'll have profits left when it does.`,
  },
  {
    id: 404,
    title: "Bear Market",
    slug: "glossary-bear-market",
    summary: "A sustained period of falling prices and pessimism — and historically the best time to accumulate.",
    category: "Glossary",
    categorySlug: "glossary",
    publishedAt: "2026-04-13T08:00:00Z",
    readTime: "4 min",
    image: bearImg,
    whatItMeans: "A bear market is a long downtrend (often 70-85% drawdown in crypto). It feels terrible. It's also where future fortunes are quietly built by patient buyers.",
    beginnerTip: "Bear markets are emotionally brutal but mathematically generous. Dollar-cost average through them and you'll thank yourself when the next bull cycle starts.",
    content: `## The Definition

A **bear market** is the opposite of a bull market — a sustained downtrend, usually defined as a 20%+ drop from recent highs that persists for months. The name comes from the way a bear attacks — swiping its paws *downward*.

In crypto, bear markets are particularly brutal. Bitcoin has historically dropped 70-85% from peaks in each cycle.

## What a Bear Market Feels Like

- News is mostly negative.
- "Crypto is dead" headlines return every few weeks.
- Most altcoins drop 90%+ from their peaks.
- The Lambo influencers vanish.
- Conviction holders question everything.
- Trading volumes plummet.

The mood swings from denial → fear → capitulation → apathy.

## The Phases of a Bear Market

1. **Denial.** Price drops 20%. "It's just a healthy correction."
2. **Anger.** Price drops 50%. Blame turns to manipulation, regulators, anyone but oneself.
3. **Capitulation.** Price drops 70-85%. Massive forced selling. People swear off crypto forever.
4. **Despair.** Sideways grind for months. Volumes dead. Nobody talks about crypto.
5. **Quiet accumulation.** Smart money starts buying. Public still uninterested.

The handover from despair to accumulation is when the next bull cycle quietly begins.

## What Causes Bear Markets

- Macro tightening (rate hikes, recession fears).
- Regulatory shocks (China bans, SEC lawsuits).
- Major collapses (Terra, FTX, 3AC).
- Excessive leverage from the previous bull blowing up.
- Just plain exhaustion after a parabolic rally.

## Why Bear Markets Are an Opportunity

This is the counterintuitive part: **historically, the best buying opportunities have always been deep in bear markets.**

Anyone who bought BTC in:
- November 2018 ($3,200) saw 20x by 2021.
- March 2020 ($4,000) saw 18x by 2021.
- November 2022 ($16,000) saw 5-7x by 2024-25.

The catch: it's emotionally brutal. Buying when everyone is screaming "crypto is dead" is hard.

## How to Survive a Bear Market

1. **Dollar-cost average.** Keep buying small amounts on schedule. Don't try to time the bottom.
2. **Hold quality.** BTC and ETH have always recovered. Most altcoins haven't. Concentrate in the strongest assets.
3. **Cut leverage to zero.** Bear market liquidations are devastating.
4. **Stake and earn.** Use bear market time to earn yield on what you hold.
5. **Spend less screen time.** Watching red candles every day is bad for mental health.
6. **Learn.** Read, study, build skills. The next bull market rewards those who used the bear to prepare.

## Common Mistakes

- **Selling at the bottom.** Capitulation feels rational at the time. It's almost always wrong.
- **Trying to short the way down.** Easier to lose than win. Many "bear traders" get squeezed by violent rallies.
- **Quitting the space entirely.** Most people who quit in 2018 missed the 2021 bull. Most who quit in 2022 missed the 2024 ETF rally.

## The Bottom Line

Bear markets are where future fortunes are quietly built. The price action is painful, the mood is awful, and the discipline required is enormous — but the buyers who survive bear markets are the ones who win the next cycle.`,
  },
  {
    id: 405,
    title: "Altcoin",
    slug: "glossary-altcoin",
    summary: "Any cryptocurrency that isn't Bitcoin — from Ethereum to dog-themed memes.",
    category: "Glossary",
    categorySlug: "glossary",
    publishedAt: "2026-04-12T08:00:00Z",
    readTime: "4 min",
    image: altcoinImg,
    whatItMeans: "Altcoin = 'alternative coin.' Originally meant any non-Bitcoin crypto, today the term covers everything from Ethereum to obscure tokens with a market cap of $50,000.",
    beginnerTip: "Altcoins offer bigger upside but bigger downside. As a beginner, keep at least 70% of your portfolio in BTC and ETH before exploring further down the risk curve.",
    content: `## The Definition

An **altcoin** is any cryptocurrency other than Bitcoin. The term comes from "alternative coin" — originally used in 2011 when the first non-Bitcoin coins (like Namecoin and Litecoin) appeared.

Today, "altcoin" covers a massive range:
- **Ethereum (ETH)** — the second-largest crypto, often considered its own category.
- **Layer 1s** like Solana, Avalanche, Cardano — competing smart contract platforms.
- **Layer 2s** like Arbitrum, Optimism, Base — faster networks built on Ethereum.
- **DeFi tokens** like Uniswap (UNI), Aave (AAVE).
- **Meme coins** like Dogecoin, Shiba Inu, PEPE.
- **Stablecoins** like USDT, USDC, DAI.
- **Privacy coins** like Monero, Zcash.

## How Altcoins Are Different from Bitcoin

| Feature | Bitcoin | Altcoins |
|---------|---------|----------|
| Purpose | Store of value, money | Varies (apps, finance, games, memes) |
| Supply | Fixed at 21M | Often inflationary or uncapped |
| Volatility | High | Higher (often 2-3× BTC's volatility) |
| Liquidity | Massive | Varies wildly |
| Risk of going to zero | Very low | Significant |

## The Altcoin Risk-Reward

Altcoins can deliver enormous returns:
- **Ethereum** went from $1 in 2015 to $4,800 in 2021 (4,800×).
- **Solana** went from $0.50 in 2020 to $260 in 2021 (520×).

But they can also collapse spectacularly:
- **Terra/LUNA** went from $119 to $0.0001 in three days (2022).
- The vast majority of altcoins from 2017's ICO boom no longer exist.

The risk-reward profile is: bigger pumps, bigger dumps, and a real chance of total loss.

## "Altseason"

In a typical bull cycle:
1. Bitcoin rallies first.
2. ETH starts catching up.
3. Then large-cap altcoins (top 20).
4. Finally, mid and small caps explode in what traders call **altseason**.

Altseason is when most of the wild 100× stories happen — and also when most of the next cycle's losses are quietly being set up.

## How to Evaluate an Altcoin

Ask:

1. What does the project actually *do*? Real product or vaporware?
2. Who's the team? Public, doxxed, with track records — or anonymous?
3. What's the tokenomics? Inflation rate, vesting schedules, % held by insiders?
4. Real users or just speculation?
5. Where does it sit in market cap?
6. Has it survived a bear market?

A coin that fails 3 out of 6 of these is a red flag. A coin that fails 5 out of 6 is a likely loss.

## Common Mistakes

- **Buying random altcoins because they're "cheap."** Most are cheap because they're worthless.
- **Putting too much in one alt.** A 30% altcoin allocation is plenty for beginners.
- **Trusting Twitter shillers.** Anyone publicly hyping a coin is usually trying to exit their bag.
- **Not taking profits.** Many people hold 100× winners all the way back to break-even.

## The Bottom Line

Altcoins are where excitement lives in crypto. They're also where most retail money quietly disappears. Allocate carefully, take profits along the way, and remember that for every Solana, there are 10,000 dead tokens.`,
  },
  {
    id: 406,
    title: "Liquidity",
    slug: "glossary-liquidity",
    summary: "How easily you can buy or sell a coin without moving its price — the hidden factor behind every trade.",
    category: "Glossary",
    categorySlug: "glossary",
    publishedAt: "2026-04-11T08:00:00Z",
    readTime: "4 min",
    image: liquidityImg,
    whatItMeans: "Liquidity is how 'deep' a market is. A liquid market lets you buy or sell large amounts without affecting the price. An illiquid market means even a small order can crash the price 20%.",
    beginnerTip: "Always check daily volume and order book depth before buying any coin. Low liquidity is the silent reason many altcoin trades blow up.",
    content: `## The Definition

**Liquidity** is the ability to convert an asset into cash (or another asset) without significantly moving its price. The more buyers and sellers active at any given time, the more liquid the market.

## A Quick Example

- **Bitcoin on Binance:** millions of dollars in buy/sell orders close to the current price. You can buy $1M worth and barely move the price by 0.1%.
- **A small altcoin on a small exchange:** maybe $10,000 in nearby orders. Buying $5,000 might push the price up 20%.

Same trade size, totally different outcomes — because liquidity differs.

## How to Measure Liquidity

Three quick checks:

1. **24-hour volume** — total dollar amount traded in the last day. Higher = more liquid.
2. **Order book depth** — total buy/sell orders within 1-2% of the current price. Most exchanges show this directly.
3. **Spread** — the gap between the highest bid and the lowest ask. A small spread (under 0.1%) = liquid. A wide spread (over 1%) = illiquid.

## Why Liquidity Matters for Beginners

- **You can actually exit.** Try selling $10,000 of an obscure token and you might find no one is buying.
- **Less slippage.** In liquid markets, the price you see is roughly the price you get. In illiquid ones, you may get 5-10% worse.
- **Less manipulation.** Whales can rug-pull or manipulate small markets easily. Big markets are harder to push around.
- **Better stop-loss execution.** In a flash crash, illiquid stop-losses can fill at terrible prices.

## DeFi Liquidity

In DeFi (decentralized exchanges), liquidity comes from **liquidity pools** — pots of two tokens that traders swap against. The bigger the pool, the more liquid the trading pair.

Liquidity providers (LPs) earn fees for supplying capital but take on **impermanent loss risk** — the chance that holding the assets directly would have been more profitable than supplying them as liquidity.

## Liquidity Crises

In extreme moments — major crashes, exchange failures, regulatory news — liquidity can suddenly evaporate. Spreads widen, depth disappears, and everyone tries to exit at once. Even normally liquid coins can briefly become hard to sell at fair prices.

This is why it's wise to have stop-losses set in advance and to avoid using high leverage during volatile windows.

## Liquidity by Tier (Rough Guide)

- **Tier 1 (BTC, ETH):** Trillions of dollars annually. Practically unlimited liquidity.
- **Tier 2 (top 20 coins):** Hundreds of billions in volume. Excellent liquidity on major exchanges.
- **Tier 3 (top 100):** Sufficient for most retail trades.
- **Below top 200:** Liquidity becomes a real concern. Always check depth.
- **Long tail (thousands of micro-cap tokens):** Often impossible to exit large positions cleanly.

## Common Mistakes

- **Not checking volume before buying.** Then realizing you can't sell.
- **Using market orders in illiquid markets.** Massive slippage.
- **Trying to enter or exit during a flash crash.** Spreads explode and you get a terrible fill.
- **Assuming an exchange is liquid because it's well-known.** Always check the specific pair you're trading.

## The Bottom Line

Liquidity is the silent force behind every smooth trade — and the silent killer behind every brutal slippage loss. Always check it before you click buy. Treat illiquid markets the way you'd treat a sketchy alley: maybe interesting, but stay alert.`,
  },

  // ============== HOW-TO ==============
  {
    id: 501,
    title: "How to Create a Crypto Wallet",
    slug: "how-to-create-a-crypto-wallet",
    summary: "Step-by-step setup for your first non-custodial wallet, plus how to back up your seed phrase safely.",
    category: "How-To",
    categorySlug: "how-to",
    publishedAt: "2026-04-16T07:00:00Z",
    readTime: "6 min",
    image: howtoWalletImg,
    whatItMeans: "Creating a wallet means generating a unique 12 or 24-word seed phrase that controls your crypto. Whoever holds those words holds the funds — there's no recovery without them.",
    beginnerTip: "Do this in a quiet room with no cameras around. Write the seed phrase on paper with a pen, never type it into a phone or computer. Skip this step and you risk losing everything.",
    content: `## What You're Actually Creating

When you "create a wallet," you're not creating an account on a server. You're generating a brand-new pair of cryptographic keys. The 12 or 24 words you write down (the **seed phrase**) is a human-readable backup of those keys.

Whoever has the seed phrase has full control of the wallet. Forever. There's no "forgot password," no support team, no recovery. This is the most important concept in crypto — internalize it before you continue.

## Step 1: Pick a Wallet App

For your first wallet, choose one of these well-tested options:

- **MetaMask** (browser + mobile) — best for Ethereum and EVM chains.
- **Phantom** (browser + mobile) — best for Solana, also supports ETH.
- **Trust Wallet** (mobile) — multi-chain, beginner friendly.
- **Rabby Wallet** (browser) — modern alternative to MetaMask.
- **Ledger / Trezor** (hardware) — most secure option, costs $60-200.

For this guide, I'll use a software wallet. The hardware wallet setup is similar but happens on a physical device.

## Step 2: Download from the Official Source

This is the #1 place beginners get scammed.

- Always go to the **official website** (e.g., metamask.io) or the **official App Store / Play Store listing**.
- Verify the developer name matches.
- Never download from a Telegram link, Discord DM, or random Google ad.
- Check installs and reviews — fake apps usually have low numbers.

## Step 3: Create the Wallet

After install:

1. Tap "Create new wallet."
2. Set a strong password. This protects access on the device only — it does *not* replace the seed phrase.
3. Enable biometric login if available (FaceID / fingerprint).
4. Read the warnings about the seed phrase. They're not just legalese — they're survival instructions.

## Step 4: Securely Record the Seed Phrase

When the wallet displays your 12 or 24 words:

1. **Find a quiet, private location.** No cameras, no people.
2. **Write the words on paper with a pen.** In order.
3. **Double-check the spelling.** Even one wrong word and the backup is useless.
4. **Make a second physical copy** (recommended) and store it in a different location.
5. **Never:** screenshot, photograph, type into a notes app, save in a cloud, email yourself, or type into any website.

Pro tip: For larger amounts, consider a metal seed phrase backup (steel plates that survive fire and water). They cost $20-50 and last forever.

## Step 5: Verify the Backup

Most wallets ask you to confirm the seed phrase by typing certain words back. **Do this carefully.** This step ensures your backup actually matches.

If you skip or fake this step, you might find out years later that your backup is wrong — when you've already lost your phone.

## Step 6: Send a Test Amount

Before depositing serious money:

1. Buy or transfer a small amount ($5-10) to your new wallet.
2. Confirm it arrives.
3. Send it back out (or to another address you control) to confirm withdrawals work.
4. Now you know the workflow. Now you can deposit larger amounts.

## Step 7: Lock It Down

- Enable auto-lock after 1-5 minutes of inactivity.
- Turn off any "view balance without password" feature.
- Set up a separate wallet for experimenting with new dApps. Never connect your main wallet to random sites.
- Bookmark the official wallet website. Phishing copycats steal millions every year.

## Common Mistakes

1. **Saving the seed phrase digitally.** Phones get hacked. Cloud accounts get breached. Paper doesn't.
2. **Telling someone you trust.** Friends, partners, family — even close people get curious. The fewer who know, the safer.
3. **Using the same wallet for everything.** Use separate wallets for: long-term holdings, daily spending, and experimentation.
4. **Skipping the test transaction.** Sending $5,000 to a new address you've never tried is a recipe for tears.
5. **Trusting "wallet recovery" services.** They're scams. If your seed phrase is gone, your funds are gone.

## What If You Lose Your Phone?

You install the same wallet on a new device, choose "Restore from seed phrase," and type in the 12-24 words. Your wallet appears exactly as before. This is why the phrase is everything.

## The Bottom Line

Creating a crypto wallet takes 10 minutes. Doing it *safely* takes an extra 15 minutes — and it's the most important 15 minutes you'll spend in crypto. Treat your seed phrase like the master key to a vault, because it is.`,
  },
  {
    id: 502,
    title: "How to Buy Crypto on an Exchange",
    slug: "how-to-buy-crypto-on-an-exchange",
    summary: "From signing up to your first purchase — a smooth, safe walkthrough for first-time buyers.",
    category: "How-To",
    categorySlug: "how-to",
    publishedAt: "2026-04-15T07:00:00Z",
    readTime: "6 min",
    image: howtoBuyImg,
    whatItMeans: "Buying crypto on an exchange is like opening a brokerage account, depositing money, and placing your first stock trade. The mechanics are simple once you've done it once.",
    beginnerTip: "Always make your first purchase tiny ($20-50). The point isn't the money — it's getting comfortable with the process so the next purchase feels routine.",
    content: `## Step 1: Pick a Reputable Exchange

For beginners in 2026, the safest options are:

- **Coinbase** — easiest interface, US-regulated.
- **Kraken** — strong security record, never been hacked.
- **Binance** — most coins, lowest fees, intermediate-friendly.
- **Bitstamp** or **Gemini** — reliable second-tier options.

Avoid exchanges that aren't regulated in your country, aren't on the App Store, or look like they were built last week.

## Step 2: Sign Up and Verify

1. Visit the official exchange website (type the URL — don't follow links).
2. Create an account with a unique password and a recovery email you don't use anywhere else.
3. Enable **app-based 2FA** (Google Authenticator) immediately. Skip SMS.
4. Complete KYC: upload your government ID and a selfie. Wait for approval (typically minutes to a few hours).

## Step 3: Lock Down the Account

Before depositing any money:

- Enable a **withdrawal whitelist** (only pre-approved addresses can receive funds).
- Set up email + 2FA for every login and every withdrawal.
- Disable any features you don't use (futures trading, margin) to reduce attack surface.

These three steps stop nearly every account-takeover attempt.

## Step 4: Deposit Funds

Connect a payment method:

- **Bank transfer (ACH/SEPA):** free or cheap, takes 1-3 days.
- **Debit card:** instant, but charges 2-4%.
- **Wire transfer:** for large amounts, fixed fee around $10-25.

Start small. A $50-100 first deposit is plenty to learn with.

## Step 5: Place Your First Buy

Most exchanges have a simple "Buy" tab and an advanced trading interface. For your first purchase, the simple tab is fine.

For better prices and lower fees, use the **trading interface**:

1. Pick a trading pair (e.g., BTC/USD).
2. Select **Limit** order.
3. Enter a price slightly below the current market price.
4. Enter the amount you want to buy.
5. Review the total + fees. Click Buy.
6. Wait for the order to fill.

Limit orders cost less in fees and force you to think before you click.

## Step 6: Verify the Purchase

After the trade:

- Check that the BTC (or ETH, or whatever) balance appears in your account.
- Check the actual price you paid versus the price you intended.
- Save the trade confirmation.

## Step 7: Withdraw to Your Wallet

For amounts over a few hundred dollars, don't leave it on the exchange long-term. Move it to a wallet you control.

1. Open your wallet app and copy your **receive address**.
2. On the exchange, click "Withdraw."
3. Paste the address. **Verify the first 6 and last 6 characters carefully.** Malware can swap clipboard text.
4. Send a small test amount first ($5-10). Confirm it arrives.
5. Once confirmed, send the rest.

This habit alone protects you from exchange hacks and bankruptcies (remember FTX).

## Step 8: Track Your Holdings

Most exchanges show your portfolio with profit/loss. You can also use:

- **CoinGecko Portfolio**
- **CoinMarketCap Watchlist**
- **Zerion** or **DeBank** for on-chain wallets

Don't check the price obsessively. Once a week is plenty for long-term holders.

## Common Mistakes

- **Using market orders for everything.** Slippage and higher fees add up fast.
- **Storing large amounts on exchanges.** Use a hardware wallet for serious money.
- **Sending to the wrong address.** Always verify carefully — crypto transactions are irreversible.
- **Sending to the wrong network.** Sending USDT on Ethereum to a wallet that only supports USDT on Tron means losing funds. Always match the network.
- **Reusing passwords.** Use a password manager. Every exchange should have its own unique credentials.

## How Long Does Each Step Take?

| Step | Typical time |
|------|--------------|
| Signup | 5 minutes |
| KYC verification | 5 min – 24 hours |
| First deposit (bank) | 1-3 days |
| First buy order | 1-30 minutes to fill |
| Withdrawal to wallet | 1 minute (Solana) – 60 minutes (Bitcoin) |

## The Bottom Line

Buying crypto on an exchange is straightforward when you take it step by step. Use a regulated platform, lock down the account, start small, and always move serious money to a wallet you control. Once you've done it once, every future purchase is a five-minute task.`,
  },
  {
    id: 503,
    title: "How to Transfer Crypto Safely",
    slug: "how-to-transfer-crypto-safely",
    summary: "Sending crypto is irreversible — here's how to do it without losing money to typos, wrong networks, or scams.",
    category: "How-To",
    categorySlug: "how-to",
    publishedAt: "2026-04-14T07:00:00Z",
    readTime: "6 min",
    image: howtoTransferImg,
    whatItMeans: "A crypto transfer can't be undone. Send to the wrong address or wrong network and the funds are usually gone forever. The fix is simple: a tiny test transfer first, every time.",
    beginnerTip: "ALWAYS send a small test amount ($5-10) first when sending to a new address — even your own. Once it arrives, send the rest. This single habit prevents 95% of disasters.",
    content: `## Why Transfers Are Different from Bank Transfers

When you send money via a bank, the bank can usually reverse a wrong transfer. Crypto is different — once a transaction is confirmed on the blockchain, it's permanent. There's no helpdesk, no chargebacks, no rollbacks.

Three things you must always check before sending:

1. The **destination address**.
2. The **network** (Ethereum, Solana, BSC, etc).
3. The **amount and fee**.

Get any of these wrong and the funds may be gone for good.

## Step 1: Get the Receive Address

Go to the wallet or exchange where you want to *receive* the funds:

1. Click "Receive" or "Deposit."
2. Pick the correct asset (BTC if sending BTC, USDT if sending USDT, etc).
3. Pick the correct **network** (this is critical — see below).
4. Copy the address shown.

The address is a long string like \`bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh\`.

## Step 2: Understand Networks

Many tokens exist on multiple blockchains:

- **USDT** is on Ethereum, Tron, Solana, Polygon, and more.
- **USDC** is on a dozen networks.
- **BTC** has classic Bitcoin, plus wrapped versions on other chains.

If you send USDT-Tron to a USDT-Ethereum address, the funds usually disappear into the void. **Always confirm the network on both ends matches.**

## Step 3: Initiate the Transfer

Back at the sending wallet/exchange:

1. Click "Send" or "Withdraw."
2. Pick the same asset and network as the receive side.
3. Paste the destination address.
4. **Verify the first 6 and last 6 characters character by character.**
   - Why? Malware can replace addresses copied to your clipboard. The middle of the address may match, but the start and end won't.
5. Enter the amount.
6. Review the network fee (gas).

## Step 4: Send a Test Amount First

For any new address, especially large transfers:

1. Send a tiny amount first ($5-10 worth).
2. Wait for it to confirm on the receiving end.
3. Confirm the amount arrived correctly.
4. Then send the rest.

This is not optional. It is the single most important habit in crypto.

## Step 5: Monitor the Transaction

Most wallets show a pending transaction with a transaction hash (TX ID). You can paste this hash into a block explorer:

- Bitcoin: mempool.space or blockchain.com
- Ethereum: etherscan.io
- Solana: solscan.io

Confirm the transaction shows the correct amount and destination.

## Step 6: Wait for Confirmations

Different networks take different times:

| Network | Typical confirmation time |
|---------|---------------------------|
| Solana | A few seconds |
| Ethereum | 1-5 minutes |
| BSC | 1-3 minutes |
| Bitcoin | 10-60 minutes (3 confirmations recommended) |

Many exchanges require multiple confirmations before crediting your account.

## Common Causes of Lost Crypto

1. **Wrong address.** Usually due to malware or rushed copy-paste.
2. **Wrong network.** USDT-BSC sent to a USDT-Ethereum address. Funds are technically still on the blockchain but unrecoverable for most users.
3. **Sending to a contract address that doesn't accept that asset.**
4. **Sending to an exchange that doesn't list the asset.** Funds get stuck.
5. **Phishing.** A fake site shows a fake "deposit address" that belongs to a scammer.

## Address Whitelist Habit

Most exchanges let you whitelist trusted withdrawal addresses. Once enabled:

- Only addresses you've pre-approved can receive funds.
- Adding a new address requires email + 2FA confirmation.
- Even if your account is hacked, the attacker can't withdraw to a new address.

This single feature has saved countless people during account takeovers.

## Tips for Large Transfers

- **Break it into chunks.** Send 25%, confirm, then send the rest.
- **Choose lower-traffic times.** Less network congestion = lower fees, fewer mistakes.
- **Verify the address from a second device.** Compare the address shown on your phone to the address shown on a different device or block explorer.
- **For very large amounts**, use a hardware wallet that displays the address on its own screen — independent of your possibly-compromised computer.

## What If I Make a Mistake?

If you sent to the wrong network but to an address you control:
- Sometimes recoverable by importing the seed phrase into a wallet that supports that network. Costs gas, takes effort, but possible.

If you sent to the wrong address you don't control:
- Almost always unrecoverable. The exception is if it went to a major exchange's address — they may help you recover it for a fee, but no guarantees.

## The Bottom Line

Crypto transfers are simple but unforgiving. Verify the address. Verify the network. Always send a tiny test first. Do those three things every time and you'll never lose a transfer.`,
  },
  {
    id: 504,
    title: "How to Use Stop-Loss",
    slug: "how-to-use-stop-loss",
    summary: "A stop-loss is the safety net that keeps a single bad trade from wrecking your account.",
    category: "How-To",
    categorySlug: "how-to",
    publishedAt: "2026-04-13T07:00:00Z",
    readTime: "5 min",
    image: howtoStopLossImg,
    whatItMeans: "A stop-loss is an automatic order that sells your position if the price drops to a level you set. It limits how much you can lose on a single trade before emotion gets a chance to make things worse.",
    beginnerTip: "Set your stop-loss BEFORE you enter the trade — never after. Once you're in a position, fear and hope cloud your judgment.",
    content: `## What a Stop-Loss Actually Does

A **stop-loss** (or "stop") is a conditional order that triggers an automatic sell when the price hits a level you set. It's the trader's seatbelt: you hope you never need it, but the day you do, you'll be glad it's there.

## Why You Need One

Without a stop-loss, every trade has unlimited downside. A single 50% drop can turn a manageable mistake into a portfolio-killing one. Worse, in the moment, hope and denial often prevent traders from cutting losses manually. The stop-loss removes the emotion — the order fires whether or not you're watching.

## The Basics: How to Place a Stop-Loss

Most exchanges support these order types:

- **Stop-loss market** — when the trigger price is hit, the order becomes a market sell. Guarantees execution but can suffer from slippage during fast moves.
- **Stop-loss limit** — when triggered, the order becomes a limit sell at a specified price. Better price control, but may not fill in a fast crash.

For beginners, a **stop-loss market** is usually safer — you'd rather take a slightly worse fill than not exit at all.

## Where to Place Your Stop

There are three popular methods:

### 1. Below Recent Swing Low (Structural Stop)

Identify the most recent obvious low on the chart. Place your stop just below it (1-2% buffer for fakeouts).

If price breaks the structural low, your bullish thesis is invalidated.

### 2. Below Major Support

If a key horizontal support holds your trade idea together, place the stop just below it.

### 3. Fixed Percentage Stop

Set the stop at a fixed % below entry — e.g., 5% for short-term trades, 10-15% for swing trades.

This is simpler but ignores chart structure. Combine with method 1 or 2 when possible.

## Position Sizing Around Your Stop

A stop-loss isn't just about price — it's about how much money is at risk. Use this formula:

\`\`\`
Position size = (Account × Risk %) / (Entry – Stop-loss)
\`\`\`

Example:
- Account: $10,000
- Risk per trade: 1% = $100
- Entry: $50,000
- Stop-loss: $48,000 (4% below)

Position size = $100 / ($50,000 - $48,000) = 0.05 BTC ≈ $2,500 position.

Even though you're only deploying $2,500, you risk $100 if the stop triggers. This keeps no single trade from devastating your account.

## Trailing Stop-Loss

A **trailing stop** automatically moves with the price as it goes in your favor — locking in profit while still allowing room to run.

Example:
- Buy at $50,000.
- Set a 10% trailing stop.
- Price rises to $60,000 → trailing stop moves up to $54,000.
- Price drops to $54,000 → stop triggers at a $4,000 profit instead of a loss.

Great for letting winners run without having to babysit the chart.

## Common Mistakes

1. **Placing stops too tight.** Crypto is volatile. A 1-2% stop will get whipped out by normal noise.
2. **Placing stops at obvious round numbers.** Whales and bots hunt these. Add a 1-2% buffer.
3. **Moving the stop down to "give it more room."** This is denial. The whole point of a stop is that it's pre-decided and untouchable.
4. **Removing the stop after a loss.** Hope is not a strategy. Take the loss, learn the lesson.
5. **Using leverage without a stop.** A guaranteed way to get liquidated.
6. **Placing stops just below support.** Place them with a buffer beyond support — common stop hunts target the obvious level.

## Stop-Loss Psychology

Setting a stop-loss feels like admitting you might be wrong. Many beginners avoid it because of this. But a stop is the opposite — it's a recognition that *no trade is certain*, and you're protecting the rest of your account so you can trade again tomorrow.

Pros set stops automatically. Beginners argue with them. The pros usually still have an account a year later.

## A Quick Setup Routine

Every trade, before you click buy:

1. Decide your invalidation level (where would your idea be wrong?).
2. Set a stop just beyond that level.
3. Calculate your position size based on the stop distance and your max risk.
4. Place both the entry and the stop together (most exchanges allow this as one workflow — "OCO" orders).
5. Walk away. The orders will manage themselves.

## The Bottom Line

A stop-loss is the cheapest insurance policy in trading. It costs nothing until you need it — and when you need it, it can save your account. Set one before every trade, accept that some will trigger on noise, and never, ever move it down. Discipline at the entry is the difference between traders who survive and those who don't.`,
  },
  {
    id: 505,
    title: "How to Track Your Crypto Portfolio",
    slug: "how-to-track-crypto-portfolio",
    summary: "From simple spreadsheets to portfolio apps — how to monitor your holdings without obsessing over price.",
    category: "How-To",
    categorySlug: "how-to",
    publishedAt: "2026-04-12T07:00:00Z",
    readTime: "6 min",
    image: howtoPortfolioImg,
    whatItMeans: "Portfolio tracking is the discipline of knowing what you own, what it's worth, and how it's performing. Done right, it sharpens decisions. Done wrong, it becomes an addiction.",
    beginnerTip: "Check your portfolio once a week, not 50 times a day. Constant checking causes emotional decisions and stress. Set it up, then leave it alone.",
    content: `## Why Tracking Matters

If you don't know what you own, you can't make good decisions. A portfolio tracker tells you:

- Total holdings across exchanges and wallets.
- Current dollar value.
- Your cost basis (what you paid).
- Profit/loss per coin and overall.
- Allocation breakdown (% in BTC, ETH, etc).
- Tax data when it's time to report.

Without this, you're flying blind.

## The Three Tiers of Portfolio Tracking

### Tier 1: Simple Spreadsheet

For small portfolios (under 10 coins), a Google Sheet works perfectly:

| Coin | Amount | Avg Buy Price | Current Price | Cost Basis | Current Value | P&L |
|------|--------|---------------|---------------|------------|---------------|-----|
| BTC | 0.05 | $40,000 | $97,000 | $2,000 | $4,850 | +$2,850 |
| ETH | 1.5 | $2,000 | $5,200 | $3,000 | $7,800 | +$4,800 |

Use the GOOGLEFINANCE() function or import a CoinGecko API to auto-update prices.

Pros: Free, customizable, no app to trust.
Cons: Manual entry, no on-chain wallet support.

### Tier 2: Portfolio Apps

For 10-50 holdings across multiple exchanges:

- **CoinGecko Portfolio** — free, simple, no signup needed.
- **CoinMarketCap Watchlist** — same idea, well-known.
- **Delta** — clean iOS/Android app, exchange API support.
- **CoinStats** — multi-exchange syncing, good free tier.

Most let you connect exchange APIs (read-only) so trades sync automatically. Always use **read-only API keys** — never give withdrawal permissions.

### Tier 3: Pro-Grade Tools

For serious portfolios, including DeFi positions:

- **Zerion** — best for Ethereum/EVM wallets and DeFi.
- **DeBank** — great for tracking DeFi positions across chains.
- **CoinTracker** / **Koinly** — tax-focused, generates reports for filing.
- **Rotki** — open-source, privacy-respecting, runs locally.

## What to Track Beyond Price

A good portfolio tracker should also show:

1. **Allocation %.** Are you over-concentrated in one coin? (More than 50% in one altcoin is risky.)
2. **Cost basis.** What you actually paid, including fees.
3. **Realized vs unrealized P&L.** Realized = already sold. Unrealized = paper gains.
4. **Time held.** Important for tax purposes (long-term vs short-term in many countries).
5. **Yield earned.** From staking, lending, or LPing.

## Setting Up Read-Only API Keys

Most major exchanges allow API keys with specific permissions:

1. In exchange settings → API Management → Create New Key.
2. **Enable only "Read"** permissions. Disable trading, futures, withdrawal.
3. Whitelist the IP address of the tracker app if possible.
4. Save the key in your password manager.
5. Paste it into the portfolio app.

The app can now read your balances and trades without ever being able to move your funds.

## Tracking On-Chain Wallets

For non-custodial wallets:

1. Open Zerion, DeBank, or Rotki.
2. Paste your **public address** (never the seed phrase).
3. Tools auto-detect tokens, NFTs, and DeFi positions.

Add multiple wallets to get a unified portfolio view.

## How Often to Check

This is the part most people get wrong.

- **Daily checking** = mild anxiety, suboptimal decisions.
- **Hourly checking** = severe stress, almost guaranteed bad trades.
- **Weekly checking** = ideal for long-term investors.
- **Monthly checking** = great for true passive holders.

If you find yourself opening the app 20 times a day, your position size is probably too big. Cut it until checking once a week feels comfortable.

## Tax Tracking

Crypto is taxable in most countries. Each trade is potentially a taxable event.

For simple portfolios, manual records may be enough. For active traders, use:

- **Koinly** or **CoinTracker** — sync exchanges and wallets, generate tax reports.
- Be aware of:
  - Trades between coins (e.g., BTC → ETH) — usually a taxable event.
  - Staking rewards — usually taxable income.
  - Wallet-to-wallet transfers between your own wallets — usually not taxable.

## Common Mistakes

1. **Tracking only what's on exchanges.** Wallet holdings get forgotten until tax time.
2. **Giving full API permissions.** Read-only keys only. Always.
3. **Sharing portfolio screenshots publicly.** Makes you a target.
4. **Confusing "realized" vs "unrealized" gains.** Paper gains are not money in the bank.
5. **Updating spreadsheets sporadically.** Stale data leads to bad decisions.

## A Simple Monthly Routine

Once a month, spend 30 minutes:

1. Open your portfolio tracker.
2. Note total value and % allocation.
3. Check if any coin is now over 40% of total — consider rebalancing.
4. Review trades from the past month — what worked, what didn't.
5. Update your spreadsheet or backup.

That's it. The rest of the month, leave it alone.

## The Bottom Line

A portfolio tracker is a tool, not a hobby. Set it up well, sync your exchanges and wallets, then check on a healthy schedule. The discipline of *knowing without obsessing* is the mark of a mature crypto investor.`,
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
