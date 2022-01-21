import React, { Component } from 'react'
//class Stateful
export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {name: "Gowri"}
    }
    render() {
        return (
            <div>
               <h1 className = "bg-info text-center text-warning">
                  React SPA Project of {this.props.company}
                </h1> 
                <h4>{this.state.name}</h4>
            </div>
        )
    }
}

Header.defaultProps = {
    company: 'Gowri Company'
}
