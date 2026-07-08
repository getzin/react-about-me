// src/pages/AboutMe.tsx

import Header from "../components/Header";
import ProgrammingSkills from "../components/ProgrammingSkills";
import Languages from "../components/Languages";
import FavoriteAlbums from "../components/FavoriteAlbums";
import Contact from "../components/Contact";

function AboutMe({ data }: any) {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header name={data.name} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8 px-4">
        <ProgrammingSkills skills={data.programmingSkills} />

        <Languages languages={data.languages} />

        <FavoriteAlbums albums={data.favoriteAlbums} />

        <Contact contact={data.contact} />
      </div>
    </div>
  );
}

export default AboutMe;
