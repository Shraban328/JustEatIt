import { Toaster } from "react-hot-toast";
import AppDownloadLink from "./AppDownloadLink";
import Banner from "./Banner";
import Brands from "./Brands";
import Features from "./Features";

const Home = () => {
  return (
    <div>
      <Banner />
      <Brands />
      <Features />
      <AppDownloadLink />
      <Toaster />
    </div>
  );
};

export default Home;
