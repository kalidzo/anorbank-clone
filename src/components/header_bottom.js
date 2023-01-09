import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AllPartners from "../pages/all_partners";
import "../App.css";
import Cards from "../pages/cards";
import Deposit from "../pages/deposit";
import Transfers from "../pages/transfers";
import Rates from "../pages/rates";
import ExchangeRates from "../pages/exchange_rates";
import Credits from "../pages/credits";
import MobileApp from "../pages/mobile-app";

export default function HeaderBottom({ fontSize }) {
  const [appHover, setAppHover] = useState("a30041");
  const routes = [
    { path: "/all-partners", element: <AllPartners />, text: "hamkorlar" },
    { path: "/cards", element: <Cards />, text: "kartalar" },
    { path: "/deposit", element: <Deposit />, text: "omonatlar" },
    { path: "/credits", element: <Credits />, text: "kreditlar" },
    {
      path: "/transfers",
      element: <Transfers />,
      text: "rossiyadan o'tkazmalar",
    },
    {
      path: "/about/documents/#rates-uz",
      element: <Rates />,
      text: "tariflar",
    },
    {
      path: "/about/documents/exchange-rates",
      element: <ExchangeRates />,
      text: "valyutalar kursi",
    },
  ];

  return (
    <div className="header flex-row a-center j-between">
      <div className="flex-row a-center">
        <div className="search-button">
          <img
            className="search-button"
            alt="search"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACYklEQVR4nO1XzWoUQRBuNurFKF4UfIVVEmGmv9rZKmlz8ChEcfIGIlnUqE8h3nwG/95D8QFMBBNUclWvyUFPSs326DDssj/R7ZnQHxTssD1FfVM/X7UxEREREREhAfA7gvyqGqy8NW0D1UiUZtoGqgVef9bsjCMbyjCqYtpIhKy8Ob6lhVFffBTjiIiIdgNR2RsGaqEgIip7G4Co7BERjUO32z3Vs7xBll8RZJfAh0PT3/JS/9MzjVZ2SvkWQb5M1ArIZ2v55vSOF3ex6pDlp38/Fr8nKw8A6a6sXD+tZi1fIuItWN6uEHqi705NZNzzqIzNoMDfVlfducKvJwHwD4DvTgiuQ1Y29WyFTMAVxcqdSjkVJHqpuIlBeRDxtQqZdROytLRpy57wmZgJlMrAZ/dTkiQngyl7MZ18T0xV6zXkeb5EkB2fldsmFGD5tQbRs3J/bh/gh57ICxMKBN7zQXTn9WF1mg2rZdeEAiwfaBDOueV5ffT7/TO+PA9Mm4kAODuRyP9W9n9RWmmaXS4nV7Dxq7tT4ZN4a24fVh778f184coO8LPa+N0+wvj9MJx8vLFwZYeVr865EyqIugB6fdqclQjA9/yH2Fd/QZdG3WLLFUXXjmnfA/prBPlZZCPlG424s+vi94dMKgMtmXFn8zxf8pkoSAD8PcuyC6Yh6JRkvO2oYqvYOeeW1XQ6AfKo7ImSRHm+SWQ0M+s6Rif3GO9rOWnw5a7VODK6xeoCqLsTIB+HosmHSlBHLCB5tbEbTWZWyBU5X94clXySXL1o2go5TmSyapmlMggdz5FQkPHi+hsGkDZSV9zHOgAAAABJRU5ErkJggg=="
          />
        </div>
        {routes.map(({ path, text }) => {
          return (
            <div className="capitalize">
              <Link
                to={path}
                className="text-default"
                style={{ fontSize: fontSize + 4 }}
              >
                <p className="route">{text}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <Link
        className="app a-center flex-row text-default"
        style={{ color: appHover, fontSize: fontSize }}
        onMouseEnter={() => {
          setAppHover("37363c");
        }}
        onMouseLeave={() => {
          setAppHover("a30041");
        }}
      >
        <img
          src={`https://img.icons8.com/ios-glyphs/22/${appHover}/iphone.png`}
          alt="app"
        />
        <p style={{ fontSize: fontSize + 4, color: `#${appHover}` }}>
          Mobil ilova
        </p>
      </Link>

      <Routes>
        {routes.map(({ path, element }) => {
          return <Route path={path} element={element}></Route>;
        })}
        <Route path="/mobile-app" element={<MobileApp />}></Route>
      </Routes>
    </div>
  );
}
