// Header.tsx

import Name from './Name';
import ProfileImage from './ProfileImage';

function Header({ name }: any) {
    return (
        <>
            <Name name={name} />
            <ProfileImage />
        </>
    );
}

export default Header;