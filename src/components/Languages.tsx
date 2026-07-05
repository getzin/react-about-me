// Languages.tsx

import LanguageCard from './LanguageCard';

function Languages({ languages }: any) {
    return (
        <>
            <h2>Languages:</h2>

            {languages.map((language: any) => (
                <LanguageCard
                    key={language.name}
                    name={language.name}
                    level={language.level}
                />
            ))}

        </>
    );
}

export default Languages;