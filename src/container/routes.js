import React from 'react';
import {Route, BrowserRouter,Switch} from 'react-router-dom';
import Login from './login'
import Dashboard from '../component/dashboard'

class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Login}  />
                        <Route exact path='/dashboard' component={Dashboard}  />
                    </Switch>
                </BrowserRouter>
            </div>
         );
    }
}
 
export default Routes;