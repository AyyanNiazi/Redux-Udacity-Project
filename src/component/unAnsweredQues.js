import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import RenderUnAns from './renderUnAns'

class UnAnsweredQues extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            idLogger: false,
            currId: '',
          }
    }


idHandler=(id)=>{
    const filter = this.props.data.filter((elem)=>{
        return elem.id === id
    })
    if(filter){
        this.setState({ idLogger:true, currId: filter })
    }
    else{
        console.log('fail')
    }
    console.log(filter)
}
    render() { 
        const {idLogger, currId} = this.state
        return ( 
            <div>
             <h1> name {this.props.auth}  </h1>
                {idLogger === true ? <RenderUnAns currId={currId} />
                :  <div>
                <h1> unanswred ques </h1>
                 <ul>
                {this.props.data.map((v,i)=>{
                    return (
                     <div key={i}>
                       <li style={{cursor: 'pointer'}}
                       value={idLogger} onClick={this.idHandler.bind(this, v.id) }>  click </li> 
                       {/* <li> <Link to='/renderUnAns' > View Poll  </Link> </li> */}
                    </div> 
                      )
                })}
              </ul>
              </div>  }
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        data: state.data.nextQues,
        auth: state.auth.users
    }
}
export default connect(mapStateToProps,null)(UnAnsweredQues);