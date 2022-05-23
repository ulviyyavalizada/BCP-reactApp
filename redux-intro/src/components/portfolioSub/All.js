
import React, { useState } from 'react'
import { Link} from "react-router-dom";
import { connect} from 'react-redux';
import translate from "../../i18n/translate";

import PortfolioCard from "./PortfolioCard"




function All({portfolios}){
    const [number, setNumber] = useState(4);

    const slice = portfolios.data.slice(0 ,number)

    const moreItems = (e)=>{
        setNumber(number+5);
    }

    
    return (
        <div>
            <p className='portfolio_inner_title'>{translate('Bütün işlərimiz')} <sup>{portfolios.data.length}</sup></p>
            <div className='our_portfolios'>
                {typeof portfolios === 'object' &&
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
    )
}

function mapStateToProps(state) {
    return {
        portfolios: state.portfoliosReducer,
    };
}

export default connect(mapStateToProps)(All);