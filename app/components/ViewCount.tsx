'use client';

import { useEffect, useState } from 'react';

function formatViews(count: number): string {
  if (count >= 100_000_000) return `${(count / 100_000_000).toFixed(1)}億回`;
  if (count >= 10_000) return `${Math.floor(count / 10_000)}万回`;
  if (count >= 1_000) return `${(count / 1_000).toFixed(1)}千回`;
  return `${count}回`;
}

export default function ViewCount({ videoId }: { videoId: string }) {
  const [views, setViews] = useState<string | null>(null);

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    if (!key) return;

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${key}`
    )
      .then((r) => r.json())
      .then((data) => {
        const count = parseInt(data?.items?.[0]?.statistics?.viewCount ?? '0', 10);
        if (count > 0) setViews(formatViews(count));
      })
      .catch(() => {});
  }, [videoId]);

  return (
    <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300">
      再生数: {views ?? '取得中…'}
    </span>
  );
}
