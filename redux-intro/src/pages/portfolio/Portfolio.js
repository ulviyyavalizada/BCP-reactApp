//React component import
import React, {useState, useRef} from "react";
import { NavLink, Route, Routes, useHistory } from "react-router-dom";
import Breadcrumb from "../../components/common/Breadcrumbs";

// File import
import All from "../../components/portfolioSub/All";
import PortfolioItems from "../../components/portfolioSub/PortfolioItems";
import IndexForm from "../../components/homeSub/IndexForm";
import translate from "../../i18n/translate";

import { connect } from "react-redux";

//Image import
import cancelIcon from "../../assets/res/img/cancel.svg";
import filterIcon from "../../assets/res/img/filter.svg";

export function Portfolio({ currentLanguage, services }) {
  const portfolioRef = useRef(null);
  const [active, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <>
      <section className="portfolio">
        <div className="container">
          <div className="row">
            <Breadcrumb currentPage={translate("Portfolio")} />

            <div className="mutual_section_heading">
              <p>{translate("Portfoliomuz")}</p>
              <div className="mobile_filterBtn">
                <button onClick={() => handleToggle()}>
                  <img src={filterIcon} alt="" />
                  <span>{translate("filtr")}</span>
                </button>
              </div>
              
            </div>
            
            <div className={`about_main_navbar ${active ? "open" : ""}`}
                      onClick={() => handleToggle()} ref={portfolioRef}>
              <div className="close_nav">
                <button>
                  <img src={cancelIcon} alt="" />
                </button>
              </div>

              <ul>
                <li>
                  <NavLink to="/portfolio/">{translate("Hamısı")}</NavLink>
                </li>

                {services.load &&
                  !services.failed &&
                  services.data.map((service, index) => {
                    return (
                      <li key={index}>
                        <NavLink to={`/portfolio/${service.slug}`}>
                          {service.title[currentLanguage]}
                        </NavLink>
                      </li>
                    );
                  })}
              </ul>
            </div>

            <div className="about_navbar_result">
              <Routes>
                <Route path={``} element={<All />} />
                <Route path="/:slug" element={<PortfolioItems />} />
              </Routes>
            </div>

            <IndexForm />
          </div>
        </div>
      </section>
    </>
  );
}

function mapStateToProps(state) {
  return {
    services: state.servicesReducer,
    currentLanguage: state.languageReducer.current,
  };
}

export default connect(mapStateToProps)(Portfolio);
