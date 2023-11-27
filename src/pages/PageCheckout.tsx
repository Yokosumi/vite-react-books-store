import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageCheckout = () => {
	const { userName } = useContext(AppContext);
	return (
		<>
			{userName && (
				<p>
					Hello
					<span className="highlighted"> {userName}</span>, double
					check your order.
				</p>
			)}
		</>
	);
};
