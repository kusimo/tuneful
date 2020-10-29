import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import ListItem from './ListItem';

const categories = [
    {
        id: '0',
        name: 'All'
      },
    {
        id: '132',
        name: 'Pop'
      },
      {
        id: '116',
        name: 'Rap/Hip Hop'
      },
      {
        id: '152',
        name: 'Rock'
      },
      {
        id: '113',
        name: 'Dance'
      },
      {
        id: '165',
        name: 'R&B'
      },
      {
        id: '85',
        name: 'Alternative'
      },
      {
        id: '106',
        name: 'Electro'
      },
      {
        id: '466',
        name: 'Folk'
      },
      {
        id: '144',
        name: 'Reggae'
      },
      {
        id: '129',
        name: 'Jazz'
      },
      {
        id: '52',
        name: 'French Chanson'
      },
      {
        id: '98',
        name: 'Classical'
      },
      {
        id: '173',
        name: 'Films/Games'
      },
      {
        id: '464',
        name: 'Metal'
      },
      {
        id: '169',
        name: 'Soul & Funk'
      },
      {
        id: '2',
        name: 'African Music'
      },
      {
        id: '12',
        name: 'Arabic Music'
      },
      {
        id: '16',
        name: 'Asian Music'
      },
      {
        id: '153',
        name: 'Blues'
      },
      {
        id: '75',
        name: 'Brazilian Music'
      },
      {
        id: '81',
        name: 'Indian Music'
      },
      {
        id: '95',
        name: 'Kids'
      },
      {
        id: '197',
        name: 'Latin Music'
      }
]

const Discover = ({title, updateCurrentCategory}) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

    useEffect(()=> {
        return  updateCurrentCategory(selectedCategory)
    },[selectedCategory, updateCurrentCategory])

    const onCategorySelect = (cat) => {
       
        setSelectedCategory(cat);
       
    }

    const renderedCategories = categories.map((category) => {
        return (
            <ListItem key={category.id} 
                onCategorySelect={onCategorySelect} 
                text={category.name} 
                activeList={selectedCategory} 
                catId={category.id}
                part="genres" 
                />
        )
       
    })
    return (
        <div>
            <div className="header">
                <h1 className="header__label">{title}</h1>
            </div>
            <Nav part="genres">
                <ul className="genres__list">
                    {renderedCategories}
                </ul>
            </Nav>
        </div>


    )
}

export default Discover;