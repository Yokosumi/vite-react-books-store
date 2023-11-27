import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageWelcome = () => {
	const { userName } = useContext(AppContext);
	return <p>Welcome {userName} </p>;
};
