import React from 'react';
import {connect} from 'react-redux'
import auth from '../store/action/authAction'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            pass: '',
         }
    }

submitHandler = (e) => {
    const {name, pass} = this.state;
    e.preventDefault();

    const userDetail = {
        name, //ecma 6 use also "name: name" than this
        pass,
    }

    this.props.userAction(userDetail);
    this.props.history.push('./dashboard')
}
    render() { 
        return ( 
            <div>
                <form onSubmit={(e) => this.submitHandler(e)} >
                    <input type='text' value={this.state.name}
                    onChange={(e) => this.setState({name: e.target.value }) }  />
                     <input type='password' value={this.state.pass}
                    onChange={(e) => this.setState({pass: e.target.value }) }  />
                    <input type='submit' />
                </form>
            </div>
          );
    }
}
 
// redux
// const mapStateToProps = (state) => {
//     return {
//         auth
//     }
// }

const mapDispatchToProps = (dispatch) =>{
    return {
        userAction : userDetail => dispatch(auth(userDetail)),
    }
}
export default connect(null,mapDispatchToProps)(Login);