import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import user file
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route path="/Home">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
