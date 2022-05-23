import React, { Component } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Link } from "react-router-dom";
import translate from "../../i18n/translate";
import { Mousewheel, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

import arrowLink from "../../assets/res/img/arrow_link.svg";

import { connect } from "react-redux";

function IndexProjects({ projects, currentLanguage }) {

  return (
    <div className="index_projects">
      <div className="index_project_main_container " id="section-wipes">
        <div className="mutual_section_heading">
          <p>{translate("Layihələrimiz")}</p>
          <Link to="/projects">{translate("hamısına bax")}</Link>
        </div>
        <div className="our_projects">
          <Swiper
            grabCursor={true}
            spaceBetween={30}
            slidesPerGroup={1}
            slidesPerView={1}
            breakpoints={{
              768: {
                direction: "vertical",
                mousewheel: true,
              },
            }}
            autoplay={{
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
            }}
            speed={1000}
            modules={[Mousewheel, Autoplay]}
          >
            {!projects.failed &&
              projects.load &&
              projects.data.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="scroll_item">
                    <div className="project_content">
                      <div className="title_row_project">
                        <span></span>
                        <p>{project.title?.[currentLanguage]}</p>
                        <span></span>
                      </div>
                      <p className="project_desc">
                        {project.content?.[currentLanguage]}
                      </p>
                      <a target={'_blank'} href={project.link} className="port_link">
                        <span>{translate('keçid et')}</span>
                        <img src={arrowLink} alt="" />
                      </a>
                    </div>
                    <a target={'_blank'} href={project.link}>
                      <div className="project_img">
                        <img src={project.image} alt="" className="img_absolute" />
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    projects: state.projectsReducer,
    currentLanguage: state.languageReducer.current,
  };
}

export default connect(mapStateToProps)(IndexProjects);
