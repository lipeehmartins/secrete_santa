import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addName } from '../redux/secretApp/secretAppAction';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

let AddName = ({ dispatch }) => {
    const [names, setNames] = useState("");

    const onChangeNames = (e) => {
        const names = e.target.value;
        setNames(names);
    };

    const handlAddName = (e) => {
        e.preventDefault();
        if (names.trim()) {
            dispatch(addName(names))
        }
    };

    return (
        <div className="AddName">
            <h1>Secret Santa</h1>
            <Form onSubmit={handlAddName}>
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
                    <button className="btn btn-primary btn-block">
                        Add Name
                    </button>
                </div>


            </Form>
        </div>
    )
}

export default connect()(AddName);