export interface DmmItem {
  content_id: string;
  title: string;
  affiliateURL: string;
  imageURL: { list?: string; small?: string; large?: string };
  prices?: { price?: string; list_price?: string };
  review?: { count: number; average: string };
}

export async function fetchDmmItems(keyword: string, hits = 3): Promise<DmmItem[]> {
  const apiId = process.env.DMM_API_ID;
  const affiliateId = process.env.DMM_AFFILIATE_ID ?? 'safemeet60-001';

  if (!apiId) return [];

  const params = new URLSearchParams({
    api_id: apiId,
    affiliate_id: affiliateId,
    site: 'FANZA',
    service: 'digital',
    floor: 'videoa',
    keyword,
    hits: String(hits),
    output: 'json',
    sort: 'rank',
  });

  try {
    const res = await fetch(`https://api.dmm.com/affiliate/v3/ItemList?${params}`);
    if (!res.ok) return [];
    const data = await res.json();
    return data?.result?.items ?? [];
  } catch {
    return [];
  }
}
