import { Link } from "react-router-dom";
import { ActionTypes } from "../redux/constants/action-types";
import { CartState } from '../store/cart-context';
import { useState } from "react";
import { useEffect } from "react";

const Cart = () => {
    const {
        state: { cart },
        dispatch,
    } = CartState();

    const [total, setTotal] = useState();

    useEffect (() => {
        setTotal(cart.reduce((acc, curr) => acc + +(curr.price)*curr.qty, 0));
    }, [cart]);
    
    return (
        <div className="ui one column stackable page grid">
            <div className="column twelwe wide">
            <div className="ui hidden divider"></div>
            {cart.length > 0 && (
                <div className="ui segment">
                    <div className="ui three column very relaxed grid">
                        <div className="column">
                            Subtotal {cart.length} items
                        </div>
                        <div className="column">
                            Total: ${total}
                        </div>
                        <div className="column">
                            <div className="ui basic buttons">
                                <button className="ui button"><Link to='/'>Keep shopping</Link></button>
                                <div className="or"></div>
                                <button className="ui button">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
                {cart.map((product) => (
                    <div className="ui segment" key={product.id}>
                        <div className="ui two column very relaxed grid">
                            <div className="column">
                            <img className="ui centered small image" src={product.image} alt={product.title} />
                            </div>
                            <div className="column">
                                <div className="ui hidden fitted divider"></div>
                                <h3 className="header">{product.title}</h3>
                                <div className="meta price">$ {product.price}</div>
                                <div className="meta">{product.category}</div>
                                <div className="ui hidden fitted divider"></div>
                                <button className="ui basic button" onClick={() => {
                                    dispatch({
                                        type: ActionTypes.ADD_ITEM,
                                        payload: {
                                            id: product.id,
                                            qty: product.qty
                                        }
                                    })
                                }}>
                                    +
                                </button>
                                <>{product.qty} </>
                                <button className="ui basic button" onClick={() => {
                                    dispatch({
                                        type: ActionTypes.REMOVE_ITEM,
                                        payload: {
                                            id: product.id,
                                            qty: product.qty
                                        }
                                    })
                                }}>
                                    –
                                </button>
                                <button className="ui basic icon button" onClick={() => {
                                    dispatch({
                                        type: ActionTypes.REMOVE_FROM_CART,
                                        payload: product
                                    })
                                }}>
                                    <i className="trash icon"></i>
                                </button>
                            </div>
                        </div>
                        <div className="ui vertical divider" />
                    </div>
                ))}
                {!cart.length > 0 && (
                    
                    <div className="item">
                        <div className="ui hidden divider"></div>
                        <h2>Your cart is empty!</h2>
                        <button className="ui basic button"><Link to='/'>Go shopping!</Link></button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart;