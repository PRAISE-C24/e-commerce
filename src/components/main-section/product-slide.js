import Slide, { SlideThumbnail } from "./slide";
import PrevBtn, { NextBtn, Dots } from "./slideNav";

function ProductSlide(props) {
  const {
    id,
    isClicked,
    currentSlide,
    active,
    previousSlide,
    nextSlide,
    handleClick,
    handleModal,
  } = props;

  return (
    <section id="product-content" className="relative  md:w-1/2">
      <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-White rounded-full hover:w-10 hover:h-10 hover:cursor-pointer md:hidden">
        <PrevBtn id={id} prev={previousSlide} isActive={active} />
      </div>

      {/* product slide */}
      <div className="slide-container relative mx-auto overflow-hidden h-[320px] md:w-4/5 md:h-[350px] lg:w-[70%] lg:h-[380px] xl:w-[65%] xl:h-[420px]">
        <Slide
          slide={currentSlide}
          id={id}
          isActive={active}
          openModal={handleModal}
          imgs={props.imgs}
        />
      </div>
      {/* nextBtn */}
      <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-White rounded-full hover:w-10 hover:h-10 hover:cursor-pointer md:hidden">
        <NextBtn id={id} next={nextSlide} isActive={active} />
      </div>
      {/* dots */}
      <div className="md:hidden">
        <Dots
          clicked={isClicked}
          id={id}
          handleClick={handleClick}
          isActive={active}
        />
      </div>

      {/* thumb image */}
      <div className=" mx-auto mt-4 md:w-4/5 lg:w-[70%] xl:w-[65%]">
        <SlideThumbnail
          clicked={isClicked}
          handleClick={handleClick}
          thumbs={props.imgs}
          id={id}
          isActive={active}
        />
      </div>
    </section>
  );
}

export default ProductSlide;
