import React from 'react'
import './part1.css'
import Step from './Step'
function Part1() {
  return (
    <div className='container'>
    <Step stepno="1" steptitle="YOUR INFO"/>
    <Step stepno="2" steptitle="SELECT PLAN"/>
    <Step stepno="3" steptitle="ADD-ONS"/>
    <Step stepno="4" steptitle="SUMMARY"/>
    </div>
  )
}

export default Part1