import React, { Component } from 'react'
import TextDisplay from './TextDisplay'
export default class TextInput extends Component {
    state={inputText:'Sundar1'}

    handleChange(event) {
        this.setState({inputText:event.target.value})
    }
    render() {
        return (
            <React.Fragment>
                Company:<input type="text" id="txt"/>
                <br/><br/>
                Username: <input type="text" value ="Sundar"/>
                <div>
                    Enter message:<input type = "text" value={this.state.inputText}
                    onChange={(event) => this.handleChange(event)} />
                </div>

                {this.state.inputText ? console.log("valid") : console.log("No Data")}

                {this.state.inputText ? <TextDisplay text = {this.state.inputText}/> : <TextDisplay text = "Not Allowed"/>}
            </React.Fragment>
        )
    }
}
