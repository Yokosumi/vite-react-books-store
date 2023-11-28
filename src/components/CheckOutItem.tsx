import { ICheckoutItems } from "../interfaces";

export const CheckOutItem = ({ url, bookTitle, amount }: ICheckoutItems) => {
	return (
		<>
			<div className="flex gap-3 items-center mb-3">
				<img className="my-2 w-40 h-fit cursor-pointer" src={url} />
				<p className="text-3xl">
					{bookTitle} x {amount}
				</p>
			</div>
		</>
	);
};
