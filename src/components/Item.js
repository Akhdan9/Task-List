import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Item = ({todo}) =>{
    return(
        <div style={item}>
            <p>{todo.title}</p>
            <div>
                <Button text="Edit" variant="success"/>
                <Button text="Delete" variant="warning"/>
            </div>
        </div>
    )
}

Item.propTypes = {
    todo: PropTypes.object.isRequired
}
export default Item

const item = {
    background: "#2DA4F8",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin : "0.5rem 0"
}