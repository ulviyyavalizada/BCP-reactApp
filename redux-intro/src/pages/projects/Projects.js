import React from "react";
import Breadcrumb from "../../components/common/Breadcrumbs";
import translate from "../../i18n/translate";
import projectLeftArrow from "../../assets/res/img/projectLeftArrow.svg";

import { connect } from "react-redux";

function Projects({ projects, currentLanguage }) {

  return (
    <>
      <section className="projects">
        <div className="container">
          <div className="row">
            <div className="main_container">
              <Breadcrumb currentPage={translate('Layihələrimiz')}/>
              <div className="mutual_section_heading">
                <p>{translate('Layihələrimiz')}</p>
              </div>
              <div className="our_projects">
                {projects.load &&
                  !projects.failed &&
                  projects.data.map((project, index) => (
                    <div className="project_item" key={index}>
                      <div className="project_info">
                        <div className="project_name">
                          {project.title[currentLanguage]}
                        </div>
                        <div className="project_desc">
                          <p>
                            {project.content[currentLanguage]}
                          </p>
                          <a target={'_blank'} href={project.link}>
                            <span>{translate('keçid et')}</span>
                            <img src={projectLeftArrow} alt="" />
                          </a>
                        </div>
                      </div>

                      <div className="project_img">
                        <img src={project.image} alt="" />
                      </div>

                    </div>
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
    projects: state.projectsReducer,
    currentLanguage: state.languageReducer.current,
  };
}

export default connect(mapStateToProps)(Projects);
