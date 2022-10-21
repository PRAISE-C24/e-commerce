import { useEffect, useState } from "react";
import Menu, { MobilMenu } from "./menu";
import Cart, { CartMenu } from "./cart";
import MenuIcon from "@mui/icons-material/Menu";

function Header(props) {
  const { cartItems, removeItem } = props;
  const [isClick, setIsClick] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isCart, setIsCart] = useState(false);

  function toggleMenu() {
    setIsClick((prevClick) => !prevClick);
  }
  function toggleCart() {
    setIsCart((prevState) => !prevState);
  }
  useEffect(() => {
    cartItems.length > 0 ? setIsEmpty(false) : setIsEmpty(true);
  }, [cartItems]);

  return (
    <header
      id="nav-section"
      className="container mx-auto px-4  md:px-8 lg:px-16"
    >
      <nav className="relative flex items-center justify-start py-6  md:py-0">
        {/* menu icon */}
        <span className="md:hidden">
          <MenuIcon
            style={{ fontSize: 32 }}
            onClick={toggleMenu}
            className="hover:text-Orange cursor-pointer "
          />
        </span>

        {/* page logo */}
        <div className=" mr-auto ml-4 md:mr-0 md:ml-0">
          <img className=" lg:h-6 xl:h-8" src="images/logo.svg" alt="" />
        </div>

        {/* desktop menu */}
        <Menu />

        {/* mobile menu */}
        <MobilMenu isClick={isClick} toggleMenu={toggleMenu} />

        {/* cart and avatar section */}
        <div className="flex items-center gap-x-4 md:space-x-10">
          <Cart
            cartNum={cartItems.length}
            isEmpty={isEmpty}
            toggleCart={toggleCart}
          />
          <CartMenu
            cartItems={cartItems}
            removeItem={removeItem}
            isEmpty={isEmpty}
            isCart={isCart}
          />
          <img
            className="cursor-pointer w-10  hover:border-2 hover:border-Orange rounded-full md:w-16"
            src="images/image-avatar.png"
            alt=""
          />
        </div>
      </nav>
      <hr className="hidden md:block" />
    </header>
  );
}

export default Header;
