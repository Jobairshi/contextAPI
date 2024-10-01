import { createContext, Dispatch, SetStateAction } from "react";

interface User {
  username: string;
  password: string;
}
interface UserContextType {
  user: User | null;
 
  setUser: Dispatch<SetStateAction<User | null>>;
}

const UserContext = createContext<UserContextType>({
  user: { username: "", password: "" },
  setUser: () => {},
});
 
export default UserContext;
