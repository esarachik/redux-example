import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import VinylList from "./components/VinylList";
import News from "./components/News";
import AddVinyl from "./components/AddVinyl";
import Navbar from "./components/CustomNavbar";
import Loading from "./components/Loading";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Loading />
            <Navbar />
            <Route exact path="/" component={VinylList} />
            <Route path="/add-vinyl" component={AddVinyl} />
            <Route path="/news" component={News} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
