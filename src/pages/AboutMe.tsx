// src/pages/AboutMe.tsx

import Header from "../components/Header";
import ProgrammingSkills from "../components/ProgrammingSkills";
import Languages from "../components/Languages";
import FavoriteAlbums from "../components/FavoriteAlbums";
import ContactSection from "../components/ContactSection";

import type { Profile } from "../types/profile";

import { useContext, useRef } from "react";
import ThemeContext from "../context/ThemeContext";

import ScrollToTopButton from "../components/ScrollToTopButton";

type AboutMeProps = {
  data: Profile;
};

function AboutMe({ data }: AboutMeProps) {
  const { name, programmingSkills, languages, favoriteAlbums, contact } = data;
  const topRef = useRef<HTMLDivElement>(null);
  const { theme } = useContext(ThemeContext);

  function scrollToTop() {
    topRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div
      ref={topRef}
      className={`min-h-screen ${
        theme === "light" ? "bg-white text-black" : "bg-zinc-900 text-white"
      }`}
    >
      <Header name={name} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8 px-4">
        <ProgrammingSkills skills={programmingSkills} />
        <Languages languages={languages} />
        <FavoriteAlbums albums={favoriteAlbums} />
        <ContactSection contact={contact} />
      </div>

      <ScrollToTopButton onClick={scrollToTop} />
    </div>
  );
}

export default AboutMe;
