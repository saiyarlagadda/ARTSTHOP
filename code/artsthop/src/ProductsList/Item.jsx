import React from 'react'

const Item = ({item, children}) => {
  return (
    <div className="Item">
      <div className="Item-left">
        <div className="Item-image" > 
            <img src={item.img1} style={{height: "65px", width: "65px"}}  />
        </div>
        <div className="Item-title">
          {item.title} 
        </div>
        <div className="Item-description"> 
          {item.description}
        </div>
      </div>
      <div className="item-right">
        <div className='item-price'>
          ${item.price}
        </div>
        {children}
      </div>
    </div>
  )
}

export default Item