import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { useParams,Link } from "react-router-dom";
import translate from "../../../i18n/translate";

import breadcrumbSide from "../../../assets/res/img/breadcrumb_icon.svg";

function ServiceInner({ services, currentLanguage, navigate }) {
  const { slug } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    if (slug !== undefined && services !== undefined) {
      setService(
        services.load &&
          !services.failed &&
          services.data.filter((item, index) => {
            if (item.slug === slug) {
              return {
                item,
                index,
              };
            }
          })
      );
    }
  }, [slug, services]);

  return (
    <>
      <section className="service_inner">
        <div className="container">
          <div className="row">
            <div className="main_container">
              <div className="breadcrumb">
                <Link to="/" className="main_breadcrumb_item">
                  BCP
                </Link>
                <img src={breadcrumbSide} alt="" />
                <Link
                  to="/services"
                  className="main_breadcrumb_item"
                >
                  {translate("Xidmətlər")}
                </Link>
                <img src={breadcrumbSide} alt="" />
                <span className="breadcrumb_item">
                  {service[0]?.title?.[currentLanguage]}
                </span>
              </div>

              <div className="inner_top">
                <div className="mutual_section_heading">
                  <p>{service[0]?.title?.[currentLanguage]}</p>
                </div>
                <p className="main_text">
                  {service[0]?.head_text?.[currentLanguage]}
                </p>
              </div>
              <div className="inner_middle">
                <div className="text">
                  <p>{service[0]?.mid_text?.[currentLanguage]}
                  </p>
                  
                </div>
                <div className="middle_img">
                  <img src={service[0]?.image} alt="" />
                </div>
              </div>
              <div className="inner_footer">
                <p>{service[0]?.foot_text?.[currentLanguage]}</p>
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
    services: state.servicesReducer,
  };
}

export default connect(mapStateToProps)(ServiceInner);
