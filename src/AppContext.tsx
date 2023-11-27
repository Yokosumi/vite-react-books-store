import { useState } from "react";
import { createContext } from "react";

interface IAppContext {
	userName: string;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [userName] = useState("Hans");

	return (
		<AppContext.Provider
			value={{
				userName,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
