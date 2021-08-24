import React from 'react'
import PropTypes from 'prop-types'
import "../styles/Button.css"

const Button = ({variant, text}) => {
    return(
        <button className={'btn btn-${variant}'}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired
}

export default Button