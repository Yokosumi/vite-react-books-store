import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageBooks = () => {
	const { userName, books } = useContext(AppContext);
	return (
		<>
			{userName && <p>Hello {userName}, please select your books.</p>}

			<p>There are {books.length} books.</p>
			<div className="flex gap-3 flex-wrap">
				{books.map((book) => {
					return (
						<img
							className="my-2 w-40 h-fit"
							key={book.id}
							src={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}
						/>
					);
				})}
			</div>
		</>
	);
};
