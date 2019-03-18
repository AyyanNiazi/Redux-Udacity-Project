import React from 'react';
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import choiceAction from '../store/action/unAnsQues'

class RenderUnAns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rad1: '',
            rad2: '',
            radChecked: undefined,
            redirect: false
        }
}

submitHandler(e){
    const {rad1,rad2,radChecked} = this.state;
    e.preventDefault();


if(radChecked === true ){
    let unAnsQuesDetail = {
        constRad: rad1,
    }
    this.props.unAnsQuesProps(unAnsQuesDetail)
    this.setState({ redirect: true })
    console.log(unAnsQuesDetail, "unAns1")
 }
 else if(radChecked === false){
    let unAnsQuesDetail = {
        constRad: rad2,
    }
    this.props.unAnsQuesProps(unAnsQuesDetail)
    this.setState({ redirect: true })

    console.log(unAnsQuesDetail, "unAns2")
 }
   
}

    render() {
        const {redirect} = this.state;
        if(redirect === true ){
            return (
                <Redirect to='/unAnsResult' />
            )
        }
        return (
            <div>
                <ul> 
               {this.props.currId.map((v,i)=>{
                   return (
                       <div key={i} >
                        <h1> name {this.props.auth}  </h1> 
                    <form onSubmit={(e)=> this.submitHandler(e)} > 
                        <input type='radio' value={this.state.rad1 }  name='opt1' 
                        onChange={(e) => this.setState({rad1: v.opt1,radChecked: true })} /> 
                        {v.opt1}   

                         <input type='radio' value={this.state.rad2 } name='opt1' 
                        onChange={(e) => this.setState({rad2: v.opt2, radChecked:false})} /> 
                        {v.opt2}    <br/>
                        <input type='submit' />
                    </form>
                         </div>
                   )
               })}   
               </ul>  
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        data: state.data.nextQues,
        auth: state.auth.users
     }
}
const mapDispatchToProps = (dispatch) => {
    return {
        unAnsQuesProps: unAnsQuesDetail => dispatch(choiceAction(unAnsQuesDetail))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RenderUnAns);