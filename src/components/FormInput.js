import React from 'react'
import Button from './Button'
import '../styles/FormInput.css'

class FormInput extends React.Component {
    render(){
       return(
           <form style={form}>
               <input type="text" 
               style={input}
               placeholder="Add Task"/>
               <Button/>
           </form>
       ) 
    }
}

const form = {
    background: "#fff",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin : "0.5rem 0"
}

const input = {
    width : "70%",
    border : "none",

}

export default FormInput