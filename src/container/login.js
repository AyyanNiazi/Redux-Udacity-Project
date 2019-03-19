import React from 'react';
import {connect} from 'react-redux'
import auth from '../store/action/authAction'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            select: '',
        }
    }

    selecthandler(e){
        const {select} = this.state
        this.setState({ select: e })
        
    }

submitHandler = (e) => {
    const {name, select} = this.state;
    e.preventDefault();

    const userDetail = {
        select, //ecma 6 use also "name: name" than this
    }

    this.props.userAction(userDetail);
    this.props.history.push('./dashboard')
    console.log(userDetail)
}

    render() { 
        const {select} = this.state
        return ( 
            <div>
                <form onSubmit={(e) => this.submitHandler(e)} >
                    <select value={select} 
                    onChange={(e) => this.selecthandler( e.target.value)} >
                        <option value='hunzala' >Hunzala</option>
                        <option value='haadi' >Haadi</option>
                        <option value='emaan' >Emaan Fatima</option>
                    </select>
                   
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