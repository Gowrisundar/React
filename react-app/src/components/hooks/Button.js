import React, { Component } from 'react'

//without hook
export default class Button extends Component {
    state={buttonText:'Cilck me,Please'}
    handleClick=()=>{
        this.setState({buttonText:'Thanks, been Clicked'})
    }
    render() {
        const {buttonText}=this.state //Object destrucutre es6
        return (
            <div>
                <button onClick={this.handleClick}>{buttonText}</button>
            </div>
        )
    }
}
