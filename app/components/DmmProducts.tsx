import { DmmItem } from '../lib/dmm';
import { ExternalLink } from 'lucide-react';

export default function DmmProducts({
  items,
  title = 'DMMで関連作品を見る（18禁）',
}: {
  items: DmmItem[];
  title?: string;
}) {
  if (!items.length) return null;

  return (
    <div className="my-10 p-5 bg-gray-800 border border-pink-700 rounded-lg">
      <h4 className="text-lg font-bold text-pink-400 mb-1 text-center">🔞 {title}</h4>
      <p className="text-center text-xs text-gray-500 mb-4">
        ※ 18歳未満の方のアクセスはご遠慮ください
      </p>
      <div className="grid grid-cols-3 gap-3">
        {items.map((item) => (
          <a
            key={item.content_id}
            href={item.affiliateURL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-900 rounded overflow-hidden border border-gray-700 hover:border-pink-500 transition group"
          >
            {item.imageURL?.small && (
              <img
                src={item.imageURL.small}
                alt={item.title}
                className="w-full object-cover group-hover:opacity-80 transition"
              />
            )}
            <div className="p-2">
              <p className="text-xs text-gray-300 line-clamp-2 leading-snug">{item.title}</p>
              {item.prices?.price && (
                <p className="text-xs text-pink-400 mt-1">{item.prices.price}円</p>
              )}
            </div>
          </a>
        ))}
      </div>
      <a
        href={`https://al.dmm.co.jp/?lurl=https%3A%2F%2Fwww.dmm.co.jp%2Fdigital%2Fvideoa%2F-%2Flist%2F%3Fsort%3Dranking&af_id=safemeet60-001&ch=toolbar&ch_id=link`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1 mt-4 text-xs text-gray-400 hover:text-pink-400 transition"
      >
        DMMでもっと見る <ExternalLink size={12} />
      </a>
      <p className="text-center text-xs text-gray-600 mt-2">
        ※PR：DMMウェブサービスを利用しています
      </p>
    </div>
  );
}
