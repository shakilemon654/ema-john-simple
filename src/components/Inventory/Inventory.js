import React, { useEffect } from 'react';

const Inventory = () => {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/posts')
        .then(res => res.json())
        .then(data => console.log(data))
        console.log('object');
    })
    return (
        <div>
            <h1>I am Inventory</h1>
        </div>
    );
};

export default Inventory;