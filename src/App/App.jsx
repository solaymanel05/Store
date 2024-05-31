import { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
  faStar,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Navbar/nav";
// import NavigateButton from "../Components/NavigateButton/navigateButton";
import { store } from "../Store/store";
import "./App.css";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import Hero from "../Components/hero/hero";
import Trending from "../Components/Trending/Trending";
import FaProd from "../Components/favoriteProd/faProd";
import Info from "../Components/Info/Info";
import InfoTwo from "../Components/InfoTwo/InfoTwo";

export default function App() {
  library.add(faHeart, faStar, faChevronUp);
  const [showButton, setShowButton] = useState(false);
  const banner = useSelector((state) => state.banner.flow);
  // This useEffect is used to monitor the scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Display the button only after a certain scroll position
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Add a scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {banner ? (
        <div className="App">
          <Provider store={store}>
            <div className="App-cont">
            <Nav />
            <Hero />
            <FaProd />
            <Info />
            <Trending />
            <InfoTwo/>
            </div>
            
            <Footer />
          </Provider>
        </div>
      ) : (
        <div className="App2">
          <Provider store={store}>
            <div className="App-cont2">
            <Nav />
            <Hero />
            <FaProd />
            <Info />
            <Trending />
            <InfoTwo/>
            </div>
            <Footer />
          </Provider>
        </div>
      )}
      {showButton ? (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      ) : (
        ""
      )}
    </>
  );
}
