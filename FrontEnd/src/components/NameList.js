import React from 'react'
import Name from './Name'
import { connect } from 'react-redux';


const NameList = ({people}) => {
    return (
        < div >
            <ul>
            {people.map(person => 
            <Name name={person.name}/>)}
            </ul>
        </div >
    )
};

const mapStateToProps = (state) => ({
    people: state.names
})


export default connect(mapStateToProps, null)(NameList);