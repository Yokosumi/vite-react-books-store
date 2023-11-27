export interface IBook {
	id: number;
	idCode: string;
	title: string;
	description: string;
}

export interface ICart {
	items: IBook[];
}

export interface ICheckoutItems {
	url: string;
	bookTitle: string;
}
