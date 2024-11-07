import { create } from 'zustand';
import { InventoryState, Product } from '../types/inventory';

export const useInventoryStore = create<InventoryState>((set) => ({
  products: [],
  addProduct: (product) => {
    set((state) => ({
      products: [
        ...state.products,
        {
          ...product,
          id: Math.random().toString(36).slice(2),
          date: new Date().toISOString(),
        },
      ],
    }));
  },
  removeProduct: (id) => {
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    }));
  },
}));