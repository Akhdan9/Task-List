import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Item = ({todo, del, open}) =>{
    const delById = id => {
    del(id) }
    return(
        <div style={item}>
            <p>{todo.title}</p>
            <div>
                <Button text="Edit" variant="success" action={() => open(todo.id, todo.title)} />
                <Button text="Delete" variant="warning" action={() => delById(todo.id)}/>
            </div>
        </div>
    )
}

Item.propTypes = {
    todo: PropTypes.object.isRequired,
    del: PropTypes.func.isRequired
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