import { useContext } from "react";
import { AppContext } from "../AppContext";
import { ImSpinner9 } from "react-icons/im";

export const PageBooks = () => {
	const { userName, books, handleAddBookToCart, handleDeleteBook, cart } =
		useContext(AppContext);

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

			{books.length > 0 ? (
				<>
					<div className="flex gap-3 flex-wrap">
						{books.map((book) => {
							return (
								<div
									className="flex flex-col justify-between mt-2 border-2 border-slate-950 p-2 rounded-lg"
									key={book.id}
								>
									<img
										className="my-2 w-40 h-fit cursor-pointer"
										onClick={() =>
											handleAddBookToCart(book)
										}
										key={book.id}
										src={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}
									/>
									<p className="text-center bg-black text-white p-2 rounded-lg">
										Ordered:
										{
											cart.items.filter(
												(item) =>
													item.idCode === book.idCode
											).length
										}
									</p>
									{cart.items.find(
										(item) => item.id === book.id
									) ? (
										<button
											className="mt-2"
											onClick={() =>
												handleDeleteBook(book)
											}
										>
											remove one
										</button>
									) : (
										""
									)}
								</div>
							);
						})}
					</div>
				</>
			) : (
				<div className="flex justify-center items-center">
					<ImSpinner9 className="animate-spin text-7xl	text-orange-500 " />
				</div>
			)}
		</>
	);
};
