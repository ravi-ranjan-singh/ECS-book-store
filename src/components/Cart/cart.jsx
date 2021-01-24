import CartTable from './../CartTable/cartTable';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './cart.css';

toast.configure();

const Cart = ({ cartBooks, setCartBooks }) => {
  console.log(cartBooks);
  const calcPrice = () => {
    let totalPrice = 0;
    cartBooks.forEach((book) => {
      totalPrice += book.price;
    });
    return totalPrice;
  };

  const handleToken = () => {
    toast('Your Payment was successful. Your order has been placed', {
      className: 'toast-container',
    });
  };

  return (
    <div className="cart">
      <div className="card">
        <div className="card-content">
          <div className="cart-items-table">
            <h3>Your Cart</h3>
            {cartBooks.length === 0 ? (
              <h5>Your Cart is empty. Please add Books to proceed </h5>
            ) : (
              <div className="flow-table">
                <CartTable cartBooks={cartBooks} setCartBooks={setCartBooks} />
              </div>
            )}
          </div>
          <div className="total-price-block">
            {cartBooks.length === 0 ? null : (
              <>
                <h1>Total Price</h1>
                <h3 className="tp">$ {calcPrice()}</h3>
                <StripeCheckout
                  stripeKey={
                    'pk_test_51ID9uaDeTcaRATNc1ENSSL1MK0dJZoigToJ1FgXkqGxy8mHb7WNFKdTCn6AMjfORRZy38FZzR22lVUqI9f7VvRXk00ZBRSHaq8'
                  }
                  token={handleToken}
                  billingAddress
                  shippingAddress
                  amount={calcPrice() * 100}
                >
                  <button className="checkout">Checkout</button>
                </StripeCheckout>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
