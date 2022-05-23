import React, { useEffect } from "react";
import moreInfoIcon from "../../assets/res/img/moreInfo.svg";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import translate from "../../i18n/translate";

import portfolioItemIcon from "../../assets/res/img/portfolioItemIcon.svg";

const PortfolioCard = ({ portfolio, currentLanguage }) => {

  let fullYear = new Date(portfolio.starter_date).getFullYear();  
  return (
    <div className="portfolio_item">
      <div className="short_info">
        <span className="time">{fullYear}</span>
        <img src={portfolioItemIcon} alt="" />
        <Link to={`/portfolios/${portfolio.slug}`}>
          <span className="category">{portfolio.service.title[currentLanguage]}</span>
        </Link>
      </div>
      <div className="portfolio_img">
        <Link to={`/portfolio/inner/${portfolio.slug}`}>
          <img src={portfolio.cover_image} alt="" />
        </Link>
      </div>

      <div className="portfolio_info">
        <span className="title">{portfolio.title[currentLanguage]}</span>
        <p className="text">
          {portfolio.sm_text[currentLanguage]}
        </p>
        <Link to={`/portfolio/inner/${portfolio.slug}`} className="more_info">
          <div>
            <span>{translate('Proyekt haqqında daha ətraflı')}</span>
            <img src={moreInfoIcon} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentLanguage: state.languageReducer.current,
  };
}

export default connect(mapStateToProps)(PortfolioCard);
