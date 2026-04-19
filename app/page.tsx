import React from 'react';
import { AlertTriangle, ArrowRight, Crown, ExternalLink, Search } from 'lucide-react';

// lucide-reactにないため、自作のYouTubeアイコンコンポーネントを作成
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

// ★ここに紹介したいYouTube動画のデータを入力します★
// id: YouTubeのURL「https://www.youtube.com/watch?v=〇〇〇」の「〇〇〇」の部分を入力してください。
const videos = [
  {
    rank: 1,
    id: "Q51ycxRA8RY",
    title: "はすこちゃんの五右衛門風呂",
    views: "711万回超",
    description: "無職の車中泊女子が人生初の五右衛門風呂に挑戦！火加減が難しすぎて悪戦苦闘する姿がとにかくかわいい。711万再生の納得の神動画。",
    color: "text-yellow-500",
  },
  {
    rank: 2,
    id: "_Nth3ZYlORs",
    title: "ぴなこちゃんの夜の散歩",
    views: "10万回超",
    description: "夜の公園を薄着で散歩する映像がじわじわ再生数を伸ばしている注目作。カメラアングルが絶妙すぎるとコメント欄でも話題沸騰中！",
    color: "text-gray-300",
  },
  {
    rank: 3,
    id: "sFrZPfoyWOk",
    title: "【消された伝説のノーブラ散歩】東京スカイツリー",
    views: "1.4万回超",
    description: "まだ再生数は少ないが内容は本物。本人は全く気づいていない様子ながら視聴者からは「見えてる！」のコメントが殺到。消される前に急いで見て。",
    color: "text-orange-500",
  },
  {
    rank: 4,
    id: "RMwozcyVrog",
    title: "人妻　ひとみさん",
    views: "81万回超",
    description: "人妻とは思えない大胆な行動に視聴者騒然。「これ本当に人妻？」とコメント欄が荒れまくった問題作。落ち着いた雰囲気からの急展開が最高すぎる。",
    color: "text-pink-400",
  },
  {
    rank: 5,
    id: "9Uj8uv-vnTk",
    title: "にどねちゃん",
    views: "11万回超",
    description: "まだ知名度は低いが、じわじわ再生数を伸ばしている要注目チャンネル。素朴な見た目からは想像できないギャップがヤバすぎる。早めにチェック必須！",
    color: "text-gray-300",
  },
  {
    rank: 6,
    id: "OgM0v8r06gw",
    title: "ひなちゃん家さん",
    views: "39万回超",
    description: "日常vlog系に見せかけた隠れた名作。何気ないシーンにファンが大興奮。「何度見ても飽きない」という神コメントが400件超え。",
    color: "text-gray-300",
  },
  {
    rank: 7,
    id: "eMDoaP4HDjc",
    title: "のんのんびよりさん",
    views: "15万回超",
    description: "田舎系チャンネルの意外なトップガン。のほほんとした雰囲気の中に潜む「お宝シーン」を求めてリピーターが続出。コメ欄は修羅場と化している。",
    color: "text-gray-300",
  },
  {
    rank: 8,
    id: "f4e6phS2hjc",
    title: "さくら先生さん",
    views: "22万回超",
    description: "先生系YouTuberの中でダントツの過激さ。授業中かと思いきや…という展開にコメ欄が「これは授業料払いたい」で埋め尽くされた伝説の動画。",
    color: "text-gray-300",
  },
  {
    rank: 9,
    id: "53CnRuSuViI",
    title: "るかさん",
    views: "8.3万回超",
    description: "まだ8万再生だが内容は100万再生級。これから絶対バズると確信できるクオリティ。消される前に今すぐ保存推奨。個人的に今一番推してるチャンネル。",
    color: "text-gray-300",
  },
  {
    rank: 10,
    id: "C6-v4p0RJ7w",
    title: "マイとユカさん",
    views: "17万回超",
    description: "2人組というのが最大の強み。掛け合いの中で起きるハプニングがとにかく自然すぎる。「これ本当に偶然？」と毎回議論になる名物チャンネル。",
    color: "text-gray-300",
  },
];

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
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            再生回数急上昇中！消される前に絶対見ておきたい、ギリギリを攻めたトレンド動画を厳選まとめ。
          </p>
          <p className="text-gray-500 text-xs leading-relaxed">
            待ちブラ / ノーブラ散歩 / スケブラ / 透けブラ / ノーブラ / ノーパン / ハプニング / 人妻 / 女子大生 / ナンパ / 即出会い / xvideo超え素人 / 胸チラ / 透け / トランプ動画 まとめ
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
          {/* ↓ここにDMMアフィリエイトのリンク（URL）を入れます */}
          <a href="https://al.dmm.co.jp/..." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg text-lg transition duration-200">
            無料で過激な動画を見る（18禁） <ArrowRight className="ml-2" size={20} />
          </a>
          <p className="text-center text-xs text-gray-400 mt-2">※無料期間中に解約すれば0円です。</p>
        </div>

        <h3 className="flex items-center text-xl font-bold border-l-4 border-pink-500 pl-3 mb-6 text-white">
          <Crown className="text-yellow-500 mr-2" size={24} /> 殿堂入り再生回数ランキング
        </h3>

        {/* 登録した動画リストを自動で表示 */}
        {videos.map((video) => (
          <div key={video.rank} className="bg-gray-800 rounded-lg shadow-lg mb-8 overflow-hidden border border-gray-700 transition hover:scale-[1.02]">
            <div className="bg-gray-950 px-4 py-3 border-b border-gray-700 flex justify-between items-center">
              <span className={`font-bold ${video.color} flex items-center`}>
                {video.rank === 1 && <Crown className="mr-1" size={18} />}
                {video.rank}位：{video.title}
              </span>
              <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300">再生数: {video.views}</span>
            </div>
            <div className="p-4">
              
              {/* サムネイル画像（クリックでYouTubeへ飛ぶ） */}
              <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="block w-full aspect-video bg-black flex-col items-center justify-center rounded-md mb-4 relative overflow-hidden group border border-gray-600">
                {/* YouTubeから自動でサムネイル画像を取得して表示 */}
                <img 
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                  alt={video.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition duration-300"
                />
                {/* 中央に再生ボタンを配置 */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <YoutubeIcon className="text-red-600 drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] group-hover:scale-110 transition duration-300" size={64} />
                  <span className="text-white font-bold mt-2 opacity-0 group-hover:opacity-100 transition duration-300">YouTubeで見る</span>
                </div>
              </a>

              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                {video.description}
              </p>

              <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded transition duration-200 text-sm">
                YouTubeでこの動画を見る <ExternalLink className="ml-2" size={16} />
              </a>
            </div>
          </div>
        ))}

        {/* 出会い系アフィリエイトバナー（10位直後） */}
        <div className="mb-10 flex flex-col items-center gap-2">
          <a href="https://px.a8.net/svt/ejp?a8mat=4B1OTP+9IYGI+1J1E+5YJRL" rel="nofollow">
            <img style={{ border: 0 }} width={468} height={60} alt="" src="https://www23.a8.net/svt/bgt?aid=260419309016&wid=001&eno=01&mid=s00000007133001001000&mc=1" />
          </a>
          <img style={{ border: 0 }} width={1} height={1} src="https://www14.a8.net/0.gif?a8mat=4B1OTP+9IYGI+1J1E+5YJRL" alt="" />
        </div>

        {/* 【重要】記事中アフィリエイト誘導 */}
        <div className="my-10 p-6 bg-gray-800 border-2 border-dashed border-blue-500 rounded-lg text-center">
          <h4 className="text-xl font-bold text-blue-400 mb-3">画面越しじゃ満足できないあなたへ</h4>
          <p className="text-sm text-gray-400 mb-4">
            「こんな子と実際に遊んでみたい…」<br />
            最近、動画に出ているような素人系女子と出会える隠れ家アプリが話題です。登録は無料でプロフ見放題！
          </p>
          {/* ↓ここに出会い系アフィリエイトのリンク（URL）を入れます */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-200">
            ナイショで出会いを探す <Search className="ml-2" size={18} />
          </a>
        </div>

        {/* A8.netアフィリエイトバナー */}
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