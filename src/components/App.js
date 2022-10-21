import Header from "./head-section/Header";
import Main from "./main-section/Main";
import Footer from "./foot-section/Footer";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  //Adds items to the cart
  function addToCart(newItem) {
    setCart((prevItems) => {
      let registeredId = "";
      let currentItems = prevItems.map((oldItem) => {
        if (oldItem.id === newItem.id) {
          registeredId = oldItem.id;
          return {
            ...oldItem,
            quantity: oldItem.quantity + newItem.quantity,
            total: oldItem.total + newItem.total,
          };
        } else {
          return oldItem;
        }
      });
      if (newItem.id === registeredId) {
        return currentItems;
      } else {
        return [...prevItems, newItem];
      }
    });
  }

  //remove item from the cart
  function removeFromCart(num) {
    setCart((prevItem) => prevItem.filter((item) => item.id !== num));
  }

  return (
    <div className=" bg-White">
      <Header cartItems={cart} removeItem={removeFromCart} />
      <Main sentToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;
