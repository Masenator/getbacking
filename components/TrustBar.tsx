const items = [
  "Whole-of-market — no ties to a single lender",
  "Direct line to your broker, not a call centre",
  "Straight answers, even when it's not what you want to hear",
  "We chase the lender and solicitors so you don't have to",
];

export function TrustBar() {
  return (
    <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <li
          key={item}
          className="bg-paper p-5 text-sm font-medium leading-snug text-ink-soft"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
