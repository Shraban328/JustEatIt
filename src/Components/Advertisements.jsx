const Advertisements = () => {
  return (
    <div>
      <div className="carousel h-[60vh] w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://w0.peakpx.com/wallpaper/170/878/HD-wallpaper-add-girl-model-smile-coca-cola-commercial.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.pinimg.com/originals/bf/5f/a1/bf5fa1e612d2c8c9b5861aba6d1e1748.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://www.modephone.com/cdn/shop/articles/how_to_add_starbucks_gift_card_to_app_featured_936x.png?v=1653995758"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisements;
