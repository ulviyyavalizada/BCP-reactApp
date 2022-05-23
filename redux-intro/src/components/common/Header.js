import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import headerLogo from "../../assets/res/img/header-logo.svg";
import cancelIcon from "../../assets/res/img/cancel.svg";

import Language from "./Language";
import translate from "../../i18n/translate";

import { connect, useSelector } from "react-redux";

function Header(services) {
  const currentLanguage = useSelector((state) => state.languageReducer.current);
  const [active, setActive] = useState(false);
  const hamburgerRef = useRef(null);

  const location = useLocation();
  let path = location.pathname;

  //choose the screen size
  const load = () => {
    if (
      hamburgerRef.current &&
      hamburgerRef.current.classList.contains("open")
    ) {
      if (window.innerWidth < 768) {
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
      } else {
        document.getElementsByTagName("body")[0].style.overflow = "unset";
      }
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "unset";
    }
  };

  const handleToggle = () => {
    setActive(!active);
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("load", load());
  });

  return (
    <>
      <header>
        <div className={"header-container w-100"}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"header-box"}>
                <Language />

                <div className={"header-logo"}>
                  <NavLink to="/">
                    <img src={headerLogo} alt="header-logo" />
                  </NavLink>
                </div>

                <div className={"header-menu"}>
                  {path !== "/" ? (
                    <Link to="/contact" className="start_project">
                      {translate("layihəyə başla")}
                    </Link>
                  ) : null}
                  <button
                    ref={hamburgerRef}
                    key="key"
                    className={`hamburger ${active ? "open" : ""}`}
                    onClick={() => handleToggle()}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`absolute_header ${active ? "show" : ""}`}>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"header_adding_container"}>
                <div className={"left_main_links"}>
                  <ul className="main_category">
                    <li className="mobile_overlay_services">
                      <div className="mobile_overlay_header">
                        <Language />

                        <button
                          className="close_mobile_navbar"
                          onClick={() => handleToggle()}
                        >
                          <img src={cancelIcon} alt="" />
                        </button>
                      </div>

                      <NavLink to="/services" onClick={() => handleToggle()}>
                        {translate("Xidmətlər")}
                      </NavLink>
                      <ul className="service_category">
                        {services.services.load &&
                          !services.services.failed &&
                          services.services.data.map((service, index) => {
                            let serviceSlug = service.slug;
                            return (
                              <li key={index}>
                                <Link
                                  to={"/services/" + serviceSlug}
                                  onClick={() => handleToggle()}
                                >
                                  {service.title[currentLanguage]}
                                </Link>
                              </li>
                            );
                          })}
                      </ul>
                    </li>
                    <li>
                      <NavLink to="/portfolio/" onClick={() => handleToggle()}>
                        {translate("Portfolio")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => handleToggle()} to="/about">
                        {translate("Haqqımızda")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => handleToggle()} to="/projects">
                        {translate("Layihələr")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink onClick={() => handleToggle()} to="/contact">
                        {translate("Əlaqə")}
                      </NavLink>
                    </li>
                  </ul>

                  <SocialLinks />
                </div>
                <div className={"right_main_links"}>
                  <ul className={"part_links"}>
                    {services.services.load &&
                      !services.services.failed &&
                      services.services.data.map((service, index) => {
                        let serviceSlug = service.slug;
                        return (
                          <li key={index}>
                            <Link
                              to={"/services/" + serviceSlug}
                              onClick={() => handleToggle()}
                            >
                              {service.title[currentLanguage]}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function mapStateToProps(state) {
  return {
    services: state.servicesReducer,
  };
}

export default connect(mapStateToProps)(Header);
