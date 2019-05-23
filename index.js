import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux-immutable';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import InCome from './src'
import FormPractice from './src/FormPractice'
import Event from './src/event'
import Practice from './src/practice'
import lazyLoad from './src/practice/lazyLoad'

import practiceReducer from './src/practice/reducer'
const reducers = combineReducers({
  practiceReducer
})
const store = createStore(

  reducers,
  applyMiddleware(thunk)
)
const router = <BrowserRouter>
  <div>
    <Route exact path='/' component={InCome}/>
    <Route path='/formPractice' component={FormPractice}/>  
    <Route path='/event' component={Event}/>
    <Route path='/practice' component={Practice}/>
    <Route path='/lazy' component={lazyLoad}/>  
  </div>
</BrowserRouter>


render(
  <Provider store={store}>
    {router}  
  </Provider>,
  document.getElementById('app')
)