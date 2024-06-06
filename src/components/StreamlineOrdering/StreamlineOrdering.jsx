import './StreamlineOrdering.css'
import streamlineOrderingItemsList from '../../assets/data/streamlineOrderingItemsList'
import ImageBoxLinkToItem from '../ImageBoxLinkToItem/ImageBoxLinkToItem'
import { useState } from 'react'

const StreamlineOrdering = ()=>{
    const [linkToImg , setLinkToImg] = useState(streamlineOrderingItemsList[0].img)
    const [selectedtem , setSelectedItem] = useState(streamlineOrderingItemsList[0].class)
    return(
        <div className='streamlineOrderingContent'>
            <div className='streamlineOrderingTitle'>Streamline ordering from search to fulfillment, all in one place</div>
            <div className='streamlineOrderingItemsList'>

                <div className='streamlineOrderingItemContainer' id={selectedtem}>                
                    {streamlineOrderingItemsList.map((Item)=>                
                    <div key={Item.id} className={selectedtem===Item.class?"streamlineOrderingItem activeItem":"streamlineOrderingItem"} onMouseOver={()=>{setLinkToImg(Item.img); setSelectedItem(Item.class)}}>
                        <div className='streamlineOrderingItemIconContainer'>
                            <div className={Item===streamlineOrderingItemsList[streamlineOrderingItemsList.length-1]?"streamlineOrderingItemIcon lastChild":"streamlineOrderingItemIcon itemIconChild"}><img src={Item.icon} /></div>
                            <div className={Item===streamlineOrderingItemsList[streamlineOrderingItemsList.length-1]?"streamlineOrderingItemIconBlack lastChild":"streamlineOrderingItemIconBlack itemIconChild"}><img src={Item.blackIcon} /></div>
                        </div>
                        <div className='streamlineOrderingItemTextContainer'>
                            <div className='streamlineOrderingItemTitle'>{Item.title}</div>
                            <div className='streamlineOrderingItemDesc'>{Item.description}</div>
                        </div>
                    </div>
                    )}
                </div>

                <div className='ImageBoxLinkToItemContainer'>
                    <ImageBoxLinkToItem linkToImg={linkToImg}/>
                </div>

            </div>
        </div>
    )
}
export default StreamlineOrdering