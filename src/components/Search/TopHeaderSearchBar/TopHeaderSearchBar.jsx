import './TopHeaderSearchBar.css'
import inCA from '../../../assets/images/AlibabaImages/Icons/inCA.png'
import camera from '../../../assets/images/Icons/cameraBlack.svg'
import cameraO from '../../../assets/images/Icons/cameraorange.svg'
import search from '../../../assets/images/Icons/searchW.svg'
import SearchBarPopUp from '../../Search/SearchBar/SearchBarPopUp'
import SearchBarSuggestions from '../../../assets/data/SearchBarSuggestions'
import { useState } from 'react';
import { useRef , useEffect } from 'react'
import DetectOutsideClick from '../../DetectOutsideClick/DetectOutsideClick'

const TopHeaderSearchBar = ({setIsSearchBarPopup})=>{
    const [topSearchContent ,setTopSearchContent] = useState("");
    const [arrowDown , setArrowDown] = useState("arrowIcon show");
    const [arrowUp , setArrowUp] = useState("arrowIcon hide")
    const [DropdownItemsPanel , setDropdownItemsPanel] = useState("searchBarDropdownItemsPanel hide");
    function showSearchBarDropdown(){
        setDropdownItemsPanel("searchBarDropdownItemsPanel show");
        setIsSearchBarPopup("false")
        setArrowUp("arrowIcon show")
        setArrowDown("arrowIcon hide")
    }
    const [selectedOption,setSelected]=useState("Manufacturers");
    //const [topHeaderSearchContent, setTopHeaderSearchContent]=useState('')
    // const [filterSearchBarPopUp , setFilterSearchBarPopUp] = useState("filterSearchBarPopUp");
    // const [defaultSearchBarPopUp , setDefaultSearchBarPopUp] = useState("defaultSearchBarPopUp");

    function hideSearchBarDropdown(){
        setDropdownItemsPanel("searchBarDropdownItemsPanel hide");
        setArrowUp("arrowIcon hide");
        setArrowDown("arrowIcon block")
    }
    // function showFilterSearchBarPopUp(){
    //     setDefaultSearchBarPopUp("defaultSearchBarPopUp")
    //     setFilterSearchBarPopUp("filterSearchBarPopUp show")
    // }

    const [filterTopHeaderSearchBarPopUp , setFilterTopHeaderSearchBarPopUp] = useState("filterTopHeaderSearchBarPopUp");
    const [defaultTopHeaderSearchBarPopUp , setDefaultTopHeaderSearchBarPopUp] = useState("defaultTopHeaderSearchBarPopUp");
    const inputRef = useRef(null)
    useEffect(()=>{
        document.body.addEventListener("click" , (event)=>{
            if(inputRef.current && inputRef.current.contains(event.target))
                {
                    setDefaultTopHeaderSearchBarPopUp("defaultTopHeaderSearchBarPopUp show")
                }
        })
    })

    function showDefaultTopHeaderSearchBarPopUp(event){
        if(topSearchContent==="" && inputRef.current.contains(event.target)){
            setDefaultTopHeaderSearchBarPopUp("defaultTopHeaderSearchBarPopUp show")
        }
        else if(!topSearchContent==="")
        {
            setDefaultTopHeaderSearchBarPopUp("defaultTopHeaderSearchBarPopUp")
            setFilterTopHeaderSearchBarPopUp("filterTopHeaderSearchBarPopUp show")
        }
    }
    function showFilterTopHeaderSearchBarPopUp(){
        setDefaultTopHeaderSearchBarPopUp("defaultTopHeaderSearchBarPopUp")
        setFilterTopHeaderSearchBarPopUp("filterTopHeaderSearchBarPopUp show")
    }
    function hideTopHeaderSearchBarPopUp(){
        setDefaultTopHeaderSearchBarPopUp("defaultTopHeaderSearchBarPopUp")
        setFilterTopHeaderSearchBarPopUp("filterTopHeaderSearchBarPopUp") 
        setTopSearchContent("") 
    }

    return(
        <div className="topHeaderSearchBarContainer">
            <div className='topHeaderSearchBar'>
            <DetectOutsideClick onClickOutside={hideTopHeaderSearchBarPopUp}>
                <div className='topHeaderSearchBarInner'>
                    <div className='topHeaderSearchBarSwitchDropdown'>

                    <div className='searchBarDropdownItem' 
                    onClick={showSearchBarDropdown}>
                        <div>{selectedOption}</div>
                        <span className={arrowDown} id='arrowDown'>&#x2B9F;</span>
                        <span className={arrowUp} id='arrowUp'>&#x2B9D;</span>
                    </div>
                    
                        <div className='searchBarDropdownItemsPanelContainer'> 
                            <div className={DropdownItemsPanel} id='searchBarDropdownItemsPanel'>
                                <div className='dropdownPanelItem active' id='Manufacturers' onClick={()=>{setSelected("Manufacturers");hideSearchBarDropdown()}}>Manufacturers<span className='checkMark'>&#10004;</span></div>
                                <div className='dropdownPanelItem' id='Products' onClick={()=>{setSelected("Products");hideSearchBarDropdown()}}>Products<span className='checkMark'>&#10004;</span></div>
                                <div className='dropdownPanelItem' id='Suppliers' onClick={()=>{setSelected("Suppliers");hideSearchBarDropdown()}}>Suppliers<span className='checkMark'>&#10004;</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div className='topHeaderSearchBarInput'>
                        
                        <input ref={inputRef} className='SearchBarInput' 
                        type='text' 
                        value={topSearchContent} 
                        maxLength="50" 
                        placeholder='wedding decoration'
                        onChange={(e)=>setTopSearchContent(e.target.value)} 
                        onClick={(event)=>showDefaultTopHeaderSearchBarPopUp}
                        onKeyDown={showFilterTopHeaderSearchBarPopUp}/>

                        <div className='SearchBarInputPlaceholder'>
                            <div><span>wedding decoration</span></div>
                            <div><span>electric scooter</span><div className='placeholderImageContainer'><img height="20px" src={inCA} alt='electric scooter'/><span>in CA</span></div></div>
                            <div><span>tools</span></div>
                        </div>
                    </div>
                    <div className='searchBarIcon topHeaderImg'>
                        <img src={camera} alt='camera' className='searchBarIconDefault'/>
                        <img src={cameraO} alt='camera' className='searchBarIconHover'/>
                    </div>
                    <div className='searchBarbuttonContainer'>
                        <button className='searchBarbutton topHeaderBtn'>
                            <img src={search} alt='Search'/>
                            <span>Search</span>
                        </button>
                    </div>
                    
                    <div className='topHeaderSearchBarPopUp' id='topHeaderSearchBarPopUp'>
                        <div className={filterTopHeaderSearchBarPopUp} id='filterTopHeaderSearchBarPopUp'>
                            <div className="topHeadersearchBarPopUpContainer" id='searchBarPopUpContainer'>
                                <div className='recommendSearchContainer'>
                                    {SearchBarSuggestions.filter((searchItem)=>{
                                        return(searchItem.fullName.toLowerCase().startsWith
                                        (topSearchContent.toLowerCase()))}).map((searchItem)=>{
                                            return(<div key={searchItem.id}  
                                                style={{padding:"10px 40px", cursor:'pointer'}} 
                                                onClick={()=>{setTopSearchContent(searchItem.fullName);showFilterTopHeaderSearchBarPopUp()}}>
                                                    {searchItem.fullName}</div>)
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={defaultTopHeaderSearchBarPopUp} id='defaultTopHeaderSearchBarPopUp'>
                            <div className="topheaderSearchBarPopUpContainer" id='searchBarPopUpContainer'>
                            <SearchBarPopUp setTopSearchContent={setTopSearchContent}/>
                            </div>
                        </div>
                    </div>
                    
                    <div className='topHeaderSearchBarPic'></div>
                    <div className='topHeaderSearchBarBtn'></div>
                    <div className='topHeaderSearchBarPopup'></div>
                </div>
            </DetectOutsideClick>  
            </div>
        </div>
    )
}
export default TopHeaderSearchBar