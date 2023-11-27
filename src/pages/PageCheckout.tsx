import { useContext } from "react";
import { AppContext } from "../AppContext";
import { CheckOutItem } from "../components/CheckOutItem";
import { CheckoutItems } from "../components/CheckOutItems";

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
							{cart.items.length < 2 ? (
								<CheckOutItem
									key={book.id}
									url={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}
									bookTitle={book.title}
								/>
							) : (
								<CheckoutItems
									key={book.id}
									url={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}
									bookTitle={book.title}
								/>
							)}
						</div>
					);
				})}
			</div>
		</>
	);
};
