import React, { Component } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Option1 from "./option1";
import Option2 from "./option2";
import Option3 from "./option3";
import Option4 from "./option4";
import Option5 from "./option5";
export default class Homework1 extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6 d-flex flex-column align-items-center justify-content-around">
            <Link to='/homework1/option1' className="btn btn-warning m-1">Option1</Link>
            <Link to='/homework1/option2' className="btn btn-warning m-1">Option2</Link>
            <Link to='/homework1/option3' className="btn btn-warning m-1">Option3</Link>
            <Link to='/homework1/option4' className="btn btn-warning m-1">Option4</Link>
            <Link to='/homework1/option5' className="btn btn-warning m-1">Option5</Link>
          </div>
          <div className="col-6">
            <Routes>
              <Route path="option1" element={<Option1 />} />
              <Route path="option2" element={<Option2 />} />
              <Route path="option3" element={<Option3/>} />
              <Route path="option4" element={<Option4/>} />
              <Route path="option5" element={<Option5/>} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}
