import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { connect } from 'react-redux';

const Name = () => {
    const API_URL = "http://127.0.0.1:8000/"
    const [names, setNames] = useState("")

    useEffect(() => axios.get(API_URL + "viewset/unpickedName")
    .then((response) => setNames(response.data))
    .catch((error) => console.error(error)), []
    );

    

    return (
        <div>
            {names.length > 0 && names.map((names) => <li>{names.names}</li>)}
        </div>
    )
}

const mapStateToProps = (state) => ({
    names: state.names,
})

export default connect(mapStateToProps, null)(Name);
