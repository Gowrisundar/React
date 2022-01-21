import React, { Component } from 'react'

class StatefulApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[
                {'id': 1, 'name': 'david', 'age': 25},
                {'id': 2, 'name': 'vimal', 'age': 50},
                {'id': 3, 'name': 'kamal', 'age': 45}
            ]
        }
    }
    render() {
        return (
            // we can also use <> </> instead of <React.Fragment> </React.Fragment>
            <React.Fragment>
                <h3 className='bg-danger'>Bank Customer</h3>
                <table className="table table-hover table-striped">
                    <tbody>
                        {
                            this.state.data.map( (customer, index) => 
                            <TableRow key = {index} data = {customer} />
                            )
                        }
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

const TableRow = (props) => {
    return (
        <tr>
            <td>{props.data.id}</td>
            <td>{props.data.name}</td>
            <td>{props.data.age}</td>
        </tr>
    )
}

export default StatefulApp
