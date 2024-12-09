import { useState } from "react";

const Card = () => {
  const [show, imageSet] = useState(false);

  function showHide() {
    imageSet(!show);
  }
  return (
    <div className="h-screen flex  flex-col justify-center items-center space-y-4">
      {show ? (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
        </div>
      ) : (
        <div className=""></div>
      )}

      <button className="btn btn-active btn-accent" onClick={showHide}>
        {show ? "hide" : "show"}
      </button>
    </div>
  );
};
export default Card;
