import React from 'react';

const ListItem = ({ icon, part, onCategorySelect, text, catId, activeList, onClick, selected }) => {

    const withIcon = () => {
        if (undefined !== icon) {
            return (
                <i className={`icon icon-${icon}`} />
            )
        }
    }

    const displayListItem = () => {
        if (undefined !== onCategorySelect) {
            return (
                <li className={`${part}__list__item ${activeList === catId  ? 'active' : ''}`}>
                    {withIcon()}
                    <span
                        onClick={() => onCategorySelect(catId)}
                        className={`${part}__list__link`}>
                        {text}
                    </span>
                </li>
            )
        } else {
            return (
                <li onClick={() => onClick(text)} className={`${part}__list__item ${selected === text ? 'active' : ''}`}>
                    {withIcon()}
                    <span
                        className={`${part}__list__link`}>
                        {text}
                    </span>
                </li>
            )
        }
    }


    return (

        displayListItem()
    )
}

export default ListItem;