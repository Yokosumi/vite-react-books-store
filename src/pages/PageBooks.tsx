import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageBooks = () => {
	const { userName, books } = useContext(AppContext);
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
						<div className="mt-2 border-2 border-slate-950 p-2 rounded-lg">
							<img
								className="my-2 w-40 h-fit"
								key={book.id}
								src={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};
