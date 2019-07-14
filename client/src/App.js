import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveBooks from "./Pages/Saved";
import SearchBooks from "./Pages/SearchedBooks";
import NoMatch from "./Pages/NoMatch";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/Footer"
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path "/" component={SearchBooks} />
          <Route exact path "/saved" component={SavedBooks} />
          <Route exact path "/saved:id" component={SaveBooks} />
          <Route exact path={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
