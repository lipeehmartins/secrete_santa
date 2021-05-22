import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';

const Name = () => {
    const API_URL = "http://127.0.0.1:8000/"
    const [name, setName] = useState("")
    const [added, setAdded] = useState(false)

    useEffect(() => axios.get(API_URL + "viewset/unpickedName")
    .then((response) => setName(response.data))
    .catch((error) => console.error(error)), [added]
    );
    return (
        <div>
            {name.length > 0 && name.map((name) => <li>{name.names}</li>)}
        </div>
    )
}

export default Name;
