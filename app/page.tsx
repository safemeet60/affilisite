import React from 'react';
import { AlertTriangle, ArrowRight, Crown, ExternalLink, Search } from 'lucide-react';

// lucide-reactにないため、自作のYouTubeアイコンコンポーネントを作成
const YoutubeIcon = ({ className, size = 24 }) => (
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

export default function App() {
  return (
    <div className="bg-gray-900 text-gray-200 font-sans min-h-screen">
      {/* ヘッダー */}
      <header className="bg-gray-950 border-b border-pink-600 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-pink-500 tracking-wider">夜のトレンドまとめCH</h1>
          <span className="text-xs text-gray-400">🚨 閲覧注意 🚨</span>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="bg-gray-800 text-center py-10 px-4 border-b border-gray-700">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight text-white">
            今、YouTubeで一番ヤバい。<br />
            <span className="text-pink-500" style={{ textShadow: '0 0 5px #ec4899, 0 0 10px #ec4899' }}>ハプニング必至</span>の散歩動画ランキング
          </h2>
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            再生回数急上昇中！消される前に絶対見ておきたい、ギリギリを攻めたトレンド動画を厳選まとめ。
          </p>
        </div>
      </section>

      {/* メインコンテンツ */}
      <main className="container mx-auto px-4 max-w-3xl pb-16 mt-8">
        
        {/* 【重要】最上部のアフィリエイト誘導 */}
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
          <Crown className="text-yellow-500 mr-2" size={24} /> 殿堂入り再生回数ランキング
        </h3>

        {/* 第1位 */}
        <div className="bg-gray-800 rounded-lg shadow-lg mb-8 overflow-hidden border border-gray-700 transition hover:scale-[1.02]">
          <div className="bg-gray-950 px-4 py-2 border-b border-gray-700 flex justify-between items-center">
            <span className="font-bold text-yellow-500 flex items-center">1位：〇〇ちゃんの夜の公園散歩</span>
            <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300">再生数: 150万回超</span>
          </div>
          <div className="p-4">
            {/* YouTubeサムネイルのダミー */}
            <div className="w-full aspect-video bg-black flex flex-col items-center justify-center rounded-md mb-4 relative overflow-hidden group cursor-pointer border border-gray-600">
              <YoutubeIcon className="text-red-600 mb-2 group-hover:scale-110 transition duration-300" size={60} />
              <span className="text-gray-500 text-sm">動画サムネイル画像</span>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              薄着の季節にこれは反則…！カメラアングルが神がかっているとコメント欄でも話題沸騰中の動画です。特に3分20秒あたりのハプニングは見逃し厳禁！
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-200 text-sm">
              YouTubeでこの動画を見る <ExternalLink className="ml-2" size={16} />
            </a>
          </div>
        </div>

        {/* 第2位 */}
        <div className="bg-gray-800 rounded-lg shadow-lg mb-8 overflow-hidden border border-gray-700 transition hover:scale-[1.02]">
          <div className="bg-gray-950 px-4 py-2 border-b border-gray-700 flex justify-between items-center">
            <span className="font-bold text-gray-300 flex items-center">2位：都内某所・すっぴん買い出し</span>
            <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300">再生数: 98万回超</span>
          </div>
          <div className="p-4">
            <div className="w-full aspect-video bg-black flex flex-col items-center justify-center rounded-md mb-4 relative overflow-hidden group cursor-pointer border border-gray-600">
              <YoutubeIcon className="text-red-600 mb-2 group-hover:scale-110 transition duration-300" size={60} />
              <span className="text-gray-500 text-sm">動画サムネイル画像</span>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              完全プライベート風の映像。揺れが凄すぎてYouTubeの年齢制限に引っかかるギリギリのラインを攻めています。
            </p>
          </div>
        </div>

        {/* 【重要】記事中アフィリエイト誘導 */}
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
