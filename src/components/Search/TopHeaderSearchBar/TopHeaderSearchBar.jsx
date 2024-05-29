import './TopHeaderSearchBar.css'
import inCA from '../../../assets/images/AlibabaImages/Icons/inCA.png'
import camera from '../../../assets/images/Icons/cameraBlack.svg'
import cameraO from '../../../assets/images/Icons/cameraorange.svg'
import search from '../../../assets/images/Icons/searchW.svg'
import SearchBarPopUp from '../../Search/SearchBar/SearchBarPopUp'
import SearchBarSuggestions from '../../../assets/data/SearchBarSuggestions'
import { useState } from 'react';

const TopHeaderSearchBar = ()=>{
    function showSearchBarDropdown(){
        document.getElementById("searchBarDropdownItemsPanel").style.display="block";
        document.getElementById("arrowDown").style.display="none";
        document.getElementById("arrowUp").style.display="block";
    }
    const [selectedOption,setSelected]=useState("Manufacturers");
    const [topHeaderSearchContent, setTopHeaderSearchContent]=useState('')

    function hideSearchBarDropdown(){
        document.getElementById("searchBarDropdownItemsPanel").style.display="none";
        document.getElementById("arrowUp").style.display="none";
        document.getElementById("arrowDown").style.display="block";
    }

    function showDefaultTopHeaderSearchBarPopUp(){
        document.getElementById("defaultTopHeaderSearchBarPopUp").classList.add("show")
    }
    function showFilterTopHeaderSearchBarPopUp(){
        document.getElementById("defaultTopHeaderSearchBarPopUp").classList.remove("show")
        document.getElementById("filterTopHeaderSearchBarPopUp").classList.add("show")
    }

    return(
        <div className="topHeaderSearchBarContainer">
            <div className='topHeaderSearchBar'>
                <div className='topHeaderSearchBarInner'>
                    <div className='topHeaderSearchBarSwitchDropdown'>
                    <div className='searchBarDropdownItem' onClick={showSearchBarDropdown}><div>{selectedOption}</div><span className='arrowIcon' id='arrowDown'>&#x2B9F;</span><span className='arrowIcon' id='arrowUp'>&#x2B9D;</span></div>
                    
                        <div className='searchBarDropdownItemsPanelContainer'> 
                            <div className='searchBarDropdownItemsPanel' id='searchBarDropdownItemsPanel'>
                                <div className='dropdownPanelItem active' id='Manufacturers' onClick={()=>{setSelected("Manufacturers");hideSearchBarDropdown()}}>Manufacturers<span className='checkMark'>&#10004;</span></div>
                                <div className='dropdownPanelItem' id='Products' onClick={()=>{setSelected("Products");hideSearchBarDropdown()}}>Products<span className='checkMark'>&#10004;</span></div>
                                <div className='dropdownPanelItem' id='Suppliers' onClick={()=>{setSelected("Suppliers");hideSearchBarDropdown()}}>Suppliers<span className='checkMark'>&#10004;</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div className='topHeaderSearchBarInput'>
                        <input className='SearchBarInput' type='text' value="" maxLength="50" placeholder='wedding decoration' onClick={showDefaultTopHeaderSearchBarPopUp} onChange={showFilterTopHeaderSearchBarPopUp}/>
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
                        <div className='filterTopHeaderSearchBarPopUp' id='filterTopHeaderSearchBarPopUp'>
                            <div className="topHeadersearchBarPopUpContainer" id='searchBarPopUpContainer'>
                                <div className='recommendSearchContainer'>
                                    {SearchBarSuggestions.filter((searchItem)=>{
                                        return(searchItem.fullName.toLowerCase().startsWith(topHeaderSearchContent.toLowerCase()))}).map((searchItem)=>{
                                            return(<div key={topHeaderSearchContent.id}  style={{padding:"10px 40px", cursor:'pointer'}} onClick={()=>setTopHeaderSearchContent(searchItem.fullName)}>{searchItem.fullName}</div>)
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='defaultTopHeaderSearchBarPopUp' id='defaultTopHeaderSearchBarPopUp'>
                            <SearchBarPopUp/>
                        </div>
                    </div>
                    <div className='topHeaderSearchBarPic'></div>
                    <div className='topHeaderSearchBarBtn'></div>
                    <div className='topHeaderSearchBarPopup'></div>
                </div>
                
            </div>
        </div>
    )
}
export default TopHeaderSearchBar