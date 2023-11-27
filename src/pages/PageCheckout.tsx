import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageCheckout = () => {
	const { userName } = useContext(AppContext);
	return <>{userName && <p>Hello {userName}, double check your order.</p>}</>;
};
