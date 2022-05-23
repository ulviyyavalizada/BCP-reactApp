import React, { Component } from "react";
import { Link } from "react-router-dom";

//Image import
import breadcrumbSide from "../../assets/res/img/breadcrumb_icon.svg";

export default function Breadcrumb({currentPage}) {
  return (
    <div className="breadcrumb">
      <Link to="/" className="main_breadcrumb_item">
        BCP
      </Link>
      <img src={breadcrumbSide} alt="" />
      <span className="breadcrumb_item">{currentPage}</span>
    </div>
  );
}
