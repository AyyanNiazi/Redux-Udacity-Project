import React from 'react';
import { connect } from 'react-redux';
import { NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import NextQuestion from './nextQues';
import Leader from './leader';
import Dashboard from './dashboard';
import Login from '../container/login'
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        const { islogin } = this.state

        return (

            <div>
                <BrowserRouter>
                    {/* {this.props.auth.authLogged === !false ?
                      : void 0} */}

                  
                </BrowserRouter>
                <h1> Hello {this.props.auth.authLogged === !false 
                && this.props.auth.users.length !== 0 ?
                    this.props.auth.users : void 0} </h1>

            </div>
        )
    }
}
//redux
const mapStateToProps = (state) => {
    console.log(state.auth)
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(Navbar); 