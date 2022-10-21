import { useEffect, useState } from "react";
import Btn from "./Btn";
import CartItems from "./cart-Items";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

//for Cart icon
function Cart(props) {
  const { cartNum, isEmpty, toggleCart } = props;
  return (
    <div className="relative">
      <ShoppingCartOutlinedIcon
        style={{ fontSize: 50 }}
        onClick={toggleCart}
        className="hover:cursor-pointer text-[#69707D] hover:text-Orange"
      />

      <span
        onClick={toggleCart}
        style={{ display: isEmpty && "none" }}
        className="absolute cursor-pointer -top-2 left-6 bg-Orange rounded-xl text-White text-[12px] px-2 shadow-md"
      >
        {cartNum}
      </span>
    </div>
  );
}

export default Cart;

//for Cart button and menu
function CartMenu(props) {
  const { cartItems, removeItem, isEmpty, isCart } = props;
  const [text, setText] = useState("CheckOut");
  const [isRemove, setIsRemove] = useState(false);
  const [id, setId] = useState(0);
  const [total, setTotal] = useState(0);
  const [showTotal, setShowTotal] = useState(false);

  //toggle whether or not to remove item from cart
  function toggleRemove(num) {
    setId(num);
    setIsRemove((prevState) => !prevState);
  }

  //calculate the sum total of items in the cart
  function sumTotal() {
    let sum = 0;
    cartItems.map((item) => {
      sum += item.total;
      return item;
    });

    setTotal(sum);
  }

  //show the sumTotal of items in the cart
  function toggleTotal(e) {
    sumTotal();
    setShowTotal((prevState) => !prevState);
    BtnText();
    e.preventDefault();
  }

  //checks whether item was remove or added into the cart
  useEffect(() => {
    showTotal && setShowTotal((prevState) => !prevState);
    showTotal && BtnText();
  }, [cartItems]);

  //changes the text on the cart button when clicked
  function BtnText() {
    if (showTotal) {
      setText("CheckOut");
    } else {
      setText("Place Order");
    }
  }

  //looping through cartItems
  const list = cartItems.map((item) => (
    <CartItems
      key={item.id}
      product={item.product}
      title={item.title}
      price={item.price}
      quantity={item.quantity}
      total={item.total}
      toggleRemove={() => toggleRemove(item.id)}
    />
  ));
  return (
    <div
      style={{ transform: isCart ? "translateX(0%)" : "translateX(200%)" }}
      className="fixed top-16 left-2 right-2 bg-[white] z-20 rounded-xl shadow-2xl transition duration-500 ease-in-out md:w-[370px] md:top-24 md:right-16 md:left-auto"
    >
      <div className="p-4">
        <h2 className="text-xl text-veryDarkBlue font-bold px-3 ">Cart</h2>
      </div>
      <hr />
      <div className="flex flex-col items-center justify-center min-h-[200px]">
        <div
          style={{ display: isEmpty ? "block" : "none" }}
          className="font-bold text-veryDarkBlue self-center"
        >
          <h4>Your cart is empty.</h4>
        </div>
        <div className=" py-6 w-[90%] space-y-6">{list}</div>
        <div
          style={{ display: isEmpty ? "none" : !showTotal && "none" }}
          className="w-[75%] flex items-center justify-around font-bold text-veryDarkBlue h-16 border-t-[1px] mt-4"
        >
          <span>Total :</span>
          <span>${total}.00</span>
        </div>
        <div
          style={{ display: isEmpty && "none" }}
          className="w-[85%] mx-auto pb-8 pt-4"
        >
          <Btn text={text} toggleTotal={toggleTotal} />
        </div>

        <div
          style={{ display: isRemove ? "flex" : "none" }}
          className="fixed top-0 left-0 font-bold  flex-col justify-center items-center p-12 bg-LightBox text-White w-full h-full rounded-xl leading-relaxed"
        >
          <h4>Are you Sure, you want to Remove this item from your Cart ?</h4>
          <div className="w-full flex justify-evenly py-6 ">
            <button
              onClick={toggleRemove}
              className="px-4 py-[5px] rounded-xl ring-2 ring-Orange hover:cursor-pointer hover:bg-Orange "
            >
              Cancel
            </button>
            <button
              onClick={() => {
                removeItem(id);
                toggleRemove();
              }}
              className="px-4 py-[5px] rounded-xl ring-2 ring-Orange hover:cursor-pointer hover:bg-white hover:text-red-600 hover:ring-red-600  "
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export { CartMenu };
