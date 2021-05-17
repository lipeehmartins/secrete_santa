import React from 'react'
import Name from './Name'
import { connect } from 'react-redux';


const NameList = ({people}) => {
    return (
        < div >
            <ul>
            {people.length > 0 && people.map(person => 
            <Name names={person.names}/>)}
            </ul>
        </div >
    )
};

const mapStateToProps = (state) => ({
    people: state.names
})


export default connect(mapStateToProps, null)(NameList);