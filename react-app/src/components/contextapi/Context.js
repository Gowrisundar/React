import React from 'react'

//1. create the content with initial state
const MyContext=React.createContext()
// const AuthContext=React.createContext({ssotoken:'',userName:''})

//2.provider Component

class MyProvider extends React.Component {
    state={
        name:'sundar',
        salary: 5000,
        job:'Software'
    }
    render() {
        return (
            <MyContext.Provider value={
                {state: this.state,
                incrementSalary: ()=>this.setState({
                    salary:this.state.salary+1000
                })}
            }>
            {this.props.children}
            </MyContext.Provider>
        )
    }
}

//3. wrap provider to context - produce container (react)
export default class Context extends React.Component {
    render() {
        return (
            <MyProvider>
                <div className='bg-success'>
                    <h2>React Context API demo</h2>
                    <Family></Family>
                </div>
            </MyProvider>
        )
    }
}

const Family=()=>{
    return (
        <div>
            <Person/>
        </div>
    )
}

//5: Person is Consumer

class Person extends React.Component {
    render() {
        return (
            <MyContext.Consumer>
                {
                    (context)=>(
                        <div>
                            <h3 className="bg-primary">Person Details</h3>
                            <h4>Hi! {context.state.name}</h4>
                            <h4 className="bg-danger">
                                Salary:{context.state.salary}
                            </h4>
                            <h4> Job: {context.state.job}</h4>
                            <button className="btn btn-primary" onClick={context.incrementSalary}>
                                Increment Salary
                            </button>
                        </div>
                    )
                }
            </MyContext.Consumer>
        )
    }
}


