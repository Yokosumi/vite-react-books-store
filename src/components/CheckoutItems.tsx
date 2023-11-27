import { ICheckoutItems } from "../interfaces";

export const CheckoutItems = ({ url, bookTitle }: ICheckoutItems) => {
	return (
		<>
			<div className="flex gap-3 items-center mb-3">
				<img className="my-2 w-40 h-fit cursor-pointer" src={url} />
				<p>{bookTitle}</p>
			</div>
		</>
	);
};
