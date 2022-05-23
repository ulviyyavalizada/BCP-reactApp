import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

import Services from "./Services";
import ServiceInner from "./serviceInner/ServiceInner";

function Index() {

  return (
    <div>
      <Routes>
        <Route index element={<Services />}></Route>
        <Route
          path={`/:slug`}
          element={<ServiceInner/>}
        />
      </Routes>
    </div>
  );
}

export default Index;
