import React from 'react';
import { connect } from 'react-redux'

class Leader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <ul>
                    <li> name {this.props.auth}      </li>
                    {this.props.data.map((v, i) => {
                        return (<div key={i}>
                            <li>  {v.count} </li>
                        </div>
                        )
                    })}
                </ul>          
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state.auth.nextQues)
    return {
        data: state.data.nextQues,
        auth: state.auth.users
     }
}
export default connect(mapStateToProps, null)(Leader);