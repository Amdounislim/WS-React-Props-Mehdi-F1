import React from 'react'
import UserProfile from './UserProfile'

const Users = (props) => {
    return (
        <div style={{display:"flex"}}>
            {props.persons.map((el, i) => <UserProfile user={el} key={i} />)}
        </div>
    )
}

export default Users