import type { Album } from "./album";
import type { ContactItem } from "./contact";
import type { Language } from "./language";
import type { Skill } from "./skill";

export type Profile = {
    name: string;
    programmingSkills: Skill[];
    languages: Language[];
    favoriteAlbums: Album[];
    contact: ContactItem[];
};