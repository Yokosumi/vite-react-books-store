import { useContext } from "react";
import { AppContext } from "../AppContext";
import { CheckOutItem } from "../components/CheckOutItem";

export const PageCheckout = () => {
	const { userName, cartGroupedItems } = useContext(AppContext);
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
				{cartGroupedItems.map((groupedItem) => {
					return (
						<>
							<CheckOutItem
								key={groupedItem.book.id}
								url={`https://edwardtanguay.vercel.app/share/images/techBooks/${groupedItem.book.idCode}.jpg`}
								bookTitle={groupedItem.book.title}
								amount={groupedItem.amount}
							/>
						</>
					);
				})}
			</div>
		</>
	);
};
