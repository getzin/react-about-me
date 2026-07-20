import { useState } from "react";

import PlaygroundCard from "../PlaygroundCard";

import UserContext from "./UserContext";
import type { User } from "./UserContext";
import UserBadge from "./UserBadge";

export default function UserContextExample() {
  const [user, setUser] = useState<User>(null);

  function login() {
    setUser({
      name: "Max Mustermann",
    });
  }

  function logout() {
    setUser(null);
  }

  return (
    <PlaygroundCard
      title="User Context"
      concepts="createContext • Provider • useContext"
    >
      <UserContext.Provider value={{ user }}>
        <div className="space-y-4">
          <div className="flex gap-2">
            <button
              onClick={login}
              className="rounded bg-green-600 px-4 py-2 text-white"
            >
              Login
            </button>

            <button
              onClick={logout}
              className="rounded bg-red-600 px-4 py-2 text-white"
            >
              Logout
            </button>
          </div>

          <UserBadge />
        </div>
      </UserContext.Provider>
    </PlaygroundCard>
  );
}
