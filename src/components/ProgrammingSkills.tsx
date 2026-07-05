//

import SkillCard from './SkillCard';

function ProgrammingSkills({ skills } : any) {
    return (
        <>
            <h2>Programming Skills:</h2>

            <SkillCard
                name={skills[0].name}
                rating={skills[0].rating}
            />

            <SkillCard
                name={skills[1].name}
                rating={skills[1].rating}
            />

            <SkillCard
                name={skills[2].name}
                rating={skills[2].rating}
            />
        </>
    );
}

export default ProgrammingSkills;