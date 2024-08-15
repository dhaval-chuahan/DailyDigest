import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import './App.css'
import AboutUs from './components/AboutUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

function App() {
  const[progress,setProgress]=useState(0);
  const apikey  = process.env.REACT_APP_API_KEY


  return (
   <div>
    {/* <ReactHook1/> */}
    <Router>
       <div>
       <Navbar />
       <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes >
          <Route  path='/general' element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={6} country={"in"} category={"general"} />} />
          <Route  path='/business' element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={6} country={"in"} category={"business"} />} />
          <Route  path='/entertainment' element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={6} country={"in"} category={"entertainment"}/>} />
          <Route  path='/health' element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={6} country={"in"} category={"health"} />} />
          <Route  path='/science' element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={6} country={"in"} category={"science"} />} />
          <Route  path='/sports' element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={6} country={"in"} category={"sports"} />} />
          <Route  path='/technology' element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={6} country={"in"} category={"technology"} />} />
          <Route  path='/AboutUs' element={<AboutUs/>} />
        </Routes>
       </div>
      </Router>
  
   </div>
  );
}

export default App;
