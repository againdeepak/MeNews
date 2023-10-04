import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
// import React, { useState } from 'react'
import Footer from './components/Footer';
export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress});
  }
  render() {
    // const [progress,setProgress]=useState(0);
    const numofPage=99
    return (
      
      <div>
        <BrowserRouter>

         <Navbar />
         <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
          <Routes>
            <Route exact strict path="/" element={<News setProgress={this.setProgress} key="general" pageSize={numofPage} country="in" category="general"  />} />
            <Route exact  path="/home" element={<News setProgress={this.setProgress} key="general" pageSize={numofPage} country="in" category="general" />} />
            <Route exact strict  path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={numofPage} country="in" category="business" />} />
            <Route exact strict path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment"pageSize={numofPage} country="in" category="entertainment" />} />
            <Route exact strict path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={numofPage} country="in" category="health" />} />
            <Route exact strict path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={numofPage} country="in" category="science" />} />
            <Route exact strict  path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={numofPage} country="in" category="sports" />} />
            <Route exact strict path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={numofPage} country="in" category="general" />} />
            <Route exact strict path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={numofPage} country="in" category="technology" />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>

    )
  }
}


