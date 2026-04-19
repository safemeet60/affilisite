import React from 'react';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, Crown, ExternalLink, Search } from 'lucide-react';
import ViewCount from '../components/ViewCount';

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

const NavTabs = () => (
  <nav className="bg-gray-900 border-t border-gray-700 overflow-x-auto">
    <div className="container mx-auto px-4 flex gap-1 min-w-max">
      <Link href="/" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition whitespace-nowrap">散歩・ハプニング</Link>
      <Link href="/nanpa" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition whitespace-nowrap">ナンパ動画</Link>
      <Link href="/otoko" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition whitespace-nowrap">男磨き</Link>
      <Link href="/kyaba" className="px-4 py-2 text-sm text-white bg-pink-700 border-b-2 border-pink-400 font-bold whitespace-nowrap">キャバ嬢</Link>
      <Link href="/club" className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition whitespace-nowrap">ナイトクラブ</Link>
    </div>
  </nav>
);

const videos = [
  {
    rank: 1,
    id: "srCb8EoiMj8",
    title: "キャバ嬢動画 第1位",
    views: "－",
    description: "現役キャバ嬢のリアルな素顔に迫った動画。お店では見せない表情や本音トークが炸裂。「こんな子と話したい」とコメ欄が大盛り上がり。",
    color: "text-yellow-500",
  },
  {
    rank: 2,
    id: "kMLJMh0x6Nk",
    title: "キャバ嬢動画 第2位",
    views: "－",
    description: "トップキャバ嬢が語るモテる男の条件が赤裸々すぎると話題。「これを聞いてから通い方が変わった」という声が続出。必見。",
    color: "text-gray-300",
  },
  {
    rank: 3,
    id: "_EbvhBxjYD4",
    title: "キャバ嬢動画 第3位",
    views: "－",
    description: "キャバクラの裏側を包み隠さず暴露。「キャバ嬢って実はこう思ってるの？」とコメ欄が衝撃の声で溢れかえった問題作。",
    color: "text-orange-500",
  },
  {
    rank: 4,
    id: "gj-zWrVhqOE",
    title: "キャバ嬢動画 第4位",
    views: "－",
    description: "可愛すぎるキャバ嬢がプライベートを大公開。お店の外でのギャップが衝撃的すぎて「本当に同一人物？」とコメ欄騒然。",
    color: "text-pink-400",
  },
  {
    rank: 5,
    id: "iETjq8CqPwQ",
    title: "キャバ嬢動画 第5位",
    views: "－",
    description: "指名No.1キャバ嬢の接客術が神すぎる。「なぜ彼女が売れるのか一瞬でわかった」と絶賛の声が止まらない。",
    color: "text-gray-300",
  },
  {
    rank: 6,
    id: "YT-RudzMnG0",
    title: "キャバ嬢動画 第6位",
    views: "－",
    description: "キャバ嬢が本音で語る「好きな客・嫌いな客」。耳の痛い話ばかりで「全男性に見てほしい」と女性からも支持を集める。",
    color: "text-gray-300",
  },
  {
    rank: 7,
    id: "oOfj8ILLKqQ",
    title: "キャバ嬢動画 第7位",
    views: "－",
    description: "夜の世界のリアルを赤裸々に語る元キャバ嬢の告白動画。「知らなかった事実ばかりで衝撃」とコメ欄が荒れまくった話題作。",
    color: "text-gray-300",
  },
];

export default function KyabaPage() {
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
            夜の女王たちの素顔。<br />
            <span className="text-pink-500" style={{ textShadow: '0 0 5px #ec4899, 0 0 10px #ec4899' }}>キャバ嬢リアル</span>動画ランキング
          </h2>
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            現役・元キャバ嬢が語る本音トーク・暴露・プライベートを厳選まとめ。
          </p>
          <p className="text-gray-500 text-xs leading-relaxed">
            キャバ嬢 / キャバクラ / 夜職 / 暴露 / 本音 / ナイトワーク / 出会い / 素顔 / まとめ
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
          <a href="https://al.dmm.co.jp/..." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg text-lg transition duration-200">
            無料で過激な動画を見る（18禁） <ArrowRight className="ml-2" size={20} />
          </a>
          <p className="text-center text-xs text-gray-400 mt-2">※無料期間中に解約すれば0円です。</p>
        </div>

        <h3 className="flex items-center text-xl font-bold border-l-4 border-pink-500 pl-3 mb-6 text-white">
          <Crown className="text-yellow-500 mr-2" size={24} /> キャバ嬢動画ランキング
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

        <div className="mb-10 flex flex-col items-center gap-2">
          <a href="https://px.a8.net/svt/ejp?a8mat=4B1OTP+9IYGI+1J1E+5YJRL" rel="nofollow">
            <img style={{ border: 0 }} width={468} height={60} alt="" src="https://www23.a8.net/svt/bgt?aid=260419309016&wid=001&eno=01&mid=s00000007133001001000&mc=1" />
          </a>
          <img style={{ border: 0 }} width={1} height={1} src="https://www14.a8.net/0.gif?a8mat=4B1OTP+9IYGI+1J1E+5YJRL" alt="" />
        </div>

        <div className="my-10 p-6 bg-gray-800 border-2 border-dashed border-blue-500 rounded-lg text-center">
          <h4 className="text-xl font-bold text-blue-400 mb-3">画面越しじゃ満足できないあなたへ</h4>
          <p className="text-sm text-gray-400 mb-4">
            「こんな子と実際に遊んでみたい…」<br />
            最近、動画に出ているような素人系女子と出会える隠れ家アプリが話題です。登録は無料でプロフ見放題！
          </p>
          <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-200">
            ナイショで出会いを探す <Search className="ml-2" size={18} />
          </a>
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
