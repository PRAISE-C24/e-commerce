//this is the main product slide
function Slide(props) {
  const { slide, openModal, id, isActive } = props;
  const { img1, img2, img3, img4 } = props.imgs;

  let slideTo = { transform: `translateX(-${slide}%)` };
  return (
    <div
      style={isActive === id ? slideTo : null}
      className="slider w-full h-full transition duration-500 "
    >
      <div className="slide w-full h-full absolute  ">
        <img
          onClick={openModal}
          className="w-full h-full hover:cursor-pointer md:rounded-2xl"
          src={img1}
          alt=""
        />
      </div>
      <div className="slide w-full h-full absolute left-[100%]">
        <img
          onClick={openModal}
          className="w-full h-full hover:cursor-pointer md:rounded-2xl"
          src={img2}
          alt=""
        />
      </div>
      <div className="slide w-full h-full absolute left-[200%]">
        <img
          onClick={openModal}
          className="w-full h-full hover:cursor-pointer md:rounded-2xl"
          src={img3}
          alt=""
        />
      </div>
      <div className="slide w-full h-full absolute left-[300%]">
        <img
          onClick={openModal}
          className="w-full h-full hover:cursor-pointer md:rounded-2xl"
          src={img4}
          alt=""
        />
      </div>
    </div>
  );
}

//slide thumbnail to show current slide on large screen
function SlideThumbnail(props) {
  const { clicked, handleClick, id, isActive } = props;
  const { thumb1, thumb2, thumb3, thumb4 } = props.thumbs;
  let style = {
    border: "5px solid hsl(26, 100%, 55%)",
    opacity: "0.4",
  };
  return (
    <div className="hidden md:flex">
      <div id="1" className="w-1/4 h-full p-3">
        <img
          style={isActive === id && clicked === 1 ? style : null}
          onClick={() => {
            handleClick(1, id);
          }}
          className="rounded-lg hover:cursor-pointer hover:opacity-60 "
          src={thumb1}
          alt=""
        />
      </div>
      <div id="2" className="w-1/4 h-full p-3">
        <img
          style={isActive === id && clicked === 2 ? style : null}
          onClick={() => {
            handleClick(2, id);
          }}
          className="rounded-lg hover:cursor-pointer hover:opacity-60 "
          src={thumb2}
          alt=""
        />
      </div>
      <div id="3" className="w-1/4 h-full p-3">
        <img
          style={isActive === id && clicked === 3 ? style : null}
          onClick={() => {
            handleClick(3, id);
          }}
          className="rounded-lg hover:cursor-pointer hover:opacity-60 "
          src={thumb3}
          alt=""
        />
      </div>
      <div id="4" className="w-1/4 h-full p-3">
        <img
          style={isActive === id && clicked === 4 ? style : null}
          onClick={() => {
            handleClick(4, id);
          }}
          className="rounded-lg hover:cursor-pointer hover:opacity-60 "
          src={thumb4}
          alt=""
        />
      </div>
    </div>
  );
}

export default Slide;
export { SlideThumbnail };
