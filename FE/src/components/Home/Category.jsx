import { useContext } from "react";
import "../../assets/style/category.css";
import { Link } from "react-router-dom";
import { ContextValue } from "../../contexts/ContextProvider";
import Carousel from "react-multi-carousel";
import { responsiveCategory } from "../CarouselResponsive/CarouselRes";

const Category = () => {
  const { slideCategory } = useContext(ContextValue);
  return (
    <>
      <div className="category">
        <h2>Top Categories</h2>
        <Carousel
          responsive={responsiveCategory}
          infinite={true}
          itemClass="carousel-item-padding-15-px"
        >
          {slideCategory.map((item, index) => (
            <div className="slide-category-container" key={index}>
              <div className="slide">
                <div className="scale-container">
                  <div className="scale-hover">
                    <Link to="/">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="slide"
                      ></img>
                    </Link>
                  </div>
                </div>
                <h6>
                  <Link to={`/category/${item.link}`}>
                    {item.alt.toUpperCase()}
                  </Link>
                </h6>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Category;
