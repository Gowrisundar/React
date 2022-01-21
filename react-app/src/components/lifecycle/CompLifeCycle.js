import React, { Component } from 'react'

export default class CompLifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = { data: 0, msg: 'Initial Data' }
    }
    setNewNumber(event) {
        this.setState({ data: this.state.data + 1 })
    }
    render() {
        return (
            <div>
                <button onClick={(event) => { this.setNewNumber(event) }}>
                    INCREMENT
                </button>
                <Content myNumber={this.state.data}></Content>
            </div>
        )
    }
}

//child (birth-death)

class Content extends Component {
    //1. Initialization
    constructor(props) {
        super(props)
        this.state = { name: 'sundar' }
        console.log("in Construtor: " + props.myNumber)
    }
    //2.render
    render() {
        return (
            <div>
                <h3 id='txt1'>{this.props.myNumber}</h3>
                <h4 id='company'>Bank of America</h4>
            </div>
        )
    }

    //3. componentdidMount
    componentDidMount() {
        //ajax call to api to initalize data, register events, subscribe to websocket
        console.log("In CDM:" + this.props.myNumber)
    }
    //componentWillupdate
    static getDerivedStateFromProps(props, state) {
        //validation of props/state
        //ajax call to api to initalize data
        console.log('in DSFP' + props.myNumber)
        //ajax
        return { newdata: "New customer data" }
    }
    shouldComponentUpdate(props, state) {
        console.log("decide to render or not in SCU")
        if (props.myNumber > 5)
            return true
        else
            return false
    }
    componentDidUpdate() {
        //manipulate real dom with js/jquery
        console.log("In CDU:" + document.getElementById("company").innerText)
    }
    componentDidCatch(error) {
        //do remote logging in db with ajax
        console.log("Error occured:" + error)

    }
    componentWillUnmount() {
        //clean up/ unsubscribe to websocket/ rx observable/ clean cache
        //avoid memory leak
        console.log("unmounted")
    }

}

