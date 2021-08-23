import React from 'react'
import Button from './Button'

const Item = () =>{
    return(
        <div style={item}>
            <p>Title Item</p>
            <div>
                <Button/>
                <Button/>
            </div>
        </div>
    )
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