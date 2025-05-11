import { create } from "zustand";
import { Api } from "../services/api-client";
import { getCartDetails } from "../lib";


export interface CartState {
	loading: boolean;
	error: boolean;
	totalAmount: number;
	items: CartStateItem[];
	/* Получение товаров из корзины */
	fetchCartItems: () => Promise<void>;
	/* Обновление количества товара */
	updateItemQuantity: (id: number, quantity: number) => Promise<void>;
	/* Добавление товара в корзину */
	// TODO типизировать CreateCartItemValues
	addCartItem: (values: any) => Promise<void>;
	/* Удаление товара из корзины */
	removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
	loading: true,
	error: false,
	totalAmount: 0,
	items: [],

	fetchCartItems: async () => {
		try {
			set({ loading: true, error: false });
			const data = await Api.cart.fetchCart();
			set(getCartDetails(data))
		} catch (error) {
			console.log('error', error);
			set({ error: true })
		} finally {
			set({ loading: false })
		}
	},

	updateItemQuantity: async () => { },
	addCartItem: async () => { },
	removeCartItem: async () => { },
}));
