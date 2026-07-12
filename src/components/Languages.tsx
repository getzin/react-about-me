// src/components/Languages.tsx

import LanguageCard from "./LanguageCard";

import type { Language } from "../types/language";

type LanguagesProps = {
  languages: Language[];
};

function Languages({ languages }: LanguagesProps) {
  return (
    <div className="bg-zinc-800 hover:bg-zinc-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
      <h2 className="text-3xl font-bold mb-6">Languages:</h2>

      {languages.map((language) => (
        <LanguageCard key={language.name} {...language} />
      ))}
    </div>
  );
}

export default Languages;
