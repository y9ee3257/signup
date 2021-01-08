import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import './App.css';


class App extends React.Component {

  render() {
    return (
      <div>
        {/* <Header></Header> */}
        <Home></Home>
      </div >
    )
  }
}

export default App;