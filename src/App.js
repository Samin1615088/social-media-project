import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import user file
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import { useEffect } from "react";
import { getUserAuth } from "./actions";
import { connect } from "react-redux";

function App(props) {
useEffect(() => {
    props.getUserAuth()
}, []);

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

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => ({
    getUserAuth : () => dispatch(getUserAuth())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
