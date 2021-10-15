import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Layout from "./Layout";

const RouterApp = () => {
    return (
            <Router className="App">
                <Switch>
                    <Route exact path="/" component={Layout}/>
                    {/*<Route path="/Chat/:chatId" render={obj => <Layout chatId={Number(obj.match.params.chatId)}/>}/>*/}
                    <Route path="/Chat/:chatId" render={obj => <Layout chatId={Number(obj.match.params.chatId)}/>}/>
                </Switch>
            </Router>)
}

export default RouterApp;