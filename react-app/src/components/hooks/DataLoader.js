import React,{useState, useEffect} from "react";
//useEffect = componentDidMount and getDerivedStateFromProps

export default function DataLoader() {
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setData(data))
    },[])

    return (
        <div class="bg-warning">
            <ul>
                {data.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}