import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementBy,
} from "../redux/features/counterSlice";

const CounterRedux = () => {
  const countState = useSelector((state) => state.counter);
  console.log(countState);
  const dispatch = useDispatch();
  const { count } = countState;
  const clickIncrement = () => {
    dispatch(increment());
  };

  const clickDecrement = () => {
    dispatch(decrement());
  };

  const clickIncrementBy = () => {
    dispatch(incrementBy(5));
  };

  return (
    <div>
      <div className="container mt-5 text-center">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <p className="h3 mb-3">{count}</p>
                <button
                  onClick={clickIncrement}
                  className="btn btn-sm btn-success m-1"
                >
                  Increment
                </button>
                <button
                  onClick={clickDecrement}
                  className="btn btn-sm btn-warning m-1"
                >
                  DEcrement
                </button>
                <button
                  onClick={() => clickIncrementBy()}
                  className="btn btn-sm btn-danger m-1"
                >
                  Increment by 5
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterRedux;
