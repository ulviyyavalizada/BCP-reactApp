import React, {useEffect} from "react";
import { Link } from "react-router-dom";

import brainImg from "../../assets/res/img/brain.png";
import landingBottomImg from "../../assets/res/img/l_img.svg";
import SocialLinks from "../common/SocialLinks";
import translate from '../../i18n/translate'

import { connect } from "react-redux";

function IndexLanding({home, currentLanguage}) {

  return (
    <div className="index_landing">
      <div className="landing-main-container">
        <div className="landing-left-container">
          <div className="landing_title_block">
              <p className="landing_title">
                {!home.failed && home.load && home.data.slogan[currentLanguage]}
              </p>
            <Link to="/contact" className="start_project">
              {translate('layihəyə başla')}
            </Link>
          </div>

          <div className="landing_bottom_content">
            <img src={landingBottomImg} alt="" />
            <p>
              {!home.failed && home.load && home.data.sm_text[currentLanguage]}
            </p>
          </div>
        </div>
        <div className="landing-right-container">
          <div className="brain_img">
            <img src={brainImg} alt=""/>
          </div>
          <div className="dot_brain"></div>
          <div className="dot_brain"></div>
          <div className="dot_brain"></div>
          <div className="dot_brain"></div>
          <div className="dot_brain"></div>
          <div className="dot_brain"></div>
          <div className="dot_brain"></div>
          <div className="landing_bottom_content">
            <img src={landingBottomImg} alt="" />
            <p>
              {!home.failed && home.load && home.data.sm_text[currentLanguage]}
            </p>
          </div>
        </div>
        <SocialLinks />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
      home: state.homeReducer,
      currentLanguage: state.languageReducer.current
  };
}

export default connect(mapStateToProps)(IndexLanding);