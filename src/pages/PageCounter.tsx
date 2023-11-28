import { useReducer } from "react";

// Reducer function
const reducer = (state: { count: number }, action: { type: any }) => {
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count + 1 };
		case "DECREMENT":
			return { count: state.count - 1 };
		default:
			return state;
	}
};

const Counter = () => {
	// Initial state
	const initialState = { count: 0 };

	// useReducer hook
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<p>Count: {state.count}</p>
			<button onClick={() => dispatch({ type: "INCREMENT" })}>
				Increment
			</button>
			<button onClick={() => dispatch({ type: "DECREMENT" })}>
				Decrement
			</button>
		</div>
	);
};

export default Counter;
