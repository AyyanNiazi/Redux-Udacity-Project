import React from 'react';
import {connect} from 'react-redux';
import RenderAnsQUesRes from './renderAnQuesRes'

class AnsQUesResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            idLogger: false,
            ansQUesId: ''
         }
    }

idHandler(id){
    let filtered = this.props.data.filter((element)=>{
        return element.id === id
    })
    if(filtered) {
        this.setState({idLogger: true,ansQUesId: filtered })
        console.log('filtered sted',filtered)
    }
    else console.log('not runing ansrd id filratn')
}
    render() { 
        const {idLogger,ansQUesId} = this.state;
        return ( 
            <div> Answred Question 
            {idLogger === true ? 
                <RenderAnsQUesRes currId={ansQUesId} />
               :  <ul>
                    {this.props.data.map((v,i)=>{
                        return ( 
                        <div key={i} >
                            <li> {this.props.auth} </li>
                            <li value={idLogger} 
                            onClick={this.idHandler.bind(this, v.id)} > Add poll </li>
                        </div>
                        )
                    })}
                </ul>}
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

export default connect(mapStateToProps, null)(AnsQUesResult);
