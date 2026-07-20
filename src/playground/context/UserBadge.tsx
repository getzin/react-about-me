import { useContext } from "react";
import UserContext from "./UserContext";

export default function UserBadge() {
  const { user } = useContext(UserContext);

  return (
    <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-4 text-zinc-100">
      {user ? (
        <p>
          👤 Angemeldet als <strong>{user.name}</strong>
        </p>
      ) : (
        <p>❌ Niemand angemeldet</p>
      )}

      <hr className="my-3 border-zinc-700" />

      <p className="text-sm text-zinc-400">
        Context Value: {user ? user.name : "null"}
      </p>
    </div>
  );
}
