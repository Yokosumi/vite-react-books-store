import { useContext } from "react";
import { AppContext } from "../AppContext";
import { ICheckoutItems } from "../interfaces";

export const CheckoutItems = ({ url, bookTitle }: ICheckoutItems) => {
	const { cart, books } = useContext(AppContext);

	const Occurences = books.map((book) => {
		return cart.items.filter((item) => item.id === book.id).length;
	});

	return (
		<>
			<div className="flex gap-3 items-center mb-3">
				<img className="my-2 w-40 h-fit cursor-pointer" src={url} />
				<p>{bookTitle}</p>
				<p>{Occurences}</p>
			</div>
		</>
	);
};
