import { useParams } from "react-router-dom";
import { withAuthorized } from "../../hocs/withAuthorized";
import Counter from "../counter/Counter";
import { useCartActions } from "../../hooks/useCartActions";

const DishCounterAuthorized = ({ authorizedUser }) => {
  const { id: userId } = authorizedUser;

  const { dishId } = useParams();

  const { count, increment, decrement } = useCartActions({ userId, dishId });

  return <Counter count={count} increment={increment} decrement={decrement} />;
};

const DishCounter = withAuthorized({
  AuthorizedComponent: DishCounterAuthorized,
});

export default DishCounter;
