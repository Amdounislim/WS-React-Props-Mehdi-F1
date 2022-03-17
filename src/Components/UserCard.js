import React from 'react'
import propTypes from 'prop-types'

const UserCard = ({ name, email, age, say, phone, children }) => {
    return (
        <div>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <h4>{phone}</h4>
            <h5>{age}</h5>
            <button onClick={say} >Say Hello</button>
            {children}
        </div>
    )
}

UserCard.defaultProps = {
    name: 'Foulen',
    email: 'foulen@gmail.com',
    phone: 12202
}

UserCard.propTypes = {
    name: propTypes.string,
    phone:propTypes.number
}
export default UserCard