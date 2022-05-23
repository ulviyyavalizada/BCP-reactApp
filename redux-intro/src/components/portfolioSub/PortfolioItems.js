import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PortfolioCard from "./PortfolioCard";
import { connect } from "react-redux";
import translate from "../../i18n/translate";




function PortfolioItem({ currentLanguage, services, portfolios }) {
  let params = useParams();

  let slug = params.slug;

  let [portfolio, setPortfolio] = useState([]);
  let [service, setService] = useState(null);

  useEffect(() => {
    if (slug !== undefined && services !== undefined) {
      setPortfolio(
        services.load &&
          !services.failed &&
          portfolios?.data?.filter((p) => {
            setService(p.service);
            return p.service.slug === slug;
          })
      );
    }
  }, [slug, service, portfolios]);

  const [number, setNumber] = useState(4);

  const slice = portfolio.slice(0 ,number)

  const moreItems = (e)=>{
    setNumber(number+5);
  }

  return (
    
    <div>
      <p className="portfolio_inner_title">
        {service?.title?.[currentLanguage]}
        <sup>{portfolio.length}</sup>
      </p>
      <div className="our_portfolios">
        {typeof portfolio === 'object' &&
          portfolios.load && !portfolios.failed && slice.map((portfolio, index) => {
            return(
            <PortfolioCard key={index} portfolio={portfolio}/>
          )})
        }
      </div>
      <div className='more_btn'>
          <button onClick={(e)=>moreItems(e)}>
              {translate('daha çox bax')}
          </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentLanguage: state.languageReducer.current,
    services: state.servicesReducer,
    portfolios: state.portfoliosReducer,
  };
}

export default connect(mapStateToProps)(PortfolioItem);
