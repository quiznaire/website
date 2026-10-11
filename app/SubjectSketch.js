export default function SubjectSketch({ subject, className = "" }) {
  const drawings = {
    Physics: (
      <>
        <path d="M43 105c5-32 83-65 122-43 41 25-9 80-61 92-45 11-76-12-61-49Z" />
        <path d="M60 63c32-25 63 1 78 40s14 67-5 71c-30 8-70-75-73-111Z" />
        <path d="M29 124c38 20 112 16 148-18" strokeDasharray="3 6" />
        <circle cx="150" cy="74" r="9" fill="currentColor" />
        <circle cx="100" cy="119" r="4" />
        <path d="m158 50 16-15m-4 1 5-2-1 6M34 52l8 5m-6-12 2 13M62 185l50-2" />
      </>
    ),
    Biology: (
      <>
        <path d="M101 181c-4-34 7-70 38-111" />
        <path d="M116 131C74 143 47 100 53 54c43-5 86 20 73 63" />
        <path d="M120 127c35 4 56-19 54-52-25-9-49 10-50 33" />
        <path d="M60 61c20 17 41 42 58 70m-48-46 27 1m-11 20 24-2m-24-30-1 18m51 15 31-28m-22 22 19 1" />
        <path d="M64 165c15 4 24 7 37 16m-41 8c29-7 59-6 80 0" />
        <circle cx="43" cy="127" r="3" />
        <path d="m151 40 5-7m8 18 9-2" />
      </>
    ),
    History: (
      <>
        <path d="m32 178 143-1M43 169V86h120v82M38 85h132V70h-13V55h-14v15h-17V55h-14v15H93V55H78v15H60V55H46v15h-8Z" />
        <path d="M86 169v-33c0-25 35-25 35 0v33M53 103h17v21H53zm87 0h14v21h-14M49 144h18m66 8h22M64 86v-14m75 1v13" />
        <path d="M113 52V26l24 8-24 8M26 185l157 1m-22-149 7 8m-18-4 12-4" />
        <path d="M27 159h12m129-16 17-2" />
      </>
    ),
    "General Knowledge": (
      <>
        <circle cx="103" cy="111" r="62" />
        <path d="M66 61c8 20-3 22 8 37l15 3 7 18-9 10 8 16-11 19m38-108-13 22 10 11 22 1 13 19-8 13-18-3-7 17 9 24M46 101l-4 13 18 8 7 15m89-53 9 4" />
        <ellipse cx="103" cy="111" rx="28" ry="62" strokeDasharray="3 7" />
        <path d="M42 109h123m-108 42c23-9 64-10 91-1M40 182l125 2m-42-11 9 11m-45-13-7 13m87-126 15-18m-7 0 9-1-1 9" />
      </>
    ),
  };
  return (
    <svg
      className={`subjectSketch ${className}`}
      viewBox="0 0 210 210"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {drawings[subject] || drawings.Physics}
    </svg>
  );
}
