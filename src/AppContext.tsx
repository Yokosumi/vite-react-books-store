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
	handleAddBookToCart: (book: IBook) => void;
	handleDeleteBook: (book: IBook) => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

const booksUrl = "https://edwardtanguay.vercel.app/share/techBooks.json";

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [userName, setUserName] = useState("");
	const [books, setBooks] = useState([] as IBook[]);
	const [cart, setCart] = useState<ICart>({ items: [] } as ICart);

	useEffect(() => {
		setTimeout(async () => {
			const response = await axios.get(booksUrl);
			const _books = response.data;
			setBooks(_books);
		}, 2000);
	}, []);

	const handleAddBookToCart = (book: IBook) => {
		const _cart = structuredClone(cart);
		_cart.items.push(book);
		setCart(_cart);
	};

	const handleDeleteBook = (bookToDelete: IBook) => {
		const updatedCart = structuredClone(cart);
		let numberDeleted = 0;
		updatedCart.items = updatedCart.items.filter((book) => {
			if (book.id !== bookToDelete.id) {
				return book;
			} else {
				if (numberDeleted > 0) return book;
				numberDeleted++;
			}
		});

		setCart(updatedCart);
	};

	return (
		<AppContext.Provider
			value={{
				userName,
				setUserName,
				books,
				setBooks,
				cart,
				handleAddBookToCart,
				handleDeleteBook,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
