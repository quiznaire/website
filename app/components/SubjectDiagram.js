/** Concept diagrams illustrate each subject; they do not represent live product data. */
export default function SubjectDiagram({ subject }) {
  return (
    <svg
      className="subjectDiagram"
      viewBox="0 0 420 280"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path
        d="M20 20h15m-15 0v15M400 20h-15m15 0v15M20 260h15m-15 0v-15M400 260h-15m15 0v-15"
        opacity=".45"
      />
      {subject === "Physics" && (
        <>
          <path d="M210 35v210M95 140h230" strokeDasharray="2 8" opacity=".3" />
          <circle cx="210" cy="140" r="87" />
          <ellipse
            cx="210"
            cy="140"
            rx="132"
            ry="45"
            transform="rotate(-28 210 140)"
            opacity=".5"
          />
          <path d="m210 140 62-62M272 78l-33-24m33 24-1-13m1 13-13 3" />
          <circle cx="272" cy="78" r="7" fill="currentColor" />
          <circle cx="210" cy="140" r="3" fill="currentColor" />
          <path d="M123 140c0 37 23 69 56 82m0 0-6-11m6 11-13-1" />
          <path d="m315 199 48 26h25M96 69l-34-24H34" opacity=".6" />
          <text x="350" y="215">
            MOTION
          </text>
          <text x="31" y="36">
            FORCES
          </text>
        </>
      )}
      {subject === "Biology" && (
        <>
          <rect x="110" y="40" width="200" height="200" rx="40" />
          <rect x="122" y="52" width="176" height="176" rx="32" opacity=".45" />
          <circle cx="218" cy="136" r="31" />
          <circle cx="218" cy="136" r="10" />
          <ellipse
            cx="153"
            cy="105"
            rx="11"
            ry="23"
            transform="rotate(25 153 105)"
          />
          <path d="m150 90 8 3m-12 8 11 4m-14 8 10 3" />
          <ellipse
            cx="263"
            cy="191"
            rx="11"
            ry="23"
            transform="rotate(-40 263 191)"
          />
          <path d="M255 178l9 2m-5 8 10-2m-2 13 8-3" />
          <path d="M168 171c-28-13-32 9-19 29 14 22 31 14 37-6 4-12-8-18-18-23Z" />
          <circle cx="270" cy="87" r="4" />
          <circle cx="198" cy="75" r="3" />
          <path d="m249 136 76-38h54m-237 92-69 23H37" opacity=".6" />
          <text x="333" y="88">
            SYSTEMS
          </text>
          <text x="37" y="205">
            CELLS
          </text>
        </>
      )}
      {subject === "History" && (
        <>
          <path d="M54 142h310" />
          <path d="m360 137 8 5-8 5" />
          <path d="M104 142V80h48m-23 0v-26M210 142v62h47m-23 0v24M315 142V85h43" />
          <circle cx="104" cy="142" r="7" fill="currentColor" />
          <circle cx="210" cy="142" r="7" fill="currentColor" />
          <circle cx="315" cy="142" r="7" fill="currentColor" />
          <rect x="86" y="38" width="86" height="34" />
          <rect x="191" y="218" width="86" height="34" />
          <rect x="281" y="47" width="86" height="34" />
          <text x="111" y="59">
            EVENTS
          </text>
          <text x="208" y="239">
            CONTEXT
          </text>
          <text x="303" y="68">
            CHANGE
          </text>
          <path
            d="M72 167v9m64-9v9m37-9v9m73-9v9m36-9v9m56-9v9"
            opacity=".45"
          />
        </>
      )}
      {subject === "General Knowledge" && (
        <>
          <circle cx="210" cy="135" r="91" />
          <ellipse cx="210" cy="135" rx="44" ry="91" />
          <path
            d="M119 135h182M130 91c43 14 115 14 161 0M129 179c45-14 117-14 163 0M210 44v182"
            opacity=".5"
          />
          <path d="m159 59 15 17-13 15 7 26 22 9 9 30-14 22 9 18m49-142-14 24 19 17 26-6 18 22-16 22-24-3-17 29 8 29m-118-93 14 10 1 20 23 16" />
          <path d="M183 227v14h54v-14M155 253h111" />
          <path d="m297 56 51-24h34M116 188l-55 29H33" opacity=".6" />
          <text x="324" y="23">
            GEOGRAPHY
          </text>
          <text x="32" y="209">
            OUR WORLD
          </text>
        </>
      )}
    </svg>
  );
}
