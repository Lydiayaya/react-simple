import { Button } from "antd";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import routes from "./router/routers";
createRoot(document.getElementById("xbeichen")).render(
  <React.StrictMode>
    <Router>
      <Link to="/">
        <Button type="primary"> 组件一</Button>
      </Link>
      <br />
      <Link to="/two">
        <Button type="primary"> 组件二</Button>
      </Link>
      <Routes>
        {routes.map((value, key) => {
          if (value.exact) {
            console.log(value.component);
            return (
              <Route
                exact
                path={value.path}
                element={value.component}
                key={key}
              />
            );
          } else {
            console.log(value);
            return (
              <Route path={value.path} element={value.component} key={key} />
            );
          }
        })}
      </Routes>
    </Router>
  </React.StrictMode>
);
