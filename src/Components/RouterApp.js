import React from "react";
import {Link,  BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import MessageFields from "./MessageFields";
import Layout from "./Layout";


const RouterApp = () => {
    return (
        <Router className="App">
            <Switch>
                <Route exact path="/" component={Layout}/>
                <Route exact path="/Chat/:chatId" render={obj => <Layout chatId={Number(obj.match.params.chatId)}/>}/>
                {/*<Route exact path="/Chat1" render={()=> <Layout idNumber={1}/>}/>*/}
                {/*<Route exact path="/Chat2" render={()=> <Layout idNumber={2}/>}/>*/}
                {/*<Route exact path="/Chat3" render={()=> <Layout idNumber={3}/>}/>*/}
            </Switch>
        </Router>)
}

export default RouterApp;