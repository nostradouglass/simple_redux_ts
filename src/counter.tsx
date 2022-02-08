

import { useAppSelector, useAppDispatch } from "./hooks";
import { increment, decrement } from "./redux/ducks/counter";

const Counter = () => {

    const count = useAppSelector((state: {counter: {count: number}}) => state.counter.count)
    const dispatch = useAppDispatch()

    return (
        <div>
        <h3>Amount in local component: {count}</h3>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )

};

export default Counter;