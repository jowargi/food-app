import { withUsersPrefetch } from "../../hocs/withUsersPrefetch";
import { useGetUsersQuery } from "../../redux/api/users/api";
import User from "./User";

const UserContainer = ({ userId }) => {
  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find((user) => user.id === userId),
    }),
  });

  const { name: userName } = user || {};

  return userName ? <User userName={userName} /> : null;
};

export default withUsersPrefetch({ UserContainer });
