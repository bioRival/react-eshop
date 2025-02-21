import { useContext } from "react"
import CartContext from "../context/CartProvider"
import { UseCartContextType } from "../context/CartProvider"

export default function useCart(): UseCartContextType {
    return useContext(CartContext)
}