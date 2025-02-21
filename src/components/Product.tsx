import { ProductType } from "../context/ProductProvider"
import { ReducerActionType, ReducerAction } from "../context/CartProvider"
import { ReactElement } from "react"


type PropsType = {
    product: ProductType,
    dispatch: React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS: ReducerActionType,
    inCart: boolean,
}

export default function Product({
    product, dispatch, REDUCER_ACTIONS, inCart
}: PropsType): ReactElement {

    const img: string = new URL(
        `../images/${product.sku}.jpg`,
        import.meta.url
    ).href

    function onAddToCart() {
        dispatch({
            type: REDUCER_ACTIONS.ADD, 
            payload: {...product, qty: 1}
        })
    }

    const itemInCart = inCart && '➡️ Item in Cart ✅ '

    const content = 
        <article className="product">
            <h3>{product.name}</h3>
            <img src={img} alt={product.name} 
            className="product__img" />
            <p>{new Intl.NumberFormat(
                    'en-US', {
                        style: 'currency', 
                        currency: 'USD'
                    }).format(product.price)
                }

                {itemInCart}
            </p>
            <button onClick={onAddToCart}>
                Add to Cart
            </button>
        </article>

    return content
}