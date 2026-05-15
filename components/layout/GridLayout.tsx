import ChartCard from "../chart/ChartCard";

const charts = [
  "BTCUSDT",
  "ETHUSDT",
  "SOLUSDT",
  "DOGEUSDT",
  "XRPUSDT",
  "ADAUSDT",
];

export default function GridLayout() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {charts.map((symbol) => (
        <ChartCard key={symbol} symbol={symbol} />
      ))}
    </div>
  );
}