import { useState } from "react";
import Btn from "../head-section/Btn";

function Button(props) {
  const { cart } = props;
  const [count, setCount] = useState(0);

  function addCount() {
    setCount((prevCount) => prevCount + 1);
  }
  function minusCount() {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
  }
  function addToCart(e) {
    setCount(0);
    cart(count);
    e.preventDefault();
  }

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0 ">
      <div className=" h-12 w-full rounded-md bg-lightGrayishBlue flex items-center justify-around shadow-md md:w-1/2 hover:opacity-70">
        <span
          onClick={minusCount}
          className=" w-12 h-full flex justify-center items-center hover:cursor-pointer"
        >
          <img className="w-4 " src="images/icon-minus.svg" alt="" />
        </span>

        <span className=" font-bold text-2xl mx-16 md:mx-0">{count}</span>
        <span
          onClick={addCount}
          className=" h-full w-12 flex justify-center items-center hover:cursor-pointer"
        >
          <img className="w-4  " src="images/icon-plus.svg" alt="" />
        </span>
      </div>
      <Btn cart={addToCart} text="Add to cart" />
    </div>
  );
}
export default Button;
