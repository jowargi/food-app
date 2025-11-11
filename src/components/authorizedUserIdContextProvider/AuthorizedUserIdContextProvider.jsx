import { createContext, useCallback, useContext, useState } from "react";

const AuthorizedUserIdContext = createContext({
  authorizedUserId: null,
  login: () => null,
  logout: () => null,
});

export const useAuthorizedUserIdContext = () =>
  useContext(AuthorizedUserIdContext);

export default function AuthorizedUserIdContextProvider({ children }) {
  const [authorizedUserId, setAuthorizedUserId] = useState(null);

  const login = useCallback((userId) => setAuthorizedUserId(userId), []);
  const logout = useCallback(() => setAuthorizedUserId(null), []);

  return (
    <AuthorizedUserIdContext.Provider
      value={{ authorizedUserId, login, logout }}
    >
      {children}
    </AuthorizedUserIdContext.Provider>
  );
}
