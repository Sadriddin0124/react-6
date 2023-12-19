import React, { Component } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Homework1 from './Homework1'
import Option1 from './option1'
import Option2 from './option2'
import Option3 from './option3'
import Option4 from './option4'
import Option5 from './option5'
import Homework2 from './Homework 2/Homework2'
import Cars from './Homework 2/Cars'
import BMW from './Homework 2/BMW'
import Mers from './Homework 2/Mers'
import Dodge from './Homework 2/Dodge'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">
            <div className="col-4 offset-4 d-flex justify-content-center g-3" >
                <Link to="/homework1" className='btn btn-primary m-3'>Homework 1</Link>
                <Link to="/homework2" className='btn btn-primary m-3'>Homework 2</Link>
            </div>
        </div>
        <Routes>
            <Route path='homework1' element={<Homework1/>}>
                <Route path='option1' element={<Option1/>}/>
                <Route path='option2' element={<Option2/>}/>
                <Route path='option3' element={<Option3/>}/>
                <Route path='option4' element={<Option4/>}/>
                <Route path='option5' element={<Option5/>}/>
            </Route>
            <Route path='homework2' element={<Homework2/>}>
                    <Route path='cars' element={<Cars/>}>
                      <Route path='bmw' element={<BMW/>}></Route>
                      <Route path='mers' element={<Mers/>}></Route>
                      <Route path='dodge' element={<Dodge/>}></Route>
                    </Route>
            </Route>
        </Routes>
      </div>
    )
  }
}
