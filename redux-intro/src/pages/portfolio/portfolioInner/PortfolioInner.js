import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { useParams, Link } from "react-router-dom";
import translate from "../../../i18n/translate";

import breadcrumbSide from "../../../assets/res/img/breadcrumb_icon.svg";
import portfolioItemIcon from "../../../assets/res/img/portfolioItemIcon.svg";

import cn from "classnames";

function PortfolioInner({ portfolios, currentLanguage, navigate }) {
  let params = useParams();
  let slug = params.slug;

  const [portfolio, setPortfolio] = useState({});

  useEffect(() => {
    if (slug !== undefined && portfolios !== undefined) {
      setPortfolio(
        portfolios.load &&
          !portfolios.failed &&
          portfolios.data.filter((portfolio, index) => {
            if (portfolio.slug === slug) {
              return {
                portfolio,
                index,
              };
            }
          })
      );
    }
  }, [slug, portfolios]);

  return (
    <>
      <section className="portfolio_inner">
        <div className="container">
          <div className="row">
            <div className="breadcrumb">
              <Link to="/" className="main_breadcrumb_item">
                BCP
              </Link>
              <img src={breadcrumbSide} alt="" />
              <Link
                to='/portfolio'
                className="main_breadcrumb_item"
              >
                {translate("Portfolio")}
              </Link>
              <img src={breadcrumbSide} alt="" />
              <span className="breadcrumb_item">
                {portfolio[0]?.title?.[currentLanguage]}
              </span>
            </div>

            <div className="mutual_section_heading">
              <p>{portfolio[0]?.title?.[currentLanguage]}</p>
            </div>

            <div className="main_descr">
              <div>
                <img src={portfolioItemIcon} alt=""></img>
                <p>{portfolio[0]?.sm_text?.[currentLanguage]}</p>
              </div>
            </div>
            <div className="total_images">
              <div className="row">
                {portfolio[0]?.images.map((map, index) => (
                  <>
                    {(index === 0 || index % 4 === 0) && (
                      <div className="one_image col-12">
                        <img src={map.url} alt="" />
                      </div>
                    )}

                    {(index === 1 || index % 4 === 1 || index % 4 === 2) && (
                      <div className={cn("col-12 col-md-6 two_images", (index % 4 === 1) ? "left" : "right")}>
                        {(index === 1 ||
                          index % 4 === 1 ||
                          index % 4 === 2) && (
                          <img src={map.url} alt="" />
                        )}
                      </div>
                    )}

                    {index === 4 && (
                      <div className="col-12 text_card">
                        <p>{portfolio[0]?.long_text?.[currentLanguage]}</p>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function mapStateToProps(state) {
  return {
    currentLanguage: state.languageReducer.current,
    portfolios: state.portfoliosReducer,
  };
}

export default connect(mapStateToProps)(PortfolioInner);
