import CloseIcon from "@mui/icons-material/Close";

//desktop menu
function Menu() {
  return (
    <div
      id="desktop-menu"
      className="hidden text-veryDarkBlue h-28 mr-auto ml-8 space-x-4 md:flex items-center lg:space-x-8  lg:ml-12 lg:text-xl"
    >
      <a
        className="hover:cursor-pointer hover:border-b-4 border-Orange h-full flex items-center"
        href="1"
      >
        Collections
      </a>
      <a
        className="hover:cursor-pointer hover:border-b-4 border-Orange h-full flex items-center"
        href="1"
      >
        Men
      </a>
      <a
        className="hover:cursor-pointer hover:border-b-4 border-Orange h-full flex items-center"
        href="1"
      >
        Women
      </a>
      <a
        className="hover:cursor-pointer hover:border-b-4 border-Orange h-full flex items-center"
        href="1"
      >
        About
      </a>
      <a
        className="hover:cursor-pointer hover:border-b-4 border-Orange h-full flex items-center"
        href="1"
      >
        Contact
      </a>
    </div>
  );
}

export default Menu;

//mobile menu
function MobilMenu(props) {
  const { toggleMenu, isClick } = props;
  return (
    <div>
      <div
        id="mobile-menu"
        style={{ transform: isClick ? "translateX(0%)" : "translateX(-100%)" }}
        className="fixed bg-LightBox top-0 left-0 right-0 bottom-0 z-30 md:hidden"
      ></div>

      <div
        style={{ transform: isClick ? "translateX(0%)" : "translateX(-100%)" }}
        className="fixed top-0 left-0 h-full w-2/3 bg-white text-veryDarkBlue shadow-lg z-30 transition duration-500 ease-out md:hidden"
      >
        <div className="px-6 pt-8 pb-5">
          <CloseIcon
            style={{ fontSize: 30 }}
            onClick={toggleMenu}
            className=" text-veryDarkBlue hover:cursor-pointer hover:text-Orange"
          />
        </div>

        {/* <img src="images/icon-close.svg" alt="" /> */}
        <div className="flex flex-col font-bold p-6 space-y-4">
          <a className="hover:cursor-pointer" href="1">
            Collections
          </a>
          <a className="hover:cursor-pointer" href="1">
            Men
          </a>
          <a className="hover:cursor-pointer" href="1">
            Women
          </a>
          <a className="hover:cursor-pointer" href="1">
            About
          </a>
          <a className="hover:cursor-pointer" href="1">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export { MobilMenu };
