import { createContext, ReactNode, useState } from "react";
import { Product } from "../types/products";


export interface CartContextType {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
  addToCart: (product: Product) => void;
  clearCart: () => void;
  removeFromCart: (product: Product) => void;
}

// 2. Crear el contexto con un valor inicial
export const CartContext = createContext<CartContextType | undefined>(undefined);

// 3. Proveedor de contexto
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id);
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      //@ts-ignore
      newCart[productInCartIndex].quantity += 1;
      setCart(newCart);
    } 
    setCart(prevState => ([
        ...prevState,
        {
            ...product,
            quantity: 1
        }
    ]))
  };
  const removeFromCart = (product: Product) => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([]);
  };

  const contextValue: CartContextType = {
    cart,
    setCart,
    addToCart,
    clearCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
