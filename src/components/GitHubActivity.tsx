import { useEffect, useState } from "react";
import { githubUrl } from "../data";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const levelClasses = [
  "bg-line/60",
  "bg-mint/30",
  "bg-mint/50",
  "bg-mint/75",
  "bg-mint",
];

// Live contributions heatmap for the last year, via the public
// github-contributions API. Renders nothing if the request fails,
// so the section degrades invisibly.
export default function GitHubActivity() {
  const [days, setDays] = useState<Day[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(
      "https://github-contributions-api.jogruber.de/v4/AdityaRungta2048?y=last",
      { signal: controller.signal },
    )
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        if (Array.isArray(data?.contributions)) setDays(data.contributions);
      })
      .catch(() => {
        /* offline or API unavailable - hide the section */
      });
    return () => controller.abort();
  }, []);

  if (!days || days.length === 0) return null;

  const total = days.reduce((sum, d) => sum + d.count, 0);

  // Pad the first week so columns align to weekdays, then chunk by 7.
  const padded: (Day | null)[] = [
    ...Array<null>(new Date(days[0].date).getDay()).fill(null),
    ...days,
  ];
  const weeks: (Day | null)[][] = [];
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7));
  }

  return (
    <div className="mt-14">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-lg font-semibold text-bright">
          GitHub activity
        </h3>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs text-fog transition-colors hover:text-mint"
        >
          {total} contributions in the last year →
        </a>
      </div>
      <div className="overflow-x-auto rounded-xl border border-line bg-panel/60 p-5">
        <div className="flex w-max gap-[3px]">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((day, di) =>
                day ? (
                  <span
                    key={day.date}
                    title={`${day.date}: ${day.count} contribution${
                      day.count === 1 ? "" : "s"
                    }`}
                    className={`h-2.5 w-2.5 rounded-[2px] ${levelClasses[day.level]}`}
                  />
                ) : (
                  <span key={`pad-${wi}-${di}`} className="h-2.5 w-2.5" />
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
