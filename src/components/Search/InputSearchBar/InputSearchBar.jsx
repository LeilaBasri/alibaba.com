import React from 'react'
import './InputSearchBar.css'
import camera from '../../../assets/images/Icons/cameraBlack.svg'
import cameraO from '../../../assets/images/Icons/cameraorange.svg'
import search from '../../../assets/images/Icons/searchW.svg'
import SearchBarPopUp from '../SearchBar/SearchBarPopUp'
import SearchBarSuggestions from '../../../assets/data/SearchBarSuggestions'
import { useRef, useState , useContext } from 'react'
import { SearchContext } from '../../../context/SearchContext'
import { useEffect } from 'react'

function InputSearchBar() {
    const placeHolderItems=[{item:'wedding decoration' ,ani:'placeHolderItem1'} , {item:'electric bike',ani:'placeHolderItem2'} , {item:'milwaukee tools',ani:'placeHolderItem3'}]

    const searchContext = useContext(SearchContext);
    const [searchContent, setSearchContent]= useState("");
    
    const searchContentHandler = () =>{
        searchContext.searchHandler(searchContent);
    }

    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current=searchContentHandler()
    },[])

    const [filterSearchBarPopUp , setFilterSearchBarPopUp] = useState("filterSearchBarPopUp");
    const [defaultSearchBarPopUp , setDefaultSearchBarPopUp] = useState("defaultSearchBarPopUp");

    function showFilterSearchBarPopUp(){
        setDefaultSearchBarPopUp("defaultSearchBarPopUp")
        setFilterSearchBarPopUp("filterSearchBarPopUp show")
    }
    function showDefaultSearchBarPopUp(){setDefaultSearchBarPopUp("defaultSearchBarPopUp show")}
    function defaultSearchBarPopUpDisplay(){
        if(searchContent===""){
            setFilterSearchBarPopUp("filterSearchBarPopUp");
            setDefaultSearchBarPopUp("defaultSearchBarPopUp show")
        }
        if(!(searchContent==="")){
            setDefaultSearchBarPopUp("defaultSearchBarPopUp")
            setFilterSearchBarPopUp("filterSearchBarPopUp show")

        }
    }
        

  return (
<div className='inputSearchBarContainer'>
    <div className='inputSearchBar' 
        onMouseOver={showDefaultSearchBarPopUp}>

        <form method='action' type="submit">
            <input 
                className='searchInput'
                name='searchInput' 
                type='text' 
                ref={inputRef} 
                placeholder="wedding decoration" 
                value={searchContent} 
                onChange={(e)=>setSearchContent(e.target.value)}
                onClick={showFilterSearchBarPopUp}
                onKeyDown={searchContentHandler}
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
        onClick={()=>setSearchContent(searchContent)}>
            <img src={search} alt='Search'/>
            <span>Search</span>
        </button>
    </div>
    <div className='searchBarPopup' id='searchBarPopup'>
        <div className={filterSearchBarPopUp} id='filterSearchBarPopUp'>
            <div className="searchBarPopUpContainer" id='searchBarPopUpContainer'>
                <div className='recommendSearchContainer'>
                    {SearchBarSuggestions.filter((searchItem)=>{
                        return(searchItem.fullName.toLowerCase().startsWith
                        (searchContent.toLowerCase()))}).map((searchItem)=>{
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
            <SearchBarPopUp />
        </div>
    </div>
</div>
  )
}

export default InputSearchBar