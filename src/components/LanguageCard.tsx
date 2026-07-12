// src/components/LanguageCard.tsx

import type { Language } from "../types/language";

function LanguageCard({ name, level }: Language) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white">{name}</h2>
      <p className="text-lg text-zinc-300">{level}</p>
    </div>
  );
}

export default LanguageCard;
