import React from 'react'
import './InputSearchBar.css'
import camera from '../../../assets/images/Icons/cameraBlack.svg'
import cameraO from '../../../assets/images/Icons/cameraorange.svg'
import search from '../../../assets/images/Icons/searchW.svg'
import SearchBarPopUp from '../SearchBar/SearchBarPopUp'
import SearchBarSuggestions from '../../../assets/data/SearchBarSuggestions'
import { useRef } from 'react'


function InputSearchBar({setSearchContent , searchContent , filterSearchBarPopUp, setFilterSearchBarPopUp, defaultSearchBarPopUp, setDefaultSearchBarPopUp}) {
    const placeHolderItems=[{item:'wedding decoration' ,ani:'placeHolderItem1'} , {item:'electric bike',ani:'placeHolderItem2'} , {item:'milwaukee tools',ani:'placeHolderItem3'}]

    const inputSearchRef=useRef(null)
    function showFilterSearchBarPopUp(){
        setDefaultSearchBarPopUp("defaultSearchBarPopUp")
        setFilterSearchBarPopUp("filterSearchBarPopUp show")
    }
    function showDefaultSearchBarPopUp(event)
    {
        if(searchContent==="" && inputSearchRef.current.contains(event.target)){
            setDefaultSearchBarPopUp("defaultSearchBarPopUp show")
        }
        else if(!searchContent==="")
        {
            setDefaultSearchBarPopUp("defaultSearchBarPopUp")
            setFilterSearchBarPopUp("filterSearchBarPopUp show")
            setSearchContent(event.target.value) ;
        }
    }
        

  return (
        <div className='inputSearchBarContainer'>
            <div className='inputSearchBar' 
                onClick={(event)=>showDefaultSearchBarPopUp(event)}>

                <form method='action' type="submit">
                    <input
                        ref={inputSearchRef} 
                        className='searchInput'
                        name='searchInput' 
                        type='text'  
                        placeholder="wedding decoration" 
                        value={searchContent} 
                        onChange={(e)=>setSearchContent(e.target.value)}
                        onClick={(e)=>{showDefaultSearchBarPopUp(e)}}
                        onKeyDown={(e)=>{setSearchContent(e.target.value) ; showFilterSearchBarPopUp()}}
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
                onClick={(e)=>{setSearchContent(e.target.value) ; showFilterSearchBarPopUp()}}>
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
                                        onClick={(e)=>{setSearchContent(searchItem.fullName);setSearchContent(e.target.value) ; showFilterSearchBarPopUp()}}>
                                            {searchItem.fullName}
                                            </div>)
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={defaultSearchBarPopUp} id='defaultSearchBarPopUp'>
                    <div className="searchBarPopUpContainer" id='searchBarPopUpContainer'>
                        <SearchBarPopUp setSearchContent={setSearchContent} setFilterSearchBarPopUp={setFilterSearchBarPopUp} setDefaultSearchBarPopUp={setDefaultSearchBarPopUp}/>
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