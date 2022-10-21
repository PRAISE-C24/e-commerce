import { useState } from "react";
import Button from "./button";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

function TextContent(props) {
  const { receiveItem } = props;
  const { title, text, price, discount, oldPrice, id, thumb1 } = props.texts;
  const [notice, setNotice] = useState(false);

  //toggle to show or hide Notice
  function toggleNotice() {
    setNotice((prevState) => !prevState);
  }

  function cart(num) {
    let item = {
      id: id,
      product: thumb1,
      title: title,
      price: price,
      quantity: num,
      total: price * num,
    };
    if (num > 0) {
      receiveItem(item);
    } else {
      toggleNotice();
    }
  }
  return (
    <section
      id="text-content"
      className="relative p-6 mx-auto space-y-6 md:space-y-4 md:w-1/2 md:py-8 lg:space-y-8 lg:py-10 lg:px-14 lg:-left-8 xl:-left-16  xl:space-y-8 xl:px-16"
    >
      <div className="text-left">
        <h3 className="font-bold uppercase text-Orange xl:text-xl">
          sneaker company
        </h3>
        <h1 className="text-3xl text-veryDarkBlue font-bold capitalize mt-3 mb-5 md:text-4xl lg:mb-10 xl:text-5xl">
          {title}
        </h1>
        <p className=" text-darkGrayishBlue xl:text-xl">{text}</p>
      </div>
      <div className="flex items-center md:flex-col md:items-start">
        <span className="mr-auto flex items-center">
          <p className=" text-3xl text-veryDarkBlue font-bold mb-2">
            ${price}.00
          </p>
          <span className="text-Orange bg-paleOrange px-2 rounded-md ml-4 ">
            {discount}%
          </span>
        </span>
        <p className="font-bold text-grayishBlue line-through">
          ${oldPrice}.00
        </p>
      </div>
      <div
        style={{ display: !notice && "none" }}
        className="absolute bottom-0 left-4 bg-LightBox  z-10 flex flex-col items-center gap-y-8 p-6 w-[90%] rounded-xl leading-relaxed md:w-[300px] md:left-10 lg:left-[20%] xl:left-1/4"
      >
        <h4 className="font-bold text-White">
          Please select the quantity of item to be added to your Cart.
        </h4>
        <div className=" w-[85%] flex justify-around">
          <ProductionQuantityLimitsIcon
            style={{ fontSize: 40 }}
            className="text-white"
          />
          <button
            onClick={toggleNotice}
            className="px-4 py-[5px] rounded-xl text-White font-bold ring-2 ring-Orange hover:cursor-pointer hover:bg-Orange "
          >
            Ok
          </button>
        </div>
      </div>
      <Button cart={cart} />
    </section>
  );
}
export default TextContent;
