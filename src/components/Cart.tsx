import { useId } from "react"
import "./Cart.css"
import { CartIcon, ClearCartIcon } from "./Icons"
import { useCart } from "../hooks/useCart"
import { Product } from "../types/products";

interface CartItemProps {
  thumbnail: string;
  price: number;
  title: string;
  quantity: number;
  addToCart: () => void; 
}

const CartItem: React.FC<CartItemProps> = ({ thumbnail, price, title, quantity, addToCart }) => {
  return (
    <li>
        <img src={thumbnail} alt={title} />
        <div>
          <strong>{title}</strong> - ${price}
        </div>
        <footer>
          <small>
            Qty: {quantity}
          </small>
          <button onClick={addToCart}>+</button>
        </footer>
      </li>
  )
}

export  const Cart: React.FC = () => {
  const cartCheckboxId = useId()
  const { cart, addToCart, clearCart } = useCart();

  
  
  return (
    <>
    <label className="cart-button" htmlFor={cartCheckboxId}>
    <CartIcon/>
    </label>
    <input type="checkbox" hidden id={cartCheckboxId} />
    <aside className="cart">
      <ul>
        {
          cart.map((product: Product) => (
            //@ts-ignore
            <CartItem 
            key={product.id}
            addToCart={()=>addToCart(product)}
            {...product}/>
          ))
        }
      </ul>
      <button onClick={clearCart}>
        <ClearCartIcon/>
      </button>
    </aside>
    </>
  )
}
