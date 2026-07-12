// src/components/Header.tsx

import Name from "./Name";
import ProfileImage from "./ProfileImage";

type HeaderProps = {
  name: string;
};

function Header({ name }: HeaderProps) {
  return (
    <div className="text-center mb-10 md:mb-14">
      <Name name={name} />
      <ProfileImage />
    </div>
  );
}

export default Header;
