import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

//prevBtn for previous slide
function PrevBtn(props) {
  const { prev } = props;
  return (
    <div
      onClick={() => {
        prev();
      }}
    >
      <ArrowBackIosIcon className="hover:text-Orange" />
    </div>
  );
}

//nextBtn for next slide
function NextBtn(props) {
  const { next } = props;
  return (
    <div
      onClick={() => {
        next();
      }}
    >
      <ArrowForwardIosIcon className="hover:text-Orange" />
    </div>
  );
}

//dots to show the current slide on small screen
function Dots(props) {
  const { clicked, handleClick, id, isActive } = props;
  let current = {
    backgroundColor: "hsl(26, 100%, 55%)",
  };
  return (
    <div className="h-10 flex items-center justify-center space-x-2">
      <div
        onClick={() => handleClick(1, id)}
        style={isActive === id && clicked === 1 ? current : null}
        className="w-2 h-2 border-2 border-grayishBlue  rounded-full"
      ></div>
      <div
        onClick={() => handleClick(2, id)}
        style={isActive === id && clicked === 2 ? current : null}
        className="w-2 h-2 border-2 border-grayishBlue  rounded-full"
      ></div>
      <div
        onClick={() => handleClick(3, id)}
        style={isActive === id && clicked === 3 ? current : null}
        className="w-2 h-2 border-2 border-grayishBlue  rounded-full"
      ></div>
      <div
        onClick={() => handleClick(4, id)}
        style={isActive === id && clicked === 4 ? current : null}
        className="w-2 h-2 border-2 border-grayishBlue  rounded-full"
      ></div>
    </div>
  );
}

export default PrevBtn;
export { NextBtn, Dots };
