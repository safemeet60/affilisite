import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "待ちブラ・ノーブラ散歩動画ランキング【YouTube厳選まとめ】人妻・女子大生・ナンパ・出会い",
  description: "YouTubeで話題の待ちブラ・ノーブラ散歩・ハプニング動画を再生数ランキング形式で厳選まとめ。人妻・女子大生・ナンパ・即出会い系など刺激的なコンテンツを毎日更新。xvideoより過激な素人動画が無料で見放題！",
  keywords: "待ちブラ,ノーブラ散歩,スケブラ,透けブラ,ノーブラ,ノーパン,ハプニング,人妻,女子大生,ナンパ,即出会い,YouTube,xvideo,胸チラ,透け,トランプ,素人,まとめ",
  openGraph: {
    title: "待ちブラ・ノーブラ散歩動画ランキング【YouTube厳選まとめ】",
    description: "再生数急上昇中！消される前に見ておきたいYouTubeのギリギリ動画を厳選まとめ。人妻・女子大生・ナンパ・即出会い系コンテンツが満載！",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {/* 左サイドバー広告（デスクトップのみ） */}
        <div className="hidden xl:block fixed left-2 top-1/3 z-40" style={{width: '200px', height: '100px', overflow: 'hidden'}}>
          <iframe
            frameBorder="0"
            scrolling="no"
            src="https://livechat.dmm.co.jp/publicads?&size=L&design=A&affiliate_id=safemeet60-001"
            style={{width: '640px', height: '200px', transform: 'scale(0.5)', transformOrigin: 'top left'}}
          />
        </div>
        {/* 右サイドバー広告（デスクトップのみ） */}
        <div className="hidden xl:block fixed right-2 top-1/3 z-40" style={{width: '200px', height: '100px', overflow: 'hidden'}}>
          <iframe
            frameBorder="0"
            scrolling="no"
            src="https://livechat.dmm.co.jp/publicads?&size=L&design=A&affiliate_id=safemeet60-001"
            style={{width: '640px', height: '200px', transform: 'scale(0.5)', transformOrigin: 'top left'}}
          />
        </div>
      </body>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `fetch("https://script.google.com/macros/s/AKfycbznxYkj5ixnK_pHkGR8LUYhEYdvSYpaiF3x4LaZy964wlu068oak1X1uuIiyqCEtGWF/exec?page=happenning").catch(()=>{});`,
        }}
      />
    </html>
  );
}
