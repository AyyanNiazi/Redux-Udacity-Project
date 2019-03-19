import React from 'react';
import {connect} from 'react-redux';

class RenderAnsQUesRes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        console.log('unansId', this.props.currId)
        return ( 
            <div> 
                <ul> {this.props.auth}
                    {this.props.currId.map((v,i)=>{
                        return <div>  {v.constRad}   </div>
                    })}
                </ul>
            </div>
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

export default connect(mapStateToProps, null)(RenderAnsQUesRes);
