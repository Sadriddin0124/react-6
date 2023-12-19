import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Cars from "./Cars";
import "./styles.css";
import BMW from "./BMW";
import Mers from "./Mers";
import Dodge from "./Dodge";
export default class Homework2 extends Component {
  none = () => {
    let num = document.getElementById('num').value
    let password = document.getElementById('password').value
    let row = document.getElementById("row")
    console.log(num);
    console.log(password);
    if (num == 123 && password == 123) {
      row.style.display = "none";
    } else {
      alert("There is a Wrong with Password or Number")
    }
  };
  render() {
    return (
      <div>
        <div id="row" className="row">
          <div className="col-6 offset-3 mt-5">
            <div className="card mt-5">
              <h1 className="text-center">Login</h1>
            </div>
            <div className="card-body">
              <input id="num"
                className="form-control mt-2"
                type="number"
                placeholder="Phone number"
              />
              <input id="password"
                className="form-control my-2"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="card-footer">
              <Link
                to="/homework2/cars"
                className="btn btn-success"
                onClick={this.none}
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 offset-3">
            <Routes>
              <Route path="cars" element={<Cars />}>
                <Route path="bmw" element={<BMW />}></Route>
                <Route path="mers" element={<Mers />}></Route>
                <Route path="dodge" element={<Dodge />}></Route>
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}
