import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'

import InCome from './src'
import FormPractice from './src/FormPractice'
import Event from './src/event'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={InCome}/>
      <Route path='/formPractice' component={FormPractice}/>  
      <Route path='/event' component={Event}/>  
    </div>
  </BrowserRouter>,
  document.getElementById('app')
)