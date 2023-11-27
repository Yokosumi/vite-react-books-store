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
					return (
						<div className="flex gap-3 items-center mb-3">
							<img
								className="my-2 w-12 h-fit cursor-pointer"
								src={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}
							/>
							<p className="text-3xl">{book.title}</p>
						</div>
					);
				})}
			</div>
		</>
	);
};
