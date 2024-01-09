
import { useSelector, useDispatch } from "react-redux";
import { incremnet , decrement } from "./actions";

function App() {
  const changeNumber = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <a onClick={() => dispatch(decrement)}>
          {" "}
          <span> - </span>
        </a>
        <input value={changeNumber} />
        <a onClick={() => dispatch(incremnet)}>
          <span> + </span>
        </a>
      </div>
    </>
  );
}

export default App;
