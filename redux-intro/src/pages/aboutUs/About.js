import React, {useEffect} from "react";
import Breadcrumb from "../../components/common/Breadcrumbs";

import aboutImg from "../../assets/res/img/about_inner.png";
import footerReel from "../../assets/res/img/aboutFooterReel.png";
import footerIcon from "../../assets/res/img/about_footer_icon.svg";
import { connect } from "react-redux";
import translate from "../../i18n/translate";

import * as aboutActions from "../../redux/actions/aboutActions";
import { useDispatch } from 'react-redux'

function About({ about, currentLanguage }) {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(aboutActions.getAbout());
  }, [])

  return (
    <>
      <section className="about">
        <div className="container">
          <div className="row">
            <Breadcrumb currentPage={translate('Haqqımızda')}/>
            <div className="inner_top">
              <div className="mutual_section_heading">
                <p>{translate("Haqqımızda")}</p>
              </div>
              <p className="main_text">
                {!about.failed &&
                  about.load &&
                  about.data.sm_text[currentLanguage]}
              </p>
            </div>

            <div className="inner_middle">
              <div className="middle_reel">
                {!about.failed &&
                  about.load && (<img src={about.data.cover} alt="" />)}
        
              </div>
              <div className="middle_text">
                <div className="left_box">
                  <p>BCP Komandası</p>
                </div>
                <div className="right_box">
                  <p>
                    {!about.failed &&
                      about.load &&
                      about.data.long_text[currentLanguage]}
                  </p>
                </div>
              </div>
            </div>

            <div className="inner_footer">
              <div className="footer_reel">
                {!about.failed &&
                    about.load && <video width="750" height="500" controls >
                    <source type="video/mp4" src={
                      about.data.show_reel_video}/>
                  </video>}
                
            
              </div>
              <div className="footer_text">
                <img src={footerIcon} alt="" />
                <div>
                  <span>
                    {!about.failed &&
                        about.load &&
                        about.data.show_reel_text[currentLanguage].split(" ")[0]}
                  </span>

                  <span>
                    {
                      !about.failed &&
                      about.load &&
                      about.data.show_reel_text[currentLanguage].split(" ")[1]
                    }
                  </span>

                  <span>
                    {!about.failed &&
                        about.load &&
                        (about.data.show_reel_text[currentLanguage].split(" ")[2] + ' ' + about.data.show_reel_text[currentLanguage].split(" ")[3])
                        }
                  </span>
                </div>
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
    about: state.aboutReducer,
    currentLanguage: state.languageReducer.current,
  };
}

export default connect(mapStateToProps)(About);
