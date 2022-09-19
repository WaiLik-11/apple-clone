import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import css from "../styles/Navbar.module.css";
import logo from "../assets/apple-logo.svg";
import search from "../assets/search-icon.svg";
import bag from "../assets/bag-icon.svg";
import close from "../assets/close-icon.svg";
import DropDown from "./DropDown";
import { useStateContext } from "../context/StateContext";

export default function Navbar() {
  const { isActive, setIsActive, toggleSearch, setToggleSearch } =
    useStateContext();

  let menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div className={css.container}>
        <nav>
          <ul className={toggleSearch ? css.desktopNavHide : css.desktopNav}>
            <li>
              <Link href="/">
                <a href="" className={css.linkLogo}>
                  <Image
                    src={logo}
                    alt=""
                    width={15}
                    height={44}
                    style={{
                      backgroundImage: `url(${logo})`,
                    }}
                  />
                </a>
              </Link>
            </li>
            {[
              "Store",
              "Mac",
              "iPad",
              "iPhone",
              "Watch",
              "AirPods",
              "TV & Home",
              "Only on Apple",
              "Accessories",
              "Support",
            ].map((item) => (
              <li key={`link-${item}`}>
                <Link href={`/${item}`}>
                  <a href="">{item}</a>
                </Link>
              </li>
            ))}
            <li onClick={() => setToggleSearch(true)}>
              <a href="#" className={css.linkSearch}>
                <Image
                  src={search}
                  alt=""
                  width={15}
                  height={44}
                  style={{
                    backgroundImage: `url(${search})`,
                  }}
                />
              </a>
            </li>
            <li onClick={() => setIsActive(!isActive)} ref={menuRef}>
              <a href="#" className={css.linkBag}>
                <Image
                  src={bag}
                  alt=""
                  width={15}
                  height={44}
                  style={{
                    backgroundImage: `url(${bag})`,
                  }}
                />
                {isActive && <DropDown />}
              </a>
            </li>
          </ul>
        </nav>

        {/* Search Items */}
        <div className={toggleSearch ? css.searchContainer : css.searchContainerHide}>
          <div className={css.linkSearch}>
            <Image
              src={search}
              alt=""
              width={15}
              height={44}
              style={{
                backgroundImage: `url(${search})`,
              }}
            />
          </div>
          <div className={css.searchBar}>
            <form action="">
              <input type="text" placeholder="Search apple.com" />
            </form>
          </div>
          <div className={css.linkClose} onClick={() => setToggleSearch(false)}>
            <Image
              src={close}
              alt=""
              width={15}
              height={44}
              style={{
                backgroundImage: `url(${close})`,
              }}
            />
          </div>

          <div className={css.quickLinks}>
            <h2>Quick Links</h2>

            <ul>
              {[
                "Shop Apple Store Online",
                "Accessories",
                "AirPods",
                "AirTag",
              ].map((item) => (
                <li key={item}>
                  <Link href={`/${item}`}>
                    <a href="">{item}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={toggleSearch ? css.overlayShow : css.overlay}></div>
    </>
  );
}
