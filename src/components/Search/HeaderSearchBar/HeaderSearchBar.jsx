import './HeaderSearchBar.css'
import InputSearchBar from '../InputSearchBar/InputSearchBar'
import { useState } from 'react';
import {useRef , useEffect } from 'react'

const HeaderSearchBar = ({isSearchBarPopup , searchContent , setSearchContent}) => {
    
    const frequentlySearchedItems=[
        {id:400,searcheditem:'tools'},
        {id:401,searcheditem:'sofa set furniture'},
        {id:402,searcheditem:'furniture'},
        {id:403,searcheditem:'milwaukee tools'}
    ];

    const searchRef = useRef();
    const [isOpenSearchBar , setIsOpenSearchBar] = useState(false);

    useEffect(()=>{
        document.addEventListener("mousedown",(event)=>
        {
            if(!searchRef.current.contains(event.target))
            setIsOpenSearchBar(false);
        })
    });

    return(
        <div className="headerSearchBarContainer">
            <div className='headerSearchBarContent'>            
                <div className='headerSearchBarTabContainer'>            
                    <div className='headerSearchBarTab'><button className='tabSearchBtn active'>Products</button></div>
                    <div className='headerSearchBarTab'><button className='tabSearchBtn'>Manufacturers</button></div>
                </div>
                <div>
                    <div className='searchBarContainer' id={isOpenSearchBar}>
                        <div ref={searchRef} className='inputSearchBarContainer' onClick={()=>setIsOpenSearchBar((isOpenSearchBar)=>!isOpenSearchBar)}>
                            <InputSearchBar isSearchBarPopup={isSearchBarPopup} searchContent={searchContent}  setSearchContent={setSearchContent}/>
                        </div>
                        <div className='frequentlySearchedContainer'>
                            <span className='frequentlySearchName'>Frequently searched:</span>
                            {frequentlySearchedItems.map((item)=><div key={item.id} onClick={()=>setSearchContent(item.searcheditem)}>{item.searcheditem}</div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
export default HeaderSearchBar;