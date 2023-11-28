import { useEffect, useState } from "react";
import { createContext } from "react";
import { IBook, ICart, ICartGroupedItem } from "./interfaces";
import axios from "axios";

interface IAppContext {
	userName: string;
	setUserName: (userName: string) => void;
	books: IBook[];
	setBooks: (books: IBook[]) => void;
	cart: ICart;
	handleAddBookToCart: (book: IBook) => void;
	handleDeleteBook: (book: IBook) => void;
	cartGroupedItems: ICartGroupedItem[];
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
	const [cartGroupedItems, setCartGroupedItems] = useState<
		ICartGroupedItem[]
	>([] as ICartGroupedItem[]);

	//useEffects
	useEffect(() => {
		setTimeout(async () => {
			const response = await axios.get(booksUrl);
			const _books = response.data;
			setBooks(_books);
		}, 2000);
	}, []);

	useEffect(() => {
		const _cartGroupedItems: ICartGroupedItem[] = [];
		const countObj: any = {};
		for (const book of cart.items) {
			if (countObj[book.idCode]) {
				countObj[book.idCode]++;
			} else {
				countObj[book.idCode] = 1;
			}
		}
		const properties = Object.entries(countObj);
		for (const [idCode, _amount] of properties) {
			const book = books.find((m: IBook) => m.idCode === idCode);
			const amount = _amount as number;
			if (book) {
				_cartGroupedItems.push({
					book,
					amount,
				});
			}
		}
		setCartGroupedItems(_cartGroupedItems);
	}, [cart]);

	//handle functions
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
				cartGroupedItems,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
