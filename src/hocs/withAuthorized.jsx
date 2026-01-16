import { useSelector } from "react-redux";
import { useAuthorizedUserIdContext } from "../components/authorizedUserIdContextProvider/AuthorizedUserIdContextProvider";
import { selectAuthorizedUserById } from "../redux/slices/authorizedUsers/slice";

export const withAuthorized = ({
  AuthorizedComponent,
  UnauthorizedComponent,
}) => {
  return (props) => {
    const { authorizedUserId } = useAuthorizedUserIdContext();

    const authorizedUser = useSelector((state) =>
      selectAuthorizedUserById(state, authorizedUserId),
    );

    if (!authorizedUser)
      return UnauthorizedComponent ? (
        <UnauthorizedComponent {...props} />
      ) : null;

    return AuthorizedComponent ? (
      <AuthorizedComponent {...props} authorizedUser={authorizedUser} />
    ) : null;
  };
};
