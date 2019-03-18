import React from 'react';
import {connect} from 'react-redux'
import { stat } from 'fs';
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <div>
                <h1> dashboard  {this.props.auth.authLogged ?
                    this.props.auth.users : ''}  </h1>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    console.log(state.auth)
    return {
        auth: state.auth
    }
}
 

export default connect(mapStateToProps,null) (Dashboard);