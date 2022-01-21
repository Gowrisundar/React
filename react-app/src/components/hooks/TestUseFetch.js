import React from 'react'
import useFetch from './UseFetch';

const TestUseFetch= () => {
    const { loading, error, data = [] } = useFetch(
        'https://jsonplaceholder.typicode.com/users'
    );

    if (error) return <p>Error!</p>;
    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Users data with Custom Hook</h1>
            <ul>
                {data?.map(item => (
                    <li key={item.id}>
                        <h5>{item.name}</h5>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TestUseFetch