import React from "react";
import { Route, Routes, useNavigate  } from "react-router-dom";
import Portfolios from "./Portfolio";
import PortfolioInner from "./portfolioInner/PortfolioInner";

function Index(){

    return (
      <>
        <Routes>
          <Route
            path={`/inner/:slug`}
            element={<PortfolioInner/>}
          />
          <Route path={`/*`} element={<Portfolios/>}></Route>
        </Routes>
      </>
    );
}

export default Index