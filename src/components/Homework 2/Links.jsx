import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
export default class Links extends Component {
  render() {
    return (
      <div>
        <Link to='/homework2/login'>Log in</Link>
        <Routes>
          <Route path="homework2" element={<Homework2 />}>
            <Route path="login" element={<Login />}>
              <Route path="cars" element={<Cars />}></Route>
            </Route>
          </Route>
        </Routes>
      </div>
    );
  }
}
