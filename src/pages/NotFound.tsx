import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold">404</h1>

                <p className="text-zinc-400 mt-4 mb-8">
                    Page not found.
                </p>

                <Link
                    to="/"
                    className="text-sky-400 hover:text-sky-300 transition"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;