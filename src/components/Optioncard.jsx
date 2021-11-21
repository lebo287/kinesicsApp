import React from 'react'

const Optioncard = (props) => {
    const {image, backgroundColor, text} = props;
    return (
        <div className="option-card" style={{backgroundColor}}>
            <img src={image} alt="React Logo" />
            <div className="subheader">{text}</div>
        </div>
    )
}

export default Optioncard
