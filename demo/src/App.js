import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export default class App extends Component {
  render() {
    const numofPage=12;
    return (
      
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact strict path="/" element={<News key="general" pageSize={numofPage} country="in" category="general"  />} />
            <Route exact  path="/home" element={<News key="general" pageSize={numofPage} country="in" category="general" />} />
            <Route exact strict  path="/business" element={<News key="business" pageSize={numofPage} country="in" category="business" />} />
            <Route exact strict path="/entertainment" element={<News key="entertainment"pageSize={numofPage} country="in" category="entertainment" />} />
            <Route exact strict path="/health" element={<News key="health" pageSize={numofPage} country="in" category="health" />} />
            <Route exact strict path="/science" element={<News key="science" pageSize={numofPage} country="in" category="science" />} />
            <Route exact strict  path="/sports" element={<News key="sports" pageSize={numofPage} country="in" category="sports" />} />
            <Route exact strict path="/general" element={<News key="general" pageSize={numofPage} country="in" category="general" />} />
            <Route exact strict path="/technology" element={<News key="technology" pageSize={numofPage} country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>

    )
  }
}


