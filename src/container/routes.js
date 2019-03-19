import React from 'react';
import { Route, BrowserRouter, Switch,Link } from 'react-router-dom';
import Login from './login'
import Dashboard from '../component/dashboard'
import Navbar from '../component/navbar'
import NextQuestion from '../component/nextQues'
import Leader from '../component/leader'
import RenderUnAns from '../component/renderUnAns'
import AnsQUesResult from '../component/ansQuesResult'

class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            islogin: false
        }
    }
    componentDidMount() {
        this.setState({ islogin: true })
    }
    render() {
        const { islogin } = this.state
        return (
            <div>
                {islogin === true ?
                    <div>
                        <div>
                        <div>
                        <Navbar />
                           
                        </div> 
                        </div>
                        <BrowserRouter>
                        <Link to='/dashboard' >Home</Link>
                            <Link to='/nextQues' >Next Question</Link>
                            <Link to='/leader'>Leader Board</Link>
                            <Switch>
                                <Route exact path='/' component={Login} />
                                <Route path='/dashboard' component={Dashboard} />
                                <Route path='/nextQues' component={NextQuestion} />
                                <Route path='/leader' component={Leader} />
                                <Route path='/renderUnAns' component={RenderUnAns} />
                                <Route path='/ansQuesResult' component={AnsQUesResult} />
                            </Switch>
                        </BrowserRouter>
                    </div>
                    : <h1> Loading </h1>}
            </div>

        );
    }
}

export default Routes;