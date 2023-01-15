
import './App.css';
 import Navbar from './components/Navbar';
import React, { Component } from 'react';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";




let values={
  PageSize:10,
  country:'in'
}


class App extends Component {

  apiKey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress : progress})
  }

  render() {
    return (
      <div>
        <Router>
        
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />


        <Routes>
        
        <Route exact  path="/Business"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={values.PageSize} country={values.country} category={'business'}/>}></Route>
        <Route exact  path="/"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={values.PageSize} country={values.country} category={'general'}/>}></Route>
        <Route exact  path="/Entertainment"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={values.PageSize} country={values.country} category={'entertainment'}/>}></Route>
        <Route exact  path="/Health"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={values.PageSize} country={values.country} category={'health'}/>}></Route>
        <Route exact  path="/Science"  element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={values.PageSize} country={values.country} category={'science'}/>}></Route>
        <Route exact  path="/Sports"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={values.PageSize} country={values.country} category={'sports'}/>}></Route>
        <Route exact  path="/Technology"  element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={values.PageSize} country={values.country} category={'technology'}/>}></Route>
        
        </Routes>

        </Router>
      </div>
    );
  }
}

export default App;