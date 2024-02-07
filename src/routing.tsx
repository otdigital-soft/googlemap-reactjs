import { Route, Routes, Navigate } from "react-router-dom";
import Home from "pages/home";
import Signin from "pages/signin";
import Authenticated from "containers/authenticated";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Authenticated>
                <Home />
              </Authenticated>
            }
          />
          <Route path="signin" element={<Signin />} />
          <Route
            path="home"
            element={
              <Authenticated>
                <Home />
              </Authenticated>
            }></Route>
          <Route path="*" element={<Navigate to={{ pathname: "home" }} />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
