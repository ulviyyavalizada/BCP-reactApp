import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeLanguage } from "../../redux/actions/actionTypes";
import { LOCALES } from "../../i18n";

export default function Language() {
  const [activeClass, setActiveClass] = useState((localStorage.getItem('locale') + '-lang') || 'az-lang');

  const dispatch = useDispatch();
  const activeBtn = (text, a, l) => {
    setActiveClass(a);
    dispatch({type: changeLanguage, payload: l});
  }

  return (
    <div className="page_language">
      <ul className={"header-page-lang"}>
        {LOCALES.map((language, index) => (
          <li key={index} onClick={() => activeBtn(language.text, language.className, language.locale)}>
              <Link to='#' className={`${language.className} ${activeClass === language.className ? "active" : ''}`}>
                  {language.text} 
              </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}