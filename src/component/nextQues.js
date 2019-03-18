import React from 'react';
import {connect} from 'react-redux'
import nextQuestion from '../store/action/dataAction'
class NextQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            opt1: '',
            opt2: '',
         }
    }

submitHandler= (e) => {
    const {opt1, opt2} = this.state;
    e.preventDefault();
    let counter = Math.random();
    const quesDetail = {
        opt1,
        opt2,
        id: counter,
    }
    this.props.quesProps(quesDetail)
    this.setState({
        opt1: '',
        opt2: ''
    })
}
    render() { 
        return ( 
            <div>
               <h1>  Create New Question </h1>
               <h3>  Would you rather..... </h3>
               <form onSubmit={(e)=> this.submitHandler(e)} >
                   <input value={this.state.opt1} type='text' placeholder='Question Option 1'
                   onChange={(e) => this.setState({opt1: e.target.value})} />
                    <input value={this.state.opt2} placeholder='Question Option 2'
                   onChange={(e) => this.setState({opt2: e.target.value})} />
                   <input type='submit' />
               </form>
            {/* <ul>
                {this.props.data.map((v,i)=>{
                    return ( <div key={i}> {v.opt1}  </div> )
                })}
            </ul> */}
            </div>
         );
    }
}
const mapStateToprops = (state) =>{
    console.log(state.data.nextQues)
    return {
        data: state.data.nextQues
    }
}
const mapDispatchToProps = ( dispatch) => {
    
    return {
        quesProps: quesDetail => dispatch(nextQuestion(quesDetail))
    }
    console.log(dispatch)
    
}
 
export default connect(mapStateToprops,mapDispatchToProps)(NextQuestion);