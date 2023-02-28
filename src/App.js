import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  apiKey=process.env.REACT_APP_API_KEY
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Routes>
            console.log({this.apiKey});
            <Route exact path="/" element={<News key="general" country="in" apiKey={this.apiKey} category="general" />}></Route>
            <Route exact path="/business" element={<News key="business" country="in" apiKey={this.apiKey} category="business" />}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" country="in" apiKey={this.apiKey} category="entertainment" />}></Route>
            <Route exact path="/health" element={<News key="health" country="in" apiKey={this.apiKey} category="health" />}></Route>
            <Route exact path="/science" element={<News key="science" country="in" apiKey={this.apiKey} category="science" />}></Route>
            <Route exact path="/sports" element={<News key="sports" country="in" apiKey={this.apiKey} category="sports" />}></Route>
            <Route exact path="/technology" element={<News key="technology" country="in" apiKey={this.apiKey} category="technology" />}></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}