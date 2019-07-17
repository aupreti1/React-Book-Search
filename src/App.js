import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import Navbar from "./Components/Navbar/navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="application">
        <Navbar />
        <main className="main">
          <Container>
            <div className="wrapper">
              <Switch>
                <Route exat path="/" component={Books} />
                <Route path="/saved" component={Saved} />
              </Switch>
            </div>
          </Container>
        </main>
      </div>
    </Router>
  );
}

export default App;
