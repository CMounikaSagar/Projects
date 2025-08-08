import { useDispatch } from "react-redux";
import { increment, decreament, reset } from "./counterSlice";

const CounterControl = () => {
    const dispatch = useDispatch();

    const increaseHandler = () => {
        dispatch(increment())
    }

    const decreaseHandler = () => {
        dispatch(decreament())
    }

    const resetHandler = () => {
        dispatch(reset())
    }

    return (
        <div>
            <h1>Control</h1>
            <button onClick={increaseHandler}>Increase</button>
            <button onClick={decreaseHandler}>Decrease</button>
            <button onClick={resetHandler}>Reset</button>
        </div>
    )
}

export default CounterControl;