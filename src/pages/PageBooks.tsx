import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageBooks = () => {
	const { userName, books, handleAddBookToCart, cart } =
		useContext(AppContext);
	console.log(cart);

	return (
		<>
			{userName && (
				<p>
					Hello <span className="highlighted">{userName}</span>,
					please select your books.
				</p>
			)}

			<p>
				There are <span className="highlighted">{books.length}</span>{" "}
				books.
			</p>
			<div className="flex gap-3 flex-wrap">
				{books.map((book) => {
					return (
						<div
							className="mt-2 border-2 border-slate-950 p-2 rounded-lg"
							key={book.id}
						>
							<img
								className="my-2 w-40 h-fit cursor-pointer"
								onClick={() => handleAddBookToCart(book)}
								key={book.id}
								src={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}
							/>
							<p className="text-center bg-black text-white p-2 rounded-lg">
								Ordered:{" "}
								{
									cart.items.filter(
										(item) => item.idCode === book.idCode
									).length
								}
							</p>
						</div>
					);
				})}
			</div>
		</>
	);
};
