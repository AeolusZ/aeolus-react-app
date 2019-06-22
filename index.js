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
import PreLoad from './src/practice/preLoad'
import WebSockets from './src/practice/webSockets'
import {FuncComponent, FuncComponent1} from './src/practice/funcComponent'
import {Children, Hello} from './src/practice/children'
import Parent from './src/practice/parent'

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
    <Route path='/pre' component={PreLoad}/> 
    <Route path='/socket' component={WebSockets}/>
    <Route path='/func' component={FuncComponent}/>
    <Route path='/func1' component={FuncComponent1}/>
    <Route path='/child' component={Children}/>
    <Route path='/parent' component={Parent}/> 
    <Route path='/hello' component={Hello}/>  
  </div>
</BrowserRouter>


render(
  <Provider store={store}>
    {router}  
  </Provider>,
  document.getElementById('app')
)