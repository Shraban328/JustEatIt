const AppDownloadLink = () => {
  return (
    <div className="hero max-h-fit max-w-screen-2xl mx-auto rounded-lg my-10 bg-[#FFDA77] p-6">
      <div className="hero-content grid grid-cols-1">
        <div className="flex items-center gap-4">
          <img
            src="https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png"
            className="w-44 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Get JussEatIt in your phone</h1>
            <p className="py-6 text-justify w-1/2">
              {
                "It's all at your fingertips – the products and brands you love. Find the right food and tasty stuffs to suit your mood, and make the first bite last. Go ahead, download us."
              }
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="w-32"
            src="https://cdn.freebiesupply.com/logos/large/2x/google-play-badge-logo-svg-vector.svg"
            alt=""
          />
          <img
            className="w-36 h-10"
            src="https://i.ibb.co/F6s3NGF/download-from-the-app-store.png"
            alt=""
          />
          <img
            className="w-36 h-10"
            src="https://i.ibb.co/M6rDpKK/explore-it-on-app-Gallary.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownloadLink;
