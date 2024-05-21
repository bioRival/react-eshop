import { useContext } from "react"
import ProductsContext from "../context/ProductProvider"
import { UseProductsContextType } from "../context/ProductProvider"

export default function useProducts(): UseProductsContextType {
    return useContext(ProductsContext)
}