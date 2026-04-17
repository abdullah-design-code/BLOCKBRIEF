import { useEffect, useState } from "react";

export type Coin = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
};

export type GlobalData = {
  total_market_cap_usd: number;
  total_volume_usd: number;
  btc_dominance: number;
  market_cap_change_percentage_24h_usd: number;
};

export type FearGreed = {
  value: number;
  classification: string;
};

const REFRESH_MS = 30_000;

function useFetchPolling<T>(fetcher: () => Promise<T>, deps: unknown[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      try {
        const result = await fetcher();
        if (!cancelled) {
          setData(result);
          setError(null);
        }
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Failed to fetch");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    run();
    const id = setInterval(run, REFRESH_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, error };
}

export function useCoins(perPage = 10) {
  return useFetchPolling<Coin[]>(async () => {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=1&sparkline=false&price_change_percentage=24h`
    );
    if (!res.ok) throw new Error("Failed to load coins");
    return res.json();
  }, [perPage]);
}

export function useGlobalMarket() {
  return useFetchPolling<GlobalData>(async () => {
    const res = await fetch("https://api.coingecko.com/api/v3/global");
    if (!res.ok) throw new Error("Failed to load global data");
    const json = await res.json();
    const d = json.data;
    return {
      total_market_cap_usd: d.total_market_cap.usd,
      total_volume_usd: d.total_volume.usd,
      btc_dominance: d.market_cap_percentage.btc,
      market_cap_change_percentage_24h_usd: d.market_cap_change_percentage_24h_usd,
    };
  });
}

export function useFearGreed() {
  return useFetchPolling<FearGreed>(async () => {
    const res = await fetch("https://api.alternative.me/fng/?limit=1");
    if (!res.ok) throw new Error("Failed to load Fear & Greed");
    const json = await res.json();
    const item = json.data?.[0];
    return {
      value: Number(item?.value ?? 0),
      classification: item?.value_classification ?? "Neutral",
    };
  });
}

export function formatUsd(n: number, compact = true) {
  if (!isFinite(n)) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: compact ? "compact" : "standard",
    maximumFractionDigits: compact ? 2 : n < 1 ? 6 : 2,
  }).format(n);
}

export function formatPct(n: number | null | undefined) {
  if (n == null || !isFinite(n)) return "—";
  const sign = n >= 0 ? "+" : "";
  return `${sign}${n.toFixed(2)}%`;
}
