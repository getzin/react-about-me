import { createContext } from "react";

export type User = {
  name: string;
} | null;

type UserContextType = {
  user: User;
};

const UserContext = createContext<UserContextType>({
  user: null,
});

export default UserContext;