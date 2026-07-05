// AboutMe.tsx

import Header from './Header';
import ProgrammingSkills from './ProgrammingSkills';
import Languages from './Languages';
import FavoriteAlbums from './FavoriteAlbums';
import Contact from './Contact';


function AboutMe({ data }: any) {
    return (
        <div className="min-h-screen bg-zinc-900 text-white">
            <Header name={data.name} />

            <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">

                <ProgrammingSkills skills={data.programmingSkills} />

                <Languages languages={data.languages} />

                <FavoriteAlbums albums={data.favoriteAlbums} />

                <Contact contact={data.contact} />

            </div>
        </div>
    );
}

export default AboutMe;