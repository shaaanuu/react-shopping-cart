import "./YourCart.css";
import products from "../ProductData";
import { useCart } from "../useCart";

const YourCart = () => {
  const { cartProducts, addToCart, removeFromCart } = useCart();

  return (
    <div className="your-cart">
      <table>
        <thead>
          <tr className="head-row">
            <th></th>
            <th className="head-products">PRODUCTS</th>
            <th className="head-price">PRICE</th>
            <th className="head-quantity">QUANTITY</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(products).map((productId) => (
            <tr key={productId} className="body-row">
              <td>
                <img
                  className="body-img"
                  src={products[productId].img}
                  alt={products[productId].title}
                />
              </td>
              <td className="body-title">{products[productId].title}</td>
              <td className="body-price">${products[productId].price}</td>
              <td className="body-quantity">
                <div className="quantity-btn">
                  <div
                    className="add-btn"
                    onClick={() => addToCart(products[productId])}
                  >
                    +
                  </div>
                  <div className="quantity-value">
                    {
                      cartProducts.filter(
                        (item) => item === products[productId]
                      ).length
                    }
                  </div>
                  <div
                    className="minus-btn"
                    onClick={() => removeFromCart(products[productId])}
                  >
                    -
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YourCart;
