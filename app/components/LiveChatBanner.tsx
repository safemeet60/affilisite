export default function LiveChatBanner() {
  return (
    <div className="my-10 overflow-hidden flex justify-center rounded-lg">
      <iframe
        id="onlineBanner"
        frameBorder="0"
        scrolling="no"
        width={640}
        height={200}
        src="https://livechat.dmm.co.jp/publicads?&size=L&design=A&affiliate_id=safemeet60-001"
        className="max-w-full"
      />
    </div>
  );
}
