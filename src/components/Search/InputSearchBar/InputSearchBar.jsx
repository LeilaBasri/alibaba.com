import React from 'react'
import './InputSearchBar.css'
import camera from '../../../assets/images/Icons/cameraBlack.svg'
import cameraO from '../../../assets/images/Icons/cameraorange.svg'
import search from '../../../assets/images/Icons/searchW.svg'
import SearchBarPopUp from '../SearchBar/SearchBarPopUp'
import SearchBarSuggestions from '../../../assets/data/SearchBarSuggestions'
import { useRef, useState } from 'react'
import { useEffect } from 'react'

function InputSearchBar() {
    const placeHolderItems=[{item:'wedding decoration' ,ani:'placeHolderItem1'} , {item:'electric bike',ani:'placeHolderItem2'} , {item:'milwaukee tools',ani:'placeHolderItem3'}]

    const [searchContent, setSearchContent]= useState('');
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])

    function showDefaultSearchBarPopUp(){
        document.getElementById('defaultSearchBarPopUp').classList.add("show")
    }
    function showFilterSearchBarPopUp(){
        document.getElementById('defaultSearchBarPopUp').classList.remove("show")
        document.getElementById('filterSearchBarPopUp').classList.add("show")
    }
    function hideDefaultSearchBarPopUp(){
        document.getElementById('defaultSearchBarPopUp').classList.remove("show")
    }

  return (
<div className='inputSearchBarContainer'>
    <div className='inputSearchBar' onMouseOver={showDefaultSearchBarPopUp} onMouseOut={hideDefaultSearchBarPopUp}>
        <form method='action' type="submit">
            <input className='searchInput' name='searchInput' type='text' onClick={showFilterSearchBarPopUp} ref={inputRef} placeholder="wedding decoration" value={searchContent} onChange={e=>setSearchContent(e.target.value)}/>
            <div className='searchBarPlaceHolder'>
                <div className='placeHolderItems'>
                    {placeHolderItems.map((placeHolderItem)=><div className='placeHolderItem'>{placeHolderItem.item}</div>)}
                </div>
            </div>
        </form>

    </div>
    <div className='searchBarIcon'>
        <img src={camera} alt='camera' className='searchBarIconDefault'/>
        <img src={cameraO} alt='camera' className='searchBarIconHover'/>
    </div>
    <div className='searchBarbuttonContainer'>
        <button className='searchBarbutton' onClick={()=>setSearchContent(searchContent)}>
            <img src={search} alt='Search'/>
            <span>Search</span>
        </button>
    </div>
    <div className='searchBarPopup' id='searchBarPopup'>
        <div className='filterSearchBarPopUp' id='filterSearchBarPopUp'>
            <div className="searchBarPopUpContainer" id='searchBarPopUpContainer'>
                <div className='recommendSearchContainer'>
                    {SearchBarSuggestions.filter((searchItem)=>{
                        return(searchItem.fullName.toLowerCase().startsWith(searchContent.toLowerCase()))}).map((searchItem)=>{
                            return(<div key={searchContent.id}  style={{padding:"10px 40px", cursor:'pointer'}} onClick={()=>setSearchContent(searchItem.fullName)}>{searchItem.fullName}</div>)
                        })
                    }
                </div>
            </div>
        </div>
        <div className='defaultSearchBarPopUp' id='defaultSearchBarPopUp'>
            <SearchBarPopUp/>
        </div>
    </div>
</div>
  )
}

export default InputSearchBar