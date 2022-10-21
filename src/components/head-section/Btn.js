import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Btn(props) {
  const { cart, img, text, toggleTotal } = props;

  return (
    <button
      onClick={
        text === "CheckOut" || text === "Place Order" ? toggleTotal : cart
      }
      className=" h-12 w-full rounded-md bg-Orange flex items-center justify-center space-x-2 text-White font-bold shadow-md shadow-Orange hover:opacity-70"
    >
      {text === "Add to cart" && <AddShoppingCartIcon />}

      <a href="1">{text}</a>
    </button>
  );
}

export default Btn;
