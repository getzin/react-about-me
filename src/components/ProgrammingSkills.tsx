// src/components/ProgrammingSkills.tsx

import SkillCard from "./SkillCard";

function ProgrammingSkills({ skills }: any) {
  return (
    <div className="bg-zinc-800 hover:bg-zinc-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
      <h2 className="text-3xl font-bold mb-6">Programming Skills:</h2>

      {skills.map((skill: any) => (
        <SkillCard key={skill.name} {...skill} />
      ))}
    </div>
  );
}

export default ProgrammingSkills;
