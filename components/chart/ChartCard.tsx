"use client";

type Props = {
  symbol: string;
};

export default function ChartCard({ symbol }: Props) {
  return (
    <div className="rounded-xl border border-[#1f2937] bg-[#111827] overflow-hidden">
      <div className="flex items-center justify-between border-b border-[#1f2937] px-4 py-2">
        <div className="flex items-center gap-2">
          <input
            defaultValue={symbol}
            className="bg-[#0b1220] text-white px-2 py-1 rounded-md outline-none w-[120px]"
          />

          <select className="bg-[#0b1220] text-white px-2 py-1 rounded-md outline-none">
            <option>1m</option>
            <option>5m</option>
            <option>15m</option>
            <option>1h</option>
          </select>
        </div>

        <div className="text-sm text-gray-400">
          LIVE
        </div>
      </div>

      <div className="h-[320px] flex items-center justify-center text-gray-500">
        Chart loading...
      </div>
    </div>
  );
}