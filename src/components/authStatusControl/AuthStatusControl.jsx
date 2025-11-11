import { createContext, useContext } from "react";
import { useAuthorizedUserIdContext } from "../authorizedUserIdContextProvider/AuthorizedUserIdContextProvider";
import { useDispatch, useSelector } from "react-redux";
import {
  addAuthorizedUser,
  selectAuthorizedUserById,
} from "../../redux/slices/authorizedUsers/slice";
import { userMock } from "../../constants/userMock";
import { useThrottle } from "../../hooks/useThrottle";
import Button from "../button/Button";
import styles from "./AuthStatusControl.module.css";
import classNames from "classnames";

const AuthStatusContext = createContext({
  authorizedUserId: null,
  login: () => null,
  logout: () => null,
});

const AuthStatusControlCompound = ({ children }) => {
  const { authorizedUserId, login, logout } = useAuthorizedUserIdContext();

  return (
    <AuthStatusContext.Provider value={{ authorizedUserId, login, logout }}>
      {children}
    </AuthStatusContext.Provider>
  );
};

AuthStatusControlCompound.UserName = function UserName() {
  const { authorizedUserId } = useContext(AuthStatusContext);

  const authorizedUser = useSelector((state) =>
    selectAuthorizedUserById(state, authorizedUserId)
  );

  return (
    <p className={classNames(styles.name)}>
      {authorizedUser ? authorizedUser.name : "Guest"}
    </p>
  );
};

AuthStatusControlCompound.AuthButton = function AuthButton() {
  const { authorizedUserId, login, logout } = useContext(AuthStatusContext);

  const authorizedUser = useSelector((state) =>
    selectAuthorizedUserById(state, authorizedUserId)
  );

  const dispatch = useDispatch();

  let handleAuthToggle = () => {
    if (authorizedUser) {
      logout();

      return;
    }

    dispatch(addAuthorizedUser(userMock));

    login(userMock.id);
  };

  handleAuthToggle = useThrottle(handleAuthToggle, 300);

  return (
    <Button onClick={handleAuthToggle}>
      {authorizedUser ? "Log Out" : "Log In"}
    </Button>
  );
};

const AuthStatusControl = () => {
  return (
    <AuthStatusControlCompound>
      <div className={classNames(styles.container)}>
        <AuthStatusControlCompound.UserName />
        <AuthStatusControlCompound.AuthButton />
      </div>
    </AuthStatusControlCompound>
  );
};

export default AuthStatusControl;
