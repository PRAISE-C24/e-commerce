import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function CartItems(props) {
  const { product, title, price, quantity, total, toggleRemove } = props;
  return (
    <div className="flex justify-center items-center gap-x-4 text-darkGrayishBlue">
      <div>
        <img className="w-14 rounded-lg" src={product} alt="" />
      </div>
      <div>
        <h4 className=" capitalize">{title}</h4>
        <span>
          ${price}.00 x {quantity}
        </span>
        <span className="font-bold text-veryDarkBlue ml-3">${total}.00</span>
      </div>
      <div>
        <DeleteForeverIcon
          onClick={toggleRemove}
          className="hover:cursor-pointer hover:text-red-600"
        />
      </div>
    </div>
  );
}

export default CartItems;
