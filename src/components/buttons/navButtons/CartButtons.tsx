import cart from "../../../assets/icons/cart.png";
const CartButton = () => {
  return (
    <div className="nav-button">
      <img src={cart} />
      <span> Cart</span>
    </div>
  );
};

export default CartButton;
