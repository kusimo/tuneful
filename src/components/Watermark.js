import React from 'react';

const Watermark = (props) => {
    return (
        <a className="watermark__label" href={props.link} rel="noreferrer">
            <span className="label-with-icon">
            {props.title}
            </span>
            
            <i className={`icon icon-${props.icon}`}></i>
        </a>
    )
}

export default Watermark;