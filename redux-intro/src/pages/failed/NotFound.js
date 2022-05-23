import React from "react";
import translate from "../../i18n/translate";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container">
      <div className="row">
        <section className="notFound">
          <div className="breadcrumb">
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L5 5L1 9" stroke="#ECF0E6" />
            </svg>
            
            <Link to="/" className="main_breadcrumb_item">
              {translate("Ana səhifəyə qayıt")}
            </Link>
          </div>
          <div className="main_container">
            <span>404</span>
            <p>{translate("Səhifə tapılmadı")}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
