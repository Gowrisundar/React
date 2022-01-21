import React, { Component } from 'react'

export default class ChildParentInvoke extends Component {
    state={data:'initial Data'}

    updateState(event) {
        this.setState({data: event.target.value})
    }
    render() {
        return (
            <React.Fragment>
                <h1 className="text-success">Parent Component</h1>
                <h2 className="text-danger">{this.state.data}</h2>
                <br/>
                <h2 className="container">Child Component</h2>
                <Content mydataProp={this.state.data} updateStateProp={(event) => this.updateState(event)}>
                </Content>
                <ContentSibiling data = {this.state.data}></ContentSibiling>
            </React.Fragment>
        )
    }
}


//first child
const Content = (props) => {
    return (
        <>
        Enter Search item: <input type = "text" value = {props.mydataProp} onChange={props.updateStateProp} id="txt"/>
        </>
    )
}


//second child
const ContentSibiling = (props) => {
    return (
        <>
        <h5>The value is : {props.data}</h5>
        </>
    )
}