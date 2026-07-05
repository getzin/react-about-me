// Header.tsx

import Name from './Name';
import ProfileImage from './ProfileImage';

function Header({ name }: any) {
    return (
        <div className="text-center mb-14">
            <Name name={name} />
            <ProfileImage />
        </div>
    );
}

export default Header;