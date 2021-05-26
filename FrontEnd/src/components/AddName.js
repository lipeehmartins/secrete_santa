import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addName } from '../redux/secretApp/secretAppAction';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";


const AddName = ({ dispatch }) => {
    const [names, setNames] = useState("");
    
    const onChangeNames = (e) => {
        const names = e.target.value;
        setNames(names);
    };

    const handleAddName = (e) => {
        e.preventDefault();
        if (names.trim()) {
            dispatch(addName(names))
        }
    };


    return (
        <div className="AddName">
            <h1>Secret Santa</h1>
            <Form onSubmit={handleAddName}>
                <div className="fomr-group">
                    <div className="input">
                        <Input
                            type="text"
                            className="form-control"
                            name="username"
                            required
                            value={names}
                            onChange={onChangeNames} />
                    </div>
                </div>
                <div className="addName-btn">
                    <button className="btn btn-danger btn-block">
                        Add name
                    </button>
                </div>


            </Form>
        </div>
    )
}

export default connect()(AddName);