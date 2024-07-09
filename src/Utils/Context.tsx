import axios from './Axios';
import { createContext, useEffect, useState, ReactNode } from 'react';

export type ProductType = {
  id: number ;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;

}

export interface ProductContextType {
  products: ProductType[] | null;
  setProducts: React.Dispatch<React.SetStateAction<ProductType[] | null>>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<ProductType[] | null>(null);

  const getProducts = async () => {
    try {
      const { data } = await axios.get('/products');
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
