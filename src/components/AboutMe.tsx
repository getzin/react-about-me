// AboutMe.tsx

import Header from './Header';
import ProgrammingSkills from './ProgrammingSkills';
import Languages from './Languages';
import FavoriteAlbums from './FavoriteAlbums';
import Contact from './Contact';


function AboutMe({ data }: any) {
    return (
        <>
            <Header name={data.name} />
            <ProgrammingSkills skills={data.programmingSkills} />
            <Languages languages={data.languages} />
            <FavoriteAlbums albums={data.favoriteAlbums} />
            <Contact contact={data.contact} />
        </>
    );
}

export default AboutMe;