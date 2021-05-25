import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { pickedName } from '../redux/secretApp/secretAppAction';


const PickedName = ({ dispatch }) => {

    const API_URL = "http://127.0.0.1:8000/"

    const [name, setName] = useState("");

    useEffect(() => axios.get(API_URL + "viewset/unpickedName")
        .then((response) => setName(response.data))
        .catch((error) => console.error(error)), []
    );

    const handlepickedName = (e) => {
        e.preventDefault();
        dispatch(pickedName(name));
    };

    return (

        <div className="pickedName-btn">
            <button className="btn btn-danger btn-block" onClick={handlepickedName}>
                Pick a name
                    </button>
        </div>
    )
}

export default connect()(PickedName);