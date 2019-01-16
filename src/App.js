import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/Posts";
import Postform from "./components/Postform";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import About from "./components/About";
import Navbar from "./components/CustomNavbar";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

// <Provider store={store}>
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//       Blog
//       </p>
//     </header>
//     <Postform/>
//     <hr/>
//     <Posts />
//   </div>
// </Provider>
