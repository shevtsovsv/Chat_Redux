import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import MessageFields from "./Components/MessageFields";
import RouterApp from "./Components/RouterApp";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import initStore from "./utils/store";

ReactDOM.render(
    <Provider store={ initStore() }>
        <RouterApp/>
    </Provider>,
  document.getElementById('root')
);


