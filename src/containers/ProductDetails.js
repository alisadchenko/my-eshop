import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';
import { CartState } from '../store/cart-context';
import { ActionTypes } from '../redux/constants/action-types';

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const { productId } = useParams();
    const dispatchProduct = useDispatch();

    const fetchProductDetail = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch(err => {
                console.log("Err", err);
            });

            dispatchProduct(selectedProduct(response.data));
    }

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail(productId);
        return () => {
          dispatchProduct(removeSelectedProduct());
        };
    }, [productId]);

    const {
      state: { cart },
      dispatch,
    } = CartState();

    return (
        <div className="ui grid container">
          {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                {cart.some((p) => p.id === product.id) ? (
                    <button className="ui button" tabIndex="0" onClick={ () => {
                      dispatch({
                        type: ActionTypes.REMOVE_FROM_CART,
                        payload: product
                      })
                    }}>
                      <div className="visible content">Remove from Cart</div>
                    </button>) : (
                    <button className="ui button" tabIndex="0" onClick={ () => {
                      dispatch({
                        type: ActionTypes.ADD_TO_CART,
                        payload: product
                      })
                    }}>
                      <div className="visible content">Add to Cart</div>
                    </button>)
                }
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;