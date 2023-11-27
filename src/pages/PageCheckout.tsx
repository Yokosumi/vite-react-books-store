import { useContext } from "react";
import { AppContext } from "../AppContext";
import { CheckoutItems } from "../components/CheckoutItems";

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
					return (
						<div className="flex gap-3 items-center mb-3">
							<CheckoutItems
								url={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}
								bookTitle={book.title}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};
