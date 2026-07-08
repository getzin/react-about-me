import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex justify-center gap-8 p-6 bg-zinc-800 text-white">
            <Link to="/">Home</Link>
            <Link to="/albums">Albums</Link>
        </nav>
    );
}

export default Navbar;