import ErrorFallback from "../components/errorFallback/ErrorFallback";
import { useGetUsersQuery } from "../redux/api/users/api";

export const withUsersPrefetch = ({ UserContainer }) => {
  return (props) => {
    const {
      data: users,
      error,
      isLoading,
      isFetching,
      isError,
    } = useGetUsersQuery();

    if (isLoading || isFetching) return <p>Loading...</p>;

    if (isError)
      return <ErrorFallback name={error.status} message={error.error} />;

    return UserContainer ? <UserContainer {...props} users={users} /> : null;
  };
};
