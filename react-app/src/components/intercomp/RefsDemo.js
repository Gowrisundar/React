import React, { Component } from 'react'

export default class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {data: 'react'}
        this.inputRef=React.createRef();
    }
    updateState(e) {
        this.setState({data:e.target.value})
    }
    clearInput(){
        alert(this.refs.mytext.value)
        this.setState({data:'Sundar'})
        //this.refs.pwd.focus()
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                Enter UserName:
                <input type = "text" value={this.state.data}
                onChange={ (e) => this.updateState(e)} ref="mytext" id="txt1"></input>
                Enter Password: 
                {/* <input type="password" ref="pwd"/> */}
                <input type="password" ref={this.inputRef}/>
                <button onClick={()=>this.clearInput()}>Reset</button>
            </div>
        )
    }
}
