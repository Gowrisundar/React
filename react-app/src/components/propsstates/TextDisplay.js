import React, { Component } from 'react'

export default class TextDisplay extends Component {
    render() {
        return (
            <div>
                <h4>Message is : {this.props.text}</h4>
            </div>
        )
    }
}
