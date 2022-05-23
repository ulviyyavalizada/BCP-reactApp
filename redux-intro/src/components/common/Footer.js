import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import translate from "../../i18n/translate";

import footerLogo from "../../assets/res/img/footer_logo.svg";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className={"container"}>
            <div className={"row"}>
              <div className={"footer_container w-100"}>
                <div className={"footer_box"}>
                  <NavLink to="/" className="footer_logo">
                    <img src={footerLogo} alt="" />
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink to="/portfolio/">
                        {translate("Portfolio")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">{translate("Haqqımızda")}</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">{translate("Əlaqə")}</NavLink>
                    </li>
                    <li>
                      <NavLink to="/services">{translate("Xidmətlər")}</NavLink>
                    </li>
                    <li>
                      <NavLink to="/projects">{translate("Layihələr")}</NavLink>
                    </li>
                  </ul>
                </div>
                <div className={"footer_copyright"}>
                  <p>© 2021. {translate("Bütün hüquqlar qorunur.")}</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
