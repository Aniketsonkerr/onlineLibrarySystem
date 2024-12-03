import { books } from "../utils/homeData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";
function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <>
      <div className="heading">
        <h1>welcome</h1>
        <h2>to</h2>
        <h1>Online Library Management App</h1>
      </div>
      <div className="topRated">
        <h1>Top Rated</h1>
        <div className="homeBookBox">
          <Slider {...settings}>
            {books.slice(0, 5).map((data) => (
              <div key={data.id} className="homeBook">
                <img
                  src={data.url}
                  style={{ width: "100%", height: "300px" }}
                ></img>
                <>
                  <h1>{data.Name}</h1>
                  <p>{data.description}</p>
                </>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="latestArrivals">
        <h1>Latest Arrivals</h1>
        <div className="homeBookBox">
          <Slider {...settings}>
            {books.slice(5, 10).map((data) => (
              <div key={data.id} className="homeBook">
                <img
                  src={data.url}
                  style={{ width: "100%", height: "300px" }}
                ></img>
                <>
                  <h1>{data.Name}</h1>
                  <p>{data.description}</p>
                </>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default HomePage;
