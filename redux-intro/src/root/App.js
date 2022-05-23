import Footer from "./../components/common/Footer";
import Header from "./../components/common/Header";
import Home from "./../pages/home/Home";
import About from "./../pages/aboutUs/About";
import Contact from "./../pages/contactUs/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./../pages/portfolio/index";
import Services from "./../pages/service/index";
import Projects from "./../pages/projects/Projects";
import { connect } from "react-redux";
import React, {useEffect} from "react";

import { useDispatch } from 'react-redux'

import * as contactsActions from "../redux/actions/contactsActions";
import * as ServicesActions from "../redux/actions/servicesActions";
import * as portfoliosActions from "../redux/actions/portfoliosActions";
import * as ProjectsActions from "../redux/actions/projectsActions";
import * as homeActions from "../redux/actions/homeActions";

//Hooks import

//Language imports
import { I18nProvider } from "./../i18n";
import NotFound from "../pages/failed/NotFound";

function App({currentLanguage}) {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(contactsActions.getContacts())
      dispatch(ServicesActions.getServices())
      dispatch(portfoliosActions.getPortfolios());
      dispatch(ProjectsActions.getProjects());
      dispatch(homeActions.getHome());
  }, [])

  return (
    <div>
      <I18nProvider locale={currentLanguage}>
        <BrowserRouter>

          <Header/>
          
          <Routes>
            <Route exact path="/"  element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio/*" element={<Portfolio />} />
            <Route path="/services/*" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </I18nProvider>
    </div>
  );
}

function mapStateToProps(state){
  return {
    currentLanguage: state.languageReducer.current
  }
}

export default connect(mapStateToProps)(App)
