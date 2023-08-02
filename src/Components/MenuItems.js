import React from 'react'

function MenuItems({menuItem}) {
    return (
        <div className="portfolis">
            {
                menuItem.map((item)=>{
                    return <div className="portfolio" key={item.id}>
                        <div>
                            <a href={item.link1} target="_blank" rel="noreferrer">
                                <img src={item.image} alt={item.image} />
                            </a>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;
