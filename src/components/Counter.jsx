import { useState } from "react";

const Counter = () => {
  const [state, setState] = useState({
    count: 0,
  });

  const clickIncrement = () => {
    setState({
      count: state.count + 1,
    });
  };

  const clickDecrement = () => {
    setState({
      count: state.count - 1,
    });
  };

  const clickIncrementBy = (value) => {
    setState({
      count: state.count + value,
    });
  };

  return (
    <div>
      <div className="container mt-5 text-center">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <p className="h3 mb-3">{state.count}</p>
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
                  onClick={() => clickIncrementBy(5)}
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

export default Counter;
