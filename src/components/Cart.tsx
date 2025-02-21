import { useState } from "react"
import useCart from "../hooks/useCart"
import CartLineItem from "./CartLineItem"


export default function Cart() {
    const [confirm, setConfirm] = useState(false)
    const { 
        dispatch, 
        REDUCER_ACTIONS, 
        totalItems, 
        totalPrice,
        cart 
    } = useCart()

    function onSubmitOrder() {
        dispatch({ type: REDUCER_ACTIONS.SUBMIT })
        setConfirm(true)
    }

    const pageContent = confirm
        ? <h2>Thank you for your order.</h2>
        : <>
            <h2 className="offscreen">Cart</h2>
            <ul className="cart">
                {cart.map(item => {
                    return (
                        <CartLineItem
                            key={item.sku}
                            item={item}
                            dispatch={dispatch}
                            REDUCER_ACTIONS={REDUCER_ACTIONS}
                        />
                    )
                })}
            </ul>
            <div className="cart__totals">
                <p>Total Items: {totalItems}</p>
                <p>Total Price: {totalPrice}</p>
                <button className="cart_submit"
                    disabled={!totalItems}
                    onClick={onSubmitOrder}>
                    Place Order
                </button>
            </div>
        </>

    const content = (
        <main className="main main__cart">
            {pageContent}
        </main>
    )

    return content
}