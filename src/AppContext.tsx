import { useState } from "react";
import { createContext } from "react";

interface IAppContext {
	userName: string;
	setUserName: (userName: string) => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [userName, setUserName] = useState("Lydia");

	return (
		<AppContext.Provider
			value={{
				userName,
				setUserName,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
