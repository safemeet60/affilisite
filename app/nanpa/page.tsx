import React from 'react';
import { AlertTriangle, ArrowRight, Crown, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import ViewCount from '../components/ViewCount';
import DmmProducts from '../components/DmmProducts';
import LiveChatBanner from '../components/LiveChatBanner';
import { fetchDmmItems } from '../lib/dmm';

const YoutubeIcon = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const videos = [
  {
    rank: 1,
    id: "x3PlvZAd30E",
    title: "ナンパ動画 第1位",
    views: "－",
    description: "街中でのナンパ動画。自然な声かけから展開する様子がリアルすぎてコメ欄が大盛り上がり。こんな出会いが実在するのかと話題騒然。",
    color: "text-yellow-500",
  },
  {
    rank: 2,
    id: "mp3UOsvxbfM",
    title: "ナンパ動画 第2位",
    views: "－",
    description: "ナンパ師の神トーク術が炸裂。断られてもへこたれない姿勢と最終的な展開に視聴者が釘付け。「俺もやってみたい」とコメントが殺到。",
    color: "text-gray-300",
  },
  {
    rank: 3,
    id: "_h9rDmJfL4c",
    title: "ナンパ動画 第3位",
    views: "－",
    description: "一見普通のナンパ動画に見えて、途中からの急展開が神すぎる。リピーターが続出している隠れた名作。必見。",
    color: "text-orange-500",
  },
  {
    rank: 4,
    id: "3YX0XBOClbA",
    title: "ナンパ動画 第4位",
    views: "－",
    description: "声をかけた相手の反応が想定外すぎる。「これ本当に偶然？」と議論になった問題作。コメ欄は修羅場状態。",
    color: "text-pink-400",
  },
  {
    rank: 5,
    id: "Cmpqs6-7sN0",
    title: "ナンパ動画 第5位",
    views: "－",
    description: "王道ナンパ動画だが完成度が高すぎる。テクニックのレベルが別次元で、見るだけで勉強になると評判。",
    color: "text-gray-300",
  },
  {
    rank: 6,
    id: "OIfUCai6QO0",
    title: "ナンパ動画 第6位",
    views: "－",
    description: "まさかの展開に視聴者騒然。「こんな子いるの？」とコメ欄が信じられない報告で溢れかえった注目作。",
    color: "text-gray-300",
  },
  {
    rank: 7,
    id: "qYRS1k4h1CE",
    title: "ナンパ動画 第7位",
    views: "－",
    description: "渋谷・新宿系ナンパの中でも一際クオリティが高い。相手の表情の変化が絶妙すぎてリピート再生が止まらない。",
    color: "text-gray-300",
  },
  {
    rank: 8,
    id: "7yqlUIM30QI",
    title: "ナンパ動画 第8位",
    views: "－",
    description: "素人感満載なのに結果だけは本物。地味に再生数を伸ばし続けているじわバズ系の注目チャンネル。",
    color: "text-gray-300",
  },
  {
    rank: 9,
    id: "HU4t5vVmk-M",
    title: "ナンパ動画 第9位",
    views: "－",
    description: "ランキング入りは9位だが内容は上位級。一度見たら忘れられない衝撃展開が詰まった必見動画。",
    color: "text-gray-300",
  },
  {
    rank: 10,
    id: "P0nfhkNPd1I",
    title: "ナンパ動画 第10位",
    views: "－",
    description: "10位ながら隠れファンが多い実力派動画。「地味に一番好き」というコメントが多く、リピーター率が異常に高い。",
    color: "text-gray-300",
  },
  {
    rank: 11,
    id: "6By8kX8STnE",
    title: "ナンパ動画 第11位",
    views: "－",
    description: "最新追加のダークホース。まだ知名度は低いが内容は圧倒的。今のうちに見ておかないと後悔する一本。",
    color: "text-gray-300",
  },
];

export default async function NanpaPage() {
  const dmmItems = await fetchDmmItems('ナンパ 素人');
  return (
    <div className="bg-gray-900 text-gray-200 font-sans min-h-screen">
      {/* ヘッダー */}
      <header className="bg-gray-950 border-b border-pink-600 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-pink-500 tracking-wider">夜のトレンドまとめCH</h1>
          <span className="text-xs text-gray-400">🚨 閲覧注意 🚨</span>
        </div>
        {/* タブナビ */}
        <nav className="bg-gray-900 border-t border-gray-700 overflow-x-auto">
          <div className="container mx-auto px-4 flex gap-1 min-w-max">
            <Link href="/" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition whitespace-nowrap">散歩・ハプニング</Link>
            <Link href="/nanpa" className="px-4 py-2 text-sm text-white bg-pink-700 border-b-2 border-pink-400 font-bold whitespace-nowrap">ナンパ動画</Link>
            <Link href="/otoko" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition whitespace-nowrap">男磨き</Link>
            <Link href="/kyaba" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition whitespace-nowrap">キャバ嬢</Link>
            <Link href="/club" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition whitespace-nowrap">ナイトクラブ</Link>
            <Link href="/gal" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition whitespace-nowrap">ギャル</Link>
            <Link href="/serebu" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition whitespace-nowrap">セレブ</Link>
          </div>
        </nav>
      </header>

      {/* ヒーローセクション */}
      <section className="bg-gray-800 text-center py-10 px-4 border-b border-gray-700">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight text-white">
            今、YouTubeで一番スゴい。<br />
            <span className="text-pink-500" style={{ textShadow: '0 0 5px #ec4899, 0 0 10px #ec4899' }}>神展開必至</span>のナンパ動画ランキング
          </h2>
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            再生回数急上昇中！消される前に絶対見ておきたい、リアルすぎるナンパ動画を厳選まとめ。
          </p>
          <p className="text-gray-500 text-xs leading-relaxed">
            ナンパ / 即出会い / 素人 / 人妻ナンパ / 女子大生ナンパ / 声かけ / YouTube / xvideo超え / トランプ / まとめ
          </p>
        </div>
      </section>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 max-w-3xl pb-16 mt-8">

        {/* 最上部アフィリエイト誘導 */}
        <div className="bg-gradient-to-r from-pink-900 to-purple-900 rounded-lg p-5 mb-10 border border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.3)] animate-pulse hover:animate-none transition">
          <h3 className="flex items-center justify-center text-white font-bold text-lg mb-2">
            <AlertTriangle className="text-yellow-400 mr-2" size={20} />
            YouTubeの規制にウンザリしていませんか？
          </h3>
          <p className="text-center text-sm text-pink-200 mb-4">
            モザイクなし、規制なしの「本番」が見たいなら、DMMのプレミアムVODがおすすめ。今なら初回30日間無料でグラビア・大人向け作品が見放題！
          </p>
          <a href="https://al.dmm.co.jp/?lurl=https%3A%2F%2Fwww.dmm.co.jp%2Fdigital%2Fvideoa%2F-%2Flist%2F%3Fsort%3Dranking&af_id=safemeet60-001&ch=toolbar&ch_id=link" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg text-lg transition duration-200">
            無料で過激な動画を見る（18禁） <ArrowRight className="ml-2" size={20} />
          </a>
          <p className="text-center text-xs text-gray-400 mt-2">※無料期間中に解約すれば0円です。</p>
        </div>

        <h3 className="flex items-center text-xl font-bold border-l-4 border-pink-500 pl-3 mb-6 text-white">
          <Crown className="text-yellow-500 mr-2" size={24} /> ナンパ動画ランキング
        </h3>

        {videos.map((video) => (
          <div key={video.rank} className="bg-gray-800 rounded-lg shadow-lg mb-8 overflow-hidden border border-gray-700 transition hover:scale-[1.02]">
            <div className="bg-gray-950 px-4 py-3 border-b border-gray-700 flex justify-between items-center">
              <span className={`font-bold ${video.color} flex items-center`}>
                {video.rank === 1 && <Crown className="mr-1" size={18} />}
                {video.rank}位：{video.title}
              </span>
              <ViewCount videoId={video.id} />
            </div>
            <div className="p-4">
              <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="block w-full aspect-video bg-black flex-col items-center justify-center rounded-md mb-4 relative overflow-hidden group border border-gray-600">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition duration-300"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <YoutubeIcon className="text-red-600 drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] group-hover:scale-110 transition duration-300" size={64} />
                  <span className="text-white font-bold mt-2 opacity-0 group-hover:opacity-100 transition duration-300">YouTubeで見る</span>
                </div>
              </a>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">{video.description}</p>
              <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded transition duration-200 text-sm">
                YouTubeでこの動画を見る <ExternalLink className="ml-2" size={16} />
              </a>
            </div>
          </div>
        ))}

        {/* DMM API 関連商品 */}
        <DmmProducts items={dmmItems} title="本物のナンパ成功作品はDMMで（18禁）" />

        {/* 出会い系アフィリエイトバナー */}
        <div className="mb-10 flex flex-col items-center gap-2">
          <a href="https://px.a8.net/svt/ejp?a8mat=4B1OTP+9IYGI+1J1E+5YJRL" rel="nofollow">
            <img style={{ border: 0 }} width={468} height={60} alt="" src="https://www23.a8.net/svt/bgt?aid=260419309016&wid=001&eno=01&mid=s00000007133001001000&mc=1" />
          </a>
          <img style={{ border: 0 }} width={1} height={1} src="https://www14.a8.net/0.gif?a8mat=4B1OTP+9IYGI+1J1E+5YJRL" alt="" />
        </div>

        {/* DMM ライブチャット */}
        <LiveChatBanner />

        {/* A8.netバナー */}
        <div className="mt-6 mb-10 flex flex-col items-center gap-2">
          <a href="https://px.a8.net/svt/ejp?a8mat=4B1OTO+37I44Y+50+2I0IY9" rel="nofollow">
            <img style={{ border: 0 }} width={468} height={60} alt="" src="https://www28.a8.net/svt/bgt?aid=260419308194&wid=001&eno=01&mid=s00000000018015119000&mc=1" />
          </a>
          <img style={{ border: 0 }} width={1} height={1} src="https://www17.a8.net/0.gif?a8mat=4B1OTO+37I44Y+50+2I0IY9" alt="" />
        </div>

      </main>

      {/* フッター */}
      <footer className="bg-gray-950 text-gray-500 text-center py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-xs">
          <p className="mb-2">※当サイトはYouTubeの規約に準拠したリンクまとめサイトです。動画の著作権は各クリエイターに帰属します。</p>
          <p className="mb-2">※本記事にはプロモーション（PR）が含まれています。</p>
          <p>&copy; 2026 夜のトレンドまとめCH</p>
        </div>
      </footer>
    </div>
  );
}
