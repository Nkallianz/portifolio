import React, { Component } from 'react';
import {IndexRoute,Router, Route, hashHistory} from 'react-router';
import Home from './containers/Home/Home';
import App from './containers/App/App';

Router.prototype.componentWillReceiveProps = function(nextProps){
    let components= [];
    function grabComponents(element){
        if(element.props && element.props.component){
            components.push(element.props.component);
        }
        if(element.props && element.props.children){
            React.Children.forEach(element.props.children,grabComponents);
        }
    }
    grabComponents(nextProps.routes || nextProps.children);
    components.forEach(React.createElement);
};

export default (
<Router history={hashHistory}>
 <Route path="/" component={App}>
    <IndexRoute component={Home}/>
 </Route>
</Router>       

);

