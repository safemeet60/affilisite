import React from 'react';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, Crown, ExternalLink } from 'lucide-react';
import ViewCount from '../components/ViewCount';
import DmmProducts from '../components/DmmProducts';
import LiveChatBanner from '../components/LiveChatBanner';
import { fetchDmmItems } from '../lib/dmm';

const YoutubeIcon = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const NavTabs = () => (
  <nav className="bg-gray-900 border-t border-gray-700 overflow-x-auto">
    <div className="container mx-auto px-4 flex gap-1 min-w-max">
      <Link href="/" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition whitespace-nowrap">散歩・ハプニング</Link>
      <Link href="/nanpa" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition whitespace-nowrap">ナンパ動画</Link>
      <Link href="/otoko" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition whitespace-nowrap">男磨き</Link>
      <Link href="/kyaba" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition whitespace-nowrap">キャバ嬢</Link>
      <Link href="/club" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition whitespace-nowrap">ナイトクラブ</Link>
      <Link href="/gal" className="px-4 py-2 text-sm text-white bg-pink-700 border-b-2 border-pink-400 font-bold whitespace-nowrap">ギャル</Link>
      <Link href="/serebu" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition whitespace-nowrap">セレブ</Link>
    </div>
  </nav>
);

const videos = [
  {
    rank: 1,
    id: "oRMcHstQrbU",
    title: "ギャル動画 第1位",
    views: "－",
    description: "ガチのギャルが登場するYouTube最強クラスの動画。コテコテのギャル文化全開で、コメ欄が「懐かしすぎる」「こんなギャルまだいるの？」で大騒ぎ。",
    color: "text-yellow-500",
  },
  {
    rank: 2,
    id: "rV62-G-3PFg",
    title: "ギャル動画 第2位",
    views: "－",
    description: "見た目のインパクトが規格外すぎるギャル系チャンネル。「ギャルってやっぱり最高」とコメ欄が熱狂。リピーター続出の中毒性がヤバい。",
    color: "text-gray-300",
  },
  {
    rank: 3,
    id: "zADyLU1A72s",
    title: "ギャル動画 第3位",
    views: "－",
    description: "ギャルの本音トークが炸裂する問題作。「こんなこと言っていいの？」と視聴者が引くくらいの赤裸々発言がコメ欄を沸騰させた。",
    color: "text-orange-500",
  },
  {
    rank: 4,
    id: "bWdLlwCArng",
    title: "ギャル動画 第4位",
    views: "－",
    description: "ノリとテンションがぶっ壊れているギャル系の神回。「元気もらえる」「こういう子と遊びたい」というコメントが殺到した話題作。",
    color: "text-pink-400",
  },
  {
    rank: 5,
    id: "O0W41li0xh4",
    title: "ギャル動画 第5位",
    views: "－",
    description: "見た目とのギャップが激しすぎるギャルの素顔に迫った動画。「外見で判断してた自分を反省した」とコメ欄が意外な感動に包まれた。",
    color: "text-gray-300",
  },
  {
    rank: 6,
    id: "fy8T8H9aQ3o",
    title: "ギャル動画 第6位",
    views: "－",
    description: "ギャルの日常vlogなのに随所に神シーンが潜む隠れた名作。「何度見ても発見がある」という廃人コメントが続出。中毒性が異常。",
    color: "text-gray-300",
  },
  {
    rank: 7,
    id: "gC21xQ2-BY4",
    title: "ギャル動画 第7位",
    views: "－",
    description: "まだ知名度は低いが内容は上位級。ギャル系の中でも一際インパクトが強く、「このチャンネル絶対バズる」という予言コメントが多数。今のうちに見ておけ。",
    color: "text-gray-300",
  },
];

export default async function GalPage() {
  const dmmItems = await fetchDmmItems('ギャル 素人');

  return (
    <div className="bg-gray-900 text-gray-200 font-sans min-h-screen">
      <header className="bg-gray-950 border-b border-pink-600 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-pink-500 tracking-wider">夜のトレンドまとめCH</h1>
          <span className="text-xs text-gray-400">🚨 閲覧注意 🚨</span>
        </div>
        <NavTabs />
      </header>

      <section className="bg-gray-800 text-center py-10 px-4 border-b border-gray-700">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight text-white">
            ギャルは永遠に最強。<br />
            <span className="text-pink-500" style={{ textShadow: '0 0 5px #ec4899, 0 0 10px #ec4899' }}>ガチギャル</span>動画ランキング
          </h2>
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            消えそうで消えないギャル文化の精鋭たち。YouTubeで今一番熱いギャル系動画を厳選まとめ。
          </p>
          <p className="text-gray-500 text-xs leading-relaxed">
            ギャル / ギャル系 / 金髪 / 日焼け / ギャルメイク / 素人ギャル / ナンパ / 出会い / まとめ
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 max-w-3xl pb-16 mt-8">

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
          <Crown className="text-yellow-500 mr-2" size={24} /> ギャル動画ランキング
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
                <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition duration-300" />
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
        <DmmProducts items={dmmItems} title="本物のギャル系作品はDMMで（18禁）" />

        {/* DMM ライブチャット */}
        <LiveChatBanner />

        {/* A8.netバナー */}
        <div className="mb-10 flex flex-col items-center gap-2">
          <a href="https://px.a8.net/svt/ejp?a8mat=4B1OTP+9IYGI+1J1E+5YJRL" rel="nofollow">
            <img style={{ border: 0 }} width={468} height={60} alt="" src="https://www23.a8.net/svt/bgt?aid=260419309016&wid=001&eno=01&mid=s00000007133001001000&mc=1" />
          </a>
          <img style={{ border: 0 }} width={1} height={1} src="https://www14.a8.net/0.gif?a8mat=4B1OTP+9IYGI+1J1E+5YJRL" alt="" />
        </div>

        <div className="mt-6 mb-10 flex flex-col items-center gap-2">
          <a href="https://px.a8.net/svt/ejp?a8mat=4B1OTO+37I44Y+50+2I0IY9" rel="nofollow">
            <img style={{ border: 0 }} width={468} height={60} alt="" src="https://www28.a8.net/svt/bgt?aid=260419308194&wid=001&eno=01&mid=s00000000018015119000&mc=1" />
          </a>
          <img style={{ border: 0 }} width={1} height={1} src="https://www17.a8.net/0.gif?a8mat=4B1OTO+37I44Y+50+2I0IY9" alt="" />
        </div>

      </main>

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
