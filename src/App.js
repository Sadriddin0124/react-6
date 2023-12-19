import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Homework1 from "./components/Homework1";
import Option1 from "./components/option1";
import Option2 from "./components/option2";
import Option3 from "./components/option3";
import Option4 from "./components/option4";
import Option5 from "./components/option5";
import Homework2 from "./components/Homework 2/Homework2";
import Cars from "./components/Homework 2/Cars";
import BMW from "./components/Homework 2/BMW";
import Mers from "./components/Homework 2/Mers";
import Dodge from "./components/Homework 2/Dodge";

export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="homework1" element={<Homework1 />}>
              <Route path="option1" element={<Option1 />} />
              <Route path="option2" element={<Option2 />} />
              <Route path="option3" element={<Option3 />} />
              <Route path="option4" element={<Option4 />} />
              <Route path="option5" element={<Option5 />} />
            </Route>
            <Route path="homework2" element={<Homework2 />}>
              <Route path="cars" element={<Cars />}>
                <Route path="bmw" element={<BMW/>}></Route>
                <Route path="mers" element={<Mers />}></Route>
                <Route path="dodge" element={<Dodge />}></Route>
              </Route>
            </Route>
          </Route>
        </Routes>
      </div>
    );
  }
}
