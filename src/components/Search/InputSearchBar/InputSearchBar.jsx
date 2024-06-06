import React from 'react'
import './InputSearchBar.css'
import camera from '../../../assets/images/Icons/cameraBlack.svg'
import cameraO from '../../../assets/images/Icons/cameraorange.svg'
import search from '../../../assets/images/Icons/searchW.svg'
import SearchBarPopUp from '../SearchBar/SearchBarPopUp'
import SearchBarSuggestions from '../../../assets/data/SearchBarSuggestions'
import { useState } from 'react'

function InputSearchBar({isSearchBarPopup , setSearchContent , searchContent}) {
    const placeHolderItems=[{item:'wedding decoration' ,ani:'placeHolderItem1'} , {item:'electric bike',ani:'placeHolderItem2'} , {item:'milwaukee tools',ani:'placeHolderItem3'}]

    const [filterSearchBarPopUp , setFilterSearchBarPopUp] = useState("filterSearchBarPopUp");
    const [defaultSearchBarPopUp , setDefaultSearchBarPopUp] = useState("defaultSearchBarPopUp");

    function showFilterSearchBarPopUp(){
        setDefaultSearchBarPopUp("defaultSearchBarPopUp")
        setFilterSearchBarPopUp("filterSearchBarPopUp show")
    }
    function showDefaultSearchBarPopUp()
    {
        if(isSearchBarPopup==="true"){
            setDefaultSearchBarPopUp("defaultSearchBarPopUp show")
        }
    }
        

  return (
<div className='inputSearchBarContainer'>
    <div className='inputSearchBar' 
        onClick={showDefaultSearchBarPopUp}>

        <form method='action' type="submit">
            <input 
                className='searchInput'
                name='searchInput' 
                type='text'  
                placeholder="wedding decoration" 
                value={searchContent} 
                onChange={(e)=>setSearchContent(e.target.value)}
                onClick={showFilterSearchBarPopUp}
                onKeyDown={showFilterSearchBarPopUp}
            />
            <div className='searchBarPlaceHolder'>
                <div className='placeHolderItems'>
                    {placeHolderItems.map((placeHolderItem)=>
                    <div className='placeHolderItem' key={placeHolderItem.ani}>
                        {placeHolderItem.item}
                    </div>)}
                </div>
            </div>
        </form>

    </div>
    <div className='searchBarIcon'>
        <img src={camera} alt='camera' className='searchBarIconDefault'/>
        <img src={cameraO} alt='camera' className='searchBarIconHover'/>
    </div>
    <div className='searchBarbuttonContainer'>
        <button className='searchBarbutton' 
        onClick={showFilterSearchBarPopUp}>
            <img src={search} alt='Search'/>
            <span>Search</span>
        </button>
    </div>
    <div className="searchBarPopup" id='searchBarPopup'>
        <div className={filterSearchBarPopUp} id='filterSearchBarPopUp'>
            <div className="searchBarPopUpContainer" id='searchBarPopUpContainer'>
                <div className='recommendSearchContainer'>
                    {(SearchBarSuggestions.filter((searchItem)=>{
                        return(searchItem.fullName.toLowerCase().startsWith
                        (searchContent.toLowerCase()))})).map((searchItem)=>{
                            return(<div key={searchContent.id}  
                                style={{padding:"10px 40px", cursor:'pointer'}} 
                                onClick={()=>setSearchContent(searchItem.fullName)}>
                                    {searchItem.fullName}
                                    </div>)
                        })
                    }
                </div>
            </div>
        </div>
        <div className={defaultSearchBarPopUp} id='defaultSearchBarPopUp'>
            <div className="searchBarPopUpContainer" id='searchBarPopUpContainer'>
                <SearchBarPopUp setSearchContent={setSearchContent}/>
            </div>
        </div>
    </div>
</div>
  )
}

export default InputSearchBar
/*
import { SearchContext } from '../../../context/SearchContext'
ref={inputRef}
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current=searchContentHandler()
    },[])

        const searchContext = useContext(SearchContext);
    
    const searchContentHandler = () =>{
        searchContext.searchHandler(searchContent);
    }
    
    */