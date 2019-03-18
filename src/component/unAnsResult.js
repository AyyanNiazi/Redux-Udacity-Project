import React from 'react';
import {connect} from 'react-redux';

class UnAnsResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div> {this.props.data.map((v)=>{
                return (
                    <div> {v.constRad} </div>
                )
            })}  </div>
         );
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        data: state.data.unAnsQuesChoice,
        auth: state.auth.users
     }
}

export default connect(mapStateToProps, null)(UnAnsResult);
