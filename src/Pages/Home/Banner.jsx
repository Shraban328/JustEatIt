const Banner = () => {
  return (
    <div>
      <div className="carousel h-[90vh]">
        <div className="carousel-item w-2/6">
          <img
            src="https://media.istockphoto.com/id/1321401406/photo/happy-kid-eating-fast-food-burger.jpg?s=612x612&w=0&k=20&c=lRcm3_36sHHJNHR2EkRgjL0L9J68DXz-7SSU7n-6t88="
            alt="Burger"
          />
        </div>
        <div className="carousel-item w-2/6">
          <img
            src={"https://i.ibb.co/FbrXWkB/git-eating-berger-v-1.jpg"}
            alt="Burger"
          />
        </div>
        <div className="carousel-item w-2/6">
          <img
            src="https://img.freepik.com/premium-photo/cute-little-indian-asian-playful-girl-drinking-fresh-mango-orange-juice-cold-drink-beverage-glass-isolated-white-background_466689-8909.jpg?w=740"
            alt="Burger"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
