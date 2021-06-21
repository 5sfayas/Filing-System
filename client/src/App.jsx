import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from "./pages/Home/Homepage";
import NavBar from "./components/Navbar"
import AddCase from "./pages/AddCase/AddCase";
import "./App.css";

const App = () => {
    return (
        // Set up React Router
        <div className="App">
            <Router>
                <NavBar/>
                <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/add+case">
						<NavBar />
						<AddCase />
				</Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;