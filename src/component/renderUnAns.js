import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import choiceAction from '../store/action/unAnsQuesAction'

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

    submitHandler(e,delId) {
        const { rad1, rad2, radChecked } = this.state;
        const {currId} = this.props
        e.preventDefault();
        var delId = delId;
        const id= Math.random();
        if (radChecked === true) {
            var unAnsQuesDetail = {
                constRad: rad1,
                id,
            }
            this.props.unAnsQuesProps(unAnsQuesDetail)
            this.setState({ redirect: true })
            console.log(unAnsQuesDetail.constRad , "unAns1")
        }
        else if (radChecked === false) {
            let unAnsQuesDetail = {
                constRad: rad2,
                id,
            }
            this.props.unAnsQuesProps(unAnsQuesDetail)
            this.setState({ redirect: true })
            this.props.currId.pop()
        }
        const filterArr = this.props.currId.filter((e) => {
            if (e.id === delId) {
                
              return true
            }
          })
          filterArr.forEach((element) => {
            currId.splice(currId.findIndex(f =>
              f.delId === element.delId), 1)
          });

          console.log(filterArr,"filter")


    }

    componentWillReceiveProps(nextProps) {
    const {redirect} = this.state
        if(redirect === true){
            console.log(this.props.currId, "will props redirect wali")
            }
            console.log(nextProps)
    }
    componentWillMount() {
        const {redirect} = this.state
        if(redirect === true){
        console.log(this.props.currId, "will mount redirect wali")

        }
        console.log(this.props.currId, "will mount wali")

    
    }

    render() {
        const { redirect } = this.state;
        if (redirect === true) {
            return (
                <Redirect to='/ansQuesResult' />
            )
        }
        return (
            <div>
                <ul>
                    {this.props.currId.map((v, i) => {
                        return (
                            <div key={i} >
                                <h1> name {this.props.auth}  </h1>
                                <form onSubmit={(e) => this.submitHandler(e, v.id)} >
                                    <input type='radio' value={this.state.rad1} name='opt1'
                                        onChange={(e) => this.setState({ rad1: v.opt1, radChecked: true })} />
                                    {v.opt1}

                                    <input type='radio' value={this.state.rad2} name='opt1'
                                        onChange={(e) => this.setState({ rad2: v.opt2, radChecked: false })} />
                                    {v.opt2}    <br />
                                    <input type='submit'  />
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