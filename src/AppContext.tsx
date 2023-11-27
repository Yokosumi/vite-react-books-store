import { useEffect, useState } from "react";
import { createContext } from "react";
import { IBook, ICart } from "./interfaces";
import axios from "axios";

interface IAppContext {
	userName: string;
	setUserName: (userName: string) => void;
	books: IBook[];
	setBooks: (books: IBook[]) => void;
	cart: ICart;
}

interface IAppProvider {
	children: React.ReactNode;
}

const booksUrl = "https://edwardtanguay.vercel.app/share/techBooks.json";

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [userName, setUserName] = useState("");
	const [books, setBooks] = useState([] as IBook[]);
	const [cart] = useState<ICart>({} as ICart);

	useEffect(() => {
		(async () => {
			const response = await axios.get(booksUrl);
			const _books = response.data;
			setBooks(_books);
		})();
	}, []);
	return (
		<AppContext.Provider
			value={{
				userName,
				setUserName,
				books,
				setBooks,
				cart,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
