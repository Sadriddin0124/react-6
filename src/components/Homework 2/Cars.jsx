import React, { Component } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import BMW from './BMW'
import Mers from './Mers'
import Dodge from './Dodge'
export default class Cars extends Component {
  
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6 offset-3 d-flex justify-content-between">
            <Link id='bmw' className='btn btn-success'  to='/homework2/cars/bmw'>BMW</Link>
            <Link id='mers' className='btn btn-success'  to='/homework2/cars/mers'>Mercedes Benz</Link>
            <Link id='dodge' className='btn btn-success'  to='/homework2/cars/dodge'>Dodge</Link>
          </div>
          <div className="col-6">
            <Routes>
              <Route path='bmw' element={<BMW/>}></Route>
              <Route path='mers' element={<Mers/>}></Route>
              <Route path='dodge' element={<Dodge/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    )
  }
}
