import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Name = () => {
    const [names, setNames] = useState("");
    useEffect(() => axios.get("http://127.0.0.1:8000/viewset/unpickedName/")
    .then((response) => setNames(response.data))
    .catch((error) => console.error(error)), []);

    return (
        <div>
            <li className="li_Name">
                <p>{names}</p>
            </li>
        </div>
    )
}


export default Name;