import React from "react";
import { Link} from "react-router-dom";
import Breadcrumb from "../../components/common/Breadcrumbs";
import IndexForm from "../../components/homeSub/IndexForm";
import translate from "../../i18n/translate";

import { connect } from "react-redux";
import ServiceSvg from "../../hooks/ServiceSvg";

function Services({ currentLanguage, services}) {
  return (
    <>
      <section className="services">
        <div className="container">
          <div className="row">
            <Breadcrumb currentPage={translate('Xidmətlər')}/>
            <div className="index_service_inner">
              <div className="mutual_section_heading">
                <p>{translate('Xidmətlərimiz')}</p>
              </div>
              <div className="service_box">
                {services.load &&
                  !services.failed &&
                  services.data.map((service, index) => (
                    <Link key={index} to={`/services/${service.slug}`}>
                      <div className="service_single">
                        
                        <p className="service_title">
                          <ServiceSvg index={index + 1} />
                          {service.title[currentLanguage]}
                        </p>
                        <p className="service_content">
                          {service.head_text[currentLanguage]}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
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

export default connect(mapStateToProps)(Services);
