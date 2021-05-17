import React from "react";
import {Link,  BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MessageFields from "./MessageFileds";
import UserOutput from "./UserOutput";
import Layout from "./Layout";


const RouterApp = () => {
    return (
        <Router className="App">
            <Switch>
                <Route exact path="/" component={Layout}/>
                <Route path= "/UserOutput" component={UserOutput}/>
                <Route exact path="/Chat1" render={()=> <Layout idNumber={1}/>}/>
                <Route exact path="/Chat2" render={()=> <Layout idNumber={2}/>}/>
            </Switch>
        </Router>)
}

export default RouterApp;