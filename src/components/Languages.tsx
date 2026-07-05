// Languages.tsx

import LanguageCard from './LanguageCard';

function Languages({ languages }: any) {
    return (
        <div className="bg-zinc-800 hover:bg-zinc-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-3xl font-bold mb-6">Languages:</h2>

            {languages.map((language: any) => (
                <LanguageCard
                    key={language.name}
                    name={language.name}
                    level={language.level}
                />
            ))}

        </div>
    );
}

export default Languages;