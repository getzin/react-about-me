//

import SkillCard from './SkillCard';

function ProgrammingSkills({ skills } : any) {
    return (
        <>
            <h2>Programming Skills:</h2>

            {skills.map((skill: any) => (
                <SkillCard
                    key={skill.name}
                    name={skill.name}
                    rating={skill.rating}
                />
            ))}
        </>
    );
}

export default ProgrammingSkills;