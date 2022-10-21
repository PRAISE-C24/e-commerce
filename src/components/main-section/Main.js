import { useState } from "react";
import TextContent from "./text";
import ProductSlide from "./product-slide";
import Products from "../product";
import SlideModal from "./slide-modal";

let count = 0;
function Main(props) {
  //click state
  const [isClicked, setIsClicked] = useState(1);
  //currentSlide state
  const [currentSlide, setCurrentSlide] = useState(0);
  //active slide state
  const [isActive, setIsActive] = useState(1);
  //toggle open or close state
  const [isModal, setIsModal] = useState(false);
  //active modal state
  const [activeModal, setActiveModal] = useState(1);

  //handling all the click events on the
  //slide-dots and slide-thumbnails
  function handleClick(num, id) {
    handleActive(id);
    setIsClicked(num);
    handleSlide(num - 1);
  }

  //setting the current slide to be displayed
  function handleSlide(num) {
    let slideTo = num * 100;
    setCurrentSlide(slideTo);
  }

  //setting active state for different slides
  //this prevent multiple slide from moving at the same time
  function handleActive(active) {
    setIsActive(active);
  }

  //moving slide to the next slide
  function nextSlide(id) {
    if (isActive !== id) {
      count = 0;
    }
    handleActive(id);
    if (count >= 3) {
      count = 2;
    }
    count++;
    handleSlide(count);
    setIsClicked(count + 1);
  }

  //moving slide back to the previous slide
  function previousSlide(id) {
    if (isActive !== id) {
      count = 0;
    }
    handleActive(id);
    if (count <= 0) {
      count = 1;
    }
    count--;
    handleSlide(count);
    setIsClicked(count + 1);
  }

  //toggle modal open and close
  //also set active modal
  function handleModal(num) {
    if (activeModal !== num) {
      count = 0;
      handleSlide(count);
      setIsClicked(count + 1);
    }
    setIsModal((prevMode) => !prevMode);
    setActiveModal(num);
  }

  function receiveItem(item) {
    props.sentToCart(item);
  }
  //mapping out all the images and text-content
  //form the products json file.
  const Content = Products.map((product) => (
    <div
      key={product.id}
      className="flex flex-col mb-12 md:flex md:flex-row md:py-20 "
    >
      <ProductSlide
        id={product.id}
        imgs={product}
        isClicked={isClicked}
        currentSlide={currentSlide}
        active={isActive}
        previousSlide={() => previousSlide(product.id)}
        nextSlide={() => nextSlide(product.id)}
        handleClick={handleClick}
        handleModal={() => handleModal(product.id)}
      />
      <TextContent receiveItem={receiveItem} texts={product} />
    </div>
  ));

  //rendering the all the content in the main
  return (
    <main id="main-content" className="container mx-auto">
      {Content}
      <SlideModal
        isModal={isModal}
        activeModal={activeModal}
        isClicked={isClicked}
        currentSlide={currentSlide}
        previousSlide={() => previousSlide(activeModal)}
        nextSlide={() => nextSlide(activeModal)}
        handleClick={handleClick}
        handleModal={handleModal}
      />
    </main>
  );
}

export default Main;
