import Products from "../product.json";
import Slide, { SlideThumbnail } from "./slide";
import PrevBtn, { NextBtn, Dots } from "./slideNav";
import CloseIcon from "@mui/icons-material/Close";

function SlideModal(props) {
  const {
    isModal,
    activeModal,
    isClicked,
    currentSlide,
    previousSlide,
    nextSlide,
    handleClick,
    handleModal,
  } = props;

  let slide = Products.map(
    (product) =>
      product.id === activeModal && (
        <div key={product.id}>
          <div className="slide-container relative mx-auto overflow-hidden h-[350px] md:w-1/2 md:h-[380px]">
            <Slide slide={currentSlide} imgs={product} />
          </div>
          <div className=" mx-auto mt-4 md:w-1/2 lg:w-[50%] xl:w-[50%]">
            <SlideThumbnail
              clicked={isClicked}
              handleClick={handleClick}
              thumbs={product}
            />
          </div>
        </div>
      )
  );
  return (
    <div
      style={{ transform: isModal ? "translateX(0%)" : "translateX(-100%)" }}
      className=" fixed w-[100vw] h-[100vh] bg-LightBox z-20 flex flex-col justify-center  top-0 left-0 transition duration-500 ease-out md:flex-row  md:items-center"
    >
      <CloseIcon
        style={{ fontSize: 50 }}
        onClick={() => handleModal(activeModal)}
        className=" absolute text-White cursor-pointer top-10 right-10 hover:text-Orange md:top-40 md:right-40 lg:top-12 lg:right-36 xl:right-60"
      />

      <div className="absolute flex left-2 top-1/2 z-10 -translate-y-1/2 w-10 h-10 items-center justify-center bg-White rounded-full transition-all hover:w-12 hover:h-12 hover:cursor-pointer md:top-[45%] md:left-[22%] lg:left-[28%] xl:left-[34%]">
        <PrevBtn prev={previousSlide} />
      </div>

      {slide}
      <div className="md:hidden">
        <Dots clicked={isClicked} handleClick={handleClick} />
      </div>

      <div className="absolute flex right-2 top-1/2 z-10 -translate-y-1/2 w-10 h-10 items-center justify-center bg-White rounded-full transition-all hover:w-12 hover:h-12 hover:cursor-pointer md:top-[45%] md:right-[22%] lg:right-[28%] xl:right-[34%]">
        <NextBtn next={nextSlide} />
      </div>
    </div>
  );
}

export default SlideModal;
