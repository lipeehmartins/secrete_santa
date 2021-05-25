import React from 'react'
import Name from './Name'
import { connect } from 'react-redux';


const NameList = () => {
    return (
        < div >
            <ul>
            <Name />
            </ul>
        </div >
    )
};


export default (NameList);