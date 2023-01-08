import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import About from "../pages/about";
import JismoniyShaxslar from "../pages/jismoniy_shaxslar";
import Business from "../pages/business";
import Atms from "../pages/atms";
import { useState } from "react";
import "../App.css";
export default function Header({
  fontSize,
  setFontSize,
  specialStyles,
  setSpecialStyles,
  fontSizesRange,
  languages,
  language,
  setLanguage
}) {
  const [callHover, setCallHover] = useState(
    "https://img.icons8.com/material/24/37363c/phone--v1.png"
  );
  const [dropDownHover, setdropDownHover] = useState(false);
  const [activeRoutePadding, setActiveRoutePadding] = useState(20);
  const buttonSvg = {
    on: {
      fill: "#a30041",
      opacity: 1,
    },
    off: {
      fill: "#37363c",
      opacity: 0.12,
    },
  };
  const [reverseButtonHover, setReverseButtonHover] = useState(false);
  const [specialMenuOn, setSpecialMenuOn] = useState(false);

  const reverse = (value, setValue) => {
    setValue(!value);
  };
  return (
    <BrowserRouter>
      <div
        style={specialStyles.nightTheme ? { filter: "grayscale(100%)" } : null}
      >
        <div className="header" style={{ fontSize: fontSize }}>
          <div className="header-top">
            <ul className="routes">
              <li className="route">
                <Link to="/">
                  <img src="logo.svg" alt="Anorbank" className="logo" />
                </Link>
              </li>
              <li className="route route-text">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "is-active" : "inactive"
                  }
                  style={{ paddingTop: activeRoutePadding }}
                >
                  jismoniy shaxslar
                </NavLink>
              </li>
              <li className="route route-text">
                <NavLink
                  to="/business"
                  className={({ isActive }) =>
                    isActive ? "is-active" : "inactive"
                  }
                  style={{ paddingTop: activeRoutePadding }}
                >
                  biznes
                </NavLink>
              </li>
              <li className="route route-text">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "is-active" : "inactive"
                  }
                  style={{ paddingTop: activeRoutePadding }}
                >
                  bank haqida
                </NavLink>
              </li>
            </ul>
            <div>
              <ul className="header-links">
                <li className="header-link">
                  <NavLink to="/atms" className="inactive ">
                    bankomatlar
                  </NavLink>
                </li>
                <li className="header-link">
                  <NavLink to="/atms/#sales" className="inactive ">
                    savdo nuqtalari
                  </NavLink>
                </li>
                <li>
                  <img
                    src="https://img.icons8.com/ios/24/37363c/glasses.png"
                    alt="eyeglasses"
                    onClick={() => setSpecialMenuOn(true)}
                    onMouseEnter={(event) => {
                      event.target.src =
                        "https://img.icons8.com/ios/24/a30041/glasses.png";
                    }}
                    onMouseLeave={(event) => {
                      event.target.src =
                        "https://img.icons8.com/ios/24/37363c/glasses.png";
                    }}
                    className="header-links-icon"
                  />
                  {specialMenuOn ? (
                    <div
                      className="special-menu"
                      onMouseLeave={() => setSpecialMenuOn(false)}
                    >
                      <div className="special-menu-container">
                        <p style={{ marginBottom: "10px" }}>Turi</p>
                        <div
                          className="flex-row special-menu-option"
                          onClick={() =>
                            specialStyles.nightTheme === false &&
                            specialStyles.simpleVersion === true
                              ? null
                              : setSpecialStyles({
                                  simpleVersion: !specialStyles.simpleVersion,
                                  nightTheme: !specialStyles.nightTheme,
                                  soundOn: specialStyles.soundOn,
                                })
                          }
                        >
                          <svg
                            className="mark"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="12"
                            viewBox="0 0 16 12"
                            style={
                              specialStyles.simpleVersion
                                ? buttonSvg.on
                                : buttonSvg.off
                            }
                          >
                            <path
                              id="check"
                              d="M5.435,76.863l-5.2-5.23a.808.808,0,0,1,0-1.138l1.131-1.138a.8.8,0,0,1,1.131,0L6,72.88l7.5-7.546a.8.8,0,0,1,1.131,0l1.131,1.138a.808.808,0,0,1,0,1.138l-9.2,9.253a.8.8,0,0,1-1.131,0Z"
                              transform="translate(0 -65.098)"
                            ></path>
                          </svg>
                          <p
                            className={
                              specialStyles.simpleVersion ? null : "text-hover"
                            }
                            style={{ cursor: "default", userSelect: "none" }}
                          >
                            oddiy versiya
                          </p>
                        </div>
                        <div
                          className="flex-row special-menu-option"
                          onClick={() =>
                            specialStyles.nightTheme === true &&
                            specialStyles.simpleVersion === false
                              ? null
                              : setSpecialStyles({
                                  simpleVersion: !specialStyles.simpleVersion,
                                  nightTheme: !specialStyles.nightTheme,
                                  soundOn: specialStyles.soundOn,
                                })
                          }
                        >
                          <svg
                            className="mark"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="12"
                            viewBox="0 0 16 12"
                            style={
                              specialStyles.nightTheme
                                ? buttonSvg.on
                                : buttonSvg.off
                            }
                          >
                            <path
                              id="check"
                              d="M5.435,76.863l-5.2-5.23a.808.808,0,0,1,0-1.138l1.131-1.138a.8.8,0,0,1,1.131,0L6,72.88l7.5-7.546a.8.8,0,0,1,1.131,0l1.131,1.138a.808.808,0,0,1,0,1.138l-9.2,9.253a.8.8,0,0,1-1.131,0Z"
                              transform="translate(0 -65.098)"
                            ></path>
                          </svg>
                          <p
                            className={
                              specialStyles.nightTheme ? null : "text-hover"
                            }
                            style={{ cursor: "default", userSelect: "none" }}
                          >
                            qora va oq versiyasi
                          </p>
                        </div>
                        <div
                          className="flex-row special-menu-option"
                          onClick={() =>
                            setSpecialStyles({
                              simpleVersion: specialStyles.simpleVersion,
                              nightTheme: specialStyles.nightTheme,
                              soundOn: !specialStyles.soundOn,
                            })
                          }
                        >
                          <svg
                            className="mark"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="12"
                            viewBox="0 0 16 12"
                            style={
                              specialStyles.soundOn
                                ? buttonSvg.on
                                : buttonSvg.off
                            }
                          >
                            <path
                              id="check"
                              d="M5.435,76.863l-5.2-5.23a.808.808,0,0,1,0-1.138l1.131-1.138a.8.8,0,0,1,1.131,0L6,72.88l7.5-7.546a.8.8,0,0,1,1.131,0l1.131,1.138a.808.808,0,0,1,0,1.138l-9.2,9.253a.8.8,0,0,1-1.131,0Z"
                              transform="translate(0 -65.098)"
                            ></path>
                          </svg>
                          <p
                            className={
                              specialStyles.soundOn ? null : "text-hover"
                            }
                            style={{ cursor: "default", userSelect: "none" }}
                          >
                            ovozni yoqish
                          </p>
                        </div>
                        <p className="option-shrift">shrift hajmi</p>
                        <div className="flex-row change-shrift-section">
                          <div className="buttons-shrift">
                            <button
                              className="button-shrift"
                              style={
                                fontSize < fontSizesRange.maxFontSize
                                  ? null
                                  : { opacity: 0.5 }
                              }
                              onClick={(event) => {
                                if (fontSize < fontSizesRange.maxFontSize) {
                                  setFontSize(fontSize + 1);
                                }
                              }}
                              onMouseEnter={(event) => {
                                if (fontSize < fontSizesRange.maxFontSize) {
                                  event.target.style.color = "#a30041";
                                }
                              }}
                              onMouseLeave={(event) => {
                                // if (fontSize > fontSizesRange.minFontSize) {
                                event.target.style.color = "#37363c";
                                // }
                              }}
                            >
                              A+
                            </button>
                            <button
                              className="button-shrift"
                              style={
                                fontSize > fontSizesRange.minFontSize
                                  ? null
                                  : { opacity: 0.5 }
                              }
                              onClick={(event) => {
                                if (fontSize > fontSizesRange.minFontSize) {
                                  setFontSize(fontSize - 1);
                                }
                              }}
                              onMouseEnter={(event) => {
                                if (fontSize > fontSizesRange.minFontSize) {
                                  event.target.style.color = "#a30041";
                                }
                              }}
                              onMouseLeave={(event) => {
                                // if (fontSize > fontSizesRange.minFontSize) {
                                event.target.style.color = "#37363c";
                                // }
                              }}
                            >
                              A-
                            </button>
                          </div>
                          <div className="reverse-shrift">
                            <button
                              className="button-shrift"
                              onClick={() => {
                                setFontSize(fontSizesRange.defaultFontSize);
                                setActiveRoutePadding(20);
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="23.996"
                                height="24.002"
                                viewBox="0 0 23.996 24.002"
                                onMouseEnter={() => {
                                  setReverseButtonHover(true);
                                }}
                                onMouseLeave={() => {
                                  setReverseButtonHover(false);
                                }}
                                style={
                                  fontSize !== fontSizesRange.defaultFontSize
                                    ? {
                                        opacity: 1,
                                        fill: reverseButtonHover
                                          ? buttonSvg.on.fill
                                          : buttonSvg.off.fill,
                                      }
                                    : buttonSvg.off
                                }
                              >
                                <path
                                  id="Union_8"
                                  data-name="Union 8"
                                  d="M18766.8,12407.314V12410a.6.6,0,1,1-1.2,0v-4.8h4.8a.6.6,0,1,1,0,1.2h-2.748a10.8,10.8,0,0,0,20.148-5.4.6.6,0,0,1,.59-.608.591.591,0,0,1,.434.175.577.577,0,0,1,.174.434,11.993,11.993,0,0,1-22.2,6.313Zm13.863-2.314-1.074-2.452h-5.207l-1.08,2.452h-1.441l4.436-9.8h1.387l4.451,9.8Zm-5.795-3.57h4.229l-2.111-4.8ZM18765,12401a11.994,11.994,0,0,1,22.2-6.314V12392a.607.607,0,0,1,.594-.608.617.617,0,0,1,.434.175.6.6,0,0,1,.174.434v4.8h-4.8a.6.6,0,1,1,0-1.2h2.748a10.8,10.8,0,0,0-20.148,5.4.6.6,0,1,1-1.2,0Z"
                                  transform="translate(-18765.002 -12389)"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </li>
                <li>
                  <a
                    className="call"
                    href="tel:1240"
                    onMouseEnter={() => {
                      setCallHover(
                        "https://img.icons8.com/material/24/a30041/phone--v1.png"
                      );
                    }}
                    onMouseLeave={() => {
                      setCallHover(
                        "https://img.icons8.com/material/24/37363c/phone--v1.png"
                      );
                    }}
                  >
                    <img
                      src={callHover}
                      alt="call"
                      className="header-links-icon"
                    />
                    {/* <a href="tel:1240">1240</a> */}
                    1240
                  </a>
                </li>
                <li>
                  <div
                    className="dropDown"
                    onMouseEnter={() =>
                      reverse(dropDownHover, setdropDownHover)
                    }
                    onMouseLeave={() =>
                      reverse(dropDownHover, setdropDownHover)
                    }
                  >
                    <div
                      className="dropDown-language default-language"
                      style={{ paddingTop: "0" }}
                    >
                      <img className="globe-icon" src="globe.png" alt="globe" />
                      <p>{language}</p>
                      <img
                        className="expand-icon"
                        src="expand.png"
                        alt="expand"
                      />
                    </div>
                    {dropDownHover ? (
                      <>
                        <div
                          className="dropDown-language"
                          onClick={() => setLanguage(languages[0])}
                        >
                          <p>{languages[0]}</p>
                        </div>
                        <div
                          className="dropDown-language"
                          onClick={() => setLanguage(languages[1])}
                        >
                          <p>{languages[1]}</p>
                        </div>
                        
                        <div
                          className="dropDown-language"
                          onClick={() => setLanguage(languages[2])}
                        >
                          <p>{languages[2]}</p>
                        </div>
                      </>
                    ) : null}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>

        <Routes>
          <Route path="/" element={<JismoniyShaxslar />}></Route>
          <Route path="/business" element={<Business />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/atms" element={<Atms />}></Route>
          <Route path="/atms/#sales" element={<Atms />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
