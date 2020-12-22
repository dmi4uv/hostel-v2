import './App.css';
import React, {useState, Fragment} from 'react'
import Intro from "../Intro/Intro";
import Main from "../Main/Main";
import Toolbar from "../toolbar/Toolbar";
import Admin from '../admin/admin'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {
    const [status, introSwitch] = useState(1)
    setTimeout(() => {
        introSwitch(0)
    }, 2000)

    return (
        <Router>
            <Switch>
                <Route path="/admin">
                    <Admin/>
                </Route>
                <Route path="/">
                    <div className="App">
                        <Intro/>
                        {status ? null
                            :
                            <Fragment>
                                <Toolbar/>
                                <Main />
                            </Fragment>
                        }
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
