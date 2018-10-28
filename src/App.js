import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/Layout/Layout'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="app">
      <Layout>
        <p>hi</p>
      </Layout>
      </div>
      </Router>
    );
  }
}

export default App;
