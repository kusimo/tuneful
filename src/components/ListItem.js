import React from 'react';

const ListItem = ({icon, part, onCategorySelect, text, catId, activeList }) => {

    const withIcon = () => {
        if(undefined !== icon) {
            return (
                <i className={`icon icon-${icon}`} /> 
            ) 
        }
    }

    const withClickHandler = () => {
        if(undefined !== onCategorySelect) {
            return (
                <span 
                    onClick={() => onCategorySelect(catId)} 
                    className={`${part}__list__link`}>
                            {text}
                    </span>
            )
        } else {
            return (
                <span 
                className={`${part}__list__link`}>
                        {text}  
                </span>
            )
        }
    }

   
    const active = activeList === catId? 'active' : '';
    return (
        <li className={`${part}__list__item ${active}`}>
                {withIcon()}
                {withClickHandler()}
        </li>
    )
}

export default ListItem;