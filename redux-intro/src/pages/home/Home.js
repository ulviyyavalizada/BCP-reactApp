import React, { useEffect } from "react";
import IndexLanding from "../../components/homeSub/IndexLanding";
import IndexPortfolio from "../../components/homeSub/IndexPortfolio";
import IndexServices from "../../components/homeSub/IndexServices";
import IndexProjects from "../../components/homeSub/IndexProjects";
import IndexForm from "../../components/homeSub/IndexForm";
import { useDispatch } from "react-redux";


function Home() {
  return (
    <>
      <section className="index">
        <div className="container">
          <div className="row">
            <IndexLanding />
            <IndexPortfolio />
            <IndexServices />
            <IndexProjects />
            <IndexForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
