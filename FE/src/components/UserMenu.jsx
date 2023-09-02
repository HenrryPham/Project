import { useContext } from "react";
import { Context } from "../contexts/ContextProvider";
import { Link, NavLink } from "react-router-dom";
import "../assets/style/userMenu.css";
import CartPopup from "./CartPopup";
const UserMenu = () => {
  const {
    activeClass,
    isHomePath,
    totalCartQuantity,
    onOpenCart,
    isShowingCartPopup,
  } = useContext(Context);
  let checked;
  isHomePath.pathname === "/" ? (checked = true) : (checked = false);
  const colorHome = checked ? "white-color-text" : null;
  // console.log(isShowingCart);
  return (
    <section
      className={`header-container ${
        checked ? "header-home" : null
      } ${colorHome}`}
    >
      <div className="top-bar-container">
        <div className={`top-bar-left `}>
          <div className="store-location">
            <Link to="/contact">
              <i className="uil uil-location-point"></i>
              <span>Store Location</span>
            </Link>
          </div>
          <div className="support-email">
            <Link to="/contact">
              <i className="uil uil-envelope"></i>
              <span>support@funio.com</span>
            </Link>
          </div>
        </div>
        <div className=" top-bar-right">
          <div className="gift-cards">
            <Link to="/404">Gift Cards</Link>
          </div>
          <div className="faqs">
            <Link to="/faqs">FAQs</Link>
          </div>
        </div>
      </div>
      <div className="nav-bar-container">
        <div className="nav-bar-left">
          <div className="logo-container">
            <Link to="/">
              <img
                className="funio-logo"
                src={
                  checked
                    ? "https://wpbingosite.com/wordpress/funio/wp-content/uploads/2020/12/logo2.png"
                    : "https://wpbingosite.com/wordpress/funio/wp-content/webp-express/webp-images/uploads/2020/12/logo.png.webp"
                }
                alt=""
              />
            </Link>
          </div>
          <ul className="nav-link-item">
            <li>
              <span className="highlight">
                <NavLink to="/" className={activeClass}>
                  HOME
                </NavLink>
              </span>
            </li>
            <li>
              <span className="highlight">
                <NavLink to="/shop" className={activeClass}>
                  SHOP
                </NavLink>
              </span>
            </li>
            <li>
              <span className="highlight">
                <NavLink to="/shop/" className={activeClass}>
                  PRODUCT
                </NavLink>
              </span>
            </li>
            <li>
              <span className="highlight">
                <NavLink to="/blog" className={activeClass}>
                  BLOG
                </NavLink>
              </span>
            </li>
            <li className="direct-link">
              <span className="highlight">
                <Link>
                  PAGE <span className="dropdown-entity">&#5167;</span>
                </Link>
              </span>
              <div className="dropdown-direct-link">
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/faqs">FAQs</Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="nav-bar-right">
          <button className="search-btn">
            <i className="uil uil-search"></i>
          </button>
          <button className="user-btn">
            <i className="uil uil-user"></i>
          </button>
          <button className="wishlist-btn">
            <i className="uil uil-star"></i>
          </button>
          <button
            className="cart-header-btn open-cart-btn"
            onClick={onOpenCart}
          >
            <i className="uil uil-shopping-cart">
              {totalCartQuantity && (
                <span className="cart-quantity">{totalCartQuantity}</span>
              )}
            </i>
          </button>
          {isShowingCartPopup ? <CartPopup /> : null}
        </div>
      </div>
    </section>
  );
};

export default UserMenu;
