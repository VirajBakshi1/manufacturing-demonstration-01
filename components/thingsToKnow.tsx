/* ---------------- DATA ---------------- */

const stats = [
  {
    number: '01',
    percentage: '95%',
    text:
      '95% of discrete manufacturers still use paper-based processes (27% still use paper for more than half of all processes).',
    source: 'Source: SDC Executive',
  },
  {
    number: '02',
    percentage: '70%',
    text:
      'By 2022, as many as 70 percent of manufacturers may be using digital twins to conduct simulations and evaluations.',
    source: 'Source: Forbes',
  },
  {
    number: '03',
    percentage: '25%',
    text:
      'In 2022 alone, nearly a quarter of all detected cyberattacks were targeted at manufacturing firms.',
    source: 'Source: Forbes',
  },
]

/* ---------------- COMPONENT ---------------- */

export default function ThingsToKnow() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* ---------------- HEADER ---------------- */}
        <div className="mb-20 flex items-end gap-6">
          <span className="text-7xl font-semibold text-blue-500">03</span>

          <div className="relative flex-1 pb-4">
            <h2 className="text-4xl font-light text-blue-500">
              things<br />to know
            </h2>
            <span className="absolute left-0 bottom-0 h-px w-full bg-blue-500" />
          </div>
        </div>

        {/* ---------------- CONTENT ---------------- */}
        <div className="grid grid-cols-1 gap-20 md:grid-cols-3">
          {stats.map((item) => (
            <div key={item.number}>
              {/* Number */}
              <div className="mb-6">
                <span className="block text-6xl font-light text-gray-300">
                  {item.number}
                </span>
                <span className="mt-2 block h-0.5 w-10 bg-blue-500" />
              </div>

              {/* Percentage */}
              <p className="mb-6 text-2xl font-medium text-gray-800">
                {item.percentage}
              </p>

              {/* Description */}
              <p className="mb-6 max-w-sm text-base leading-relaxed text-gray-600">
                {item.text}
              </p>

              {/* Source */}
              <p className="text-sm text-gray-400">{item.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
