import { useState } from 'react';
import { Chai } from './chai';


export function App() {


  return (
    <div className="parent">

      <Chai />
    </div>
  )
}

export function Wrestlers() {
  return (
    <ul id='wrestlers'>
      <li>John Cena</li>
      <li>UnderTaker</li>
      <li>Seth Rollins</li>
      <li>Brock Lesnar</li>
    </ul>
  )
}





