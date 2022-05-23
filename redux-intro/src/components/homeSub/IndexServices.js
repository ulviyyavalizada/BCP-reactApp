import React from "react";
import { Link } from "react-router-dom";
import translate from "../../i18n/translate";
import { connect} from "react-redux";
import ServiceSvg from "../../hooks/ServiceSvg";

function IndexServices({ services, currentLanguage }) {

 return (
      <div className="index_services">
        <div className="index_service_inner">
          <div className="mutual_section_heading">
            <p>{translate("Xidmətlərimiz")}</p>
            <Link to="/services">{translate("hamısına bax")}</Link>
          </div>
          <div className="service_box">
          {services.load && !services.failed && services.data.map((service, index) => (
                  index<=5 ?
                  <div className="service_single" key={index}>
                    <p className="service_title">
                      <ServiceSvg index={index + 1} />
                      {service.title[currentLanguage]}
                    </p>
                    <p className="service_content">
                      {service.head_text[currentLanguage]}
                    </p>
                  </div>
                :null
                ))}         
          </div>
        </div>
      </div>
    );
}

function mapStateToProps(state) {
  return {
    services: state.servicesReducer,
    currentLanguage: state.languageReducer.current
  };
}

export default connect(mapStateToProps)(IndexServices);
