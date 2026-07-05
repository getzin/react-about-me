// Languages.tsx

import LanguageCard from './LanguageCard';

function Languages({ languages }: any) {
    return (
        <>
            <h2>Languages:</h2>

            <LanguageCard
                name={languages[0].name}
                level={languages[0].level}
            />

            <LanguageCard
                name={languages[1].name}
                level={languages[1].level}
            />

            <LanguageCard
                name={languages[2].name}
                level={languages[2].level}
            />

            <LanguageCard
                name={languages[3].name}
                level={languages[3].level}
            />

            <LanguageCard
                name={languages[4].name}
                level={languages[4].level}
            />

        </>
    );
}

export default Languages;