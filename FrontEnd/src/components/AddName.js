import React from 'react'
import { connect } from 'react-redux';
import { addName } from '../redux/secretApp/secretAppAction';

let AddName = ({ dispatch }) => {
    let input;

    return (
        <div className="AddName">
            <h1>Secret Santa</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(addName(input.value));
                    input.value = '';
                }}>

                <div className="input">
                    <input ref={node => {
                        input = node;
                    }} type="text" placeholder="Who will participate?" required className="form-control" />
                </div>
                <div className="addName-btn">
                    <button className="btn btn-primary btn-block">
                        Add Name
                    </button>
                </div>

            </form>
        </div>
    )
}

export default connect()(AddName);