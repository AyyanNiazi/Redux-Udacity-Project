import React from 'react';
import {connect} from 'react-redux'
import AnsQUesResult from './ansQuesResult'
import UnAnsweredQues from './unAnsweredQues'
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    
    render() { 
        return ( 
            <div>
                <UnAnsweredQues /> <br/>
                <AnsQUesResult />
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