export interface Product {
  id: string;
  name: string;
  quantity: number;
  type: 'in' | 'out';
  date: string;
  notes?: string;
}

export interface InventoryState {
  products: Product[];
  addProduct: (product: Omit<Product, 'id' | 'date'>) => void;
  removeProduct: (id: string) => void;
}