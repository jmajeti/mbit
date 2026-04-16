import CountUp from "@/components/ui/CountUp";

const stats = [
  { value: 20, suffix: "+", label: "Years in Business" },
  { value: 500, suffix: "+", label: "Successful Placements" },
  { value: 48, suffix: "hr", label: "Candidate Delivery" },
  { value: 95, suffix: "%", label: "Client Retention Rate" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#0D1B2A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:px-8">
              <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
