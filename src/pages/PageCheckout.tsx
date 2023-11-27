import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageCheckout = () => {
	const { userName, cart } = useContext(AppContext);
	return (
		<>
			{userName && (
				<p>
					Hello
					<span className="highlighted"> {userName}</span>, double
					check your order.
				</p>
			)}
			<div>
				{cart.items.map((book) => {
					return <div>{book.title}</div>;
				})}
			</div>
		</>
	);
};
