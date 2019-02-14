import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'

import InCome from './src'
import FormPractice from './src/FormPractice'
import Practice from './src/practice'

ReactDOM.render(
  <BrowserRouter>
    <div>
    {console.log(document.getElementById('app'))}
      <Route exact path='/' component={InCome}/>
      {/* <Route path='/formPractice' component={FormPractice}/>  */}
      <Route path='/practice' component={Practice}/>  
    </div>
  </BrowserRouter>,
  document.getElementById('app')
)
console.log(document.getElementById('app'))