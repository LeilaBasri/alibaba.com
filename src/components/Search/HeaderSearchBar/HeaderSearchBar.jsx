import './HeaderSearchBar.css'
import { useState } from 'react'
import InputSearchBar from '../InputSearchBar/InputSearchBar'
import DetectOutsideClick from '../../DetectOutsideClick/DetectOutsideClick';

const HeaderSearchBar = ({searchContent , setSearchContent}) => {
    
    const frequentlySearchedItems=[
        {id:400,searcheditem:'tools'},
        {id:401,searcheditem:'sofa set furniture'},
        {id:402,searcheditem:'furniture'},
        {id:403,searcheditem:'milwaukee tools'}
    ];
    const [filterSearchBarPopUp , setFilterSearchBarPopUp] = useState("filterSearchBarPopUp");
    const [defaultSearchBarPopUp , setDefaultSearchBarPopUp] = useState("defaultSearchBarPopUp");
    function hideTopHeaderSearchBarPopUp(){
        setDefaultSearchBarPopUp("defaultSearchBarPopUp")
        setFilterSearchBarPopUp("filterSearchBarPopUp") 
        setSearchContent("") 
    }
    const showFilterSearchBarPopUp = () => {
        setDefaultSearchBarPopUp("defaultSearchBarPopUp")
        setFilterSearchBarPopUp("filterSearchBarPopUp show")
    }

    return(
        <div className="headerSearchBarContainer">
            <div className='headerSearchBarContent'>            
                <div className='headerSearchBarTabContainer'>            
                    <div className='headerSearchBarTab'><button className='tabSearchBtn active'>Products</button></div>
                    <div className='headerSearchBarTab'><button className='tabSearchBtn'>Manufacturers</button></div>
                </div>
                <div>
                <DetectOutsideClick onClickOutside={hideTopHeaderSearchBarPopUp}>
                    <div className='searchBarContainer'>
                        <div className='inputSearchBarContainer'>
                            <InputSearchBar  searchContent={searchContent}  setSearchContent={setSearchContent} filterSearchBarPopUp={filterSearchBarPopUp} setFilterSearchBarPopUp={setFilterSearchBarPopUp} defaultSearchBarPopUp={defaultSearchBarPopUp} setDefaultSearchBarPopUp={setDefaultSearchBarPopUp}/>
                        </div>
                        <div className='frequentlySearchedContainer'>
                            <span className='frequentlySearchName'>Frequently searched:</span>
                            {frequentlySearchedItems.map((item)=><div key={item.id} onClick={()=>{setSearchContent(item.searcheditem); showFilterSearchBarPopUp()}}>{item.searcheditem}</div>)}
                        </div>
                    </div>
                </DetectOutsideClick>
                </div>
            </div>
        </div>
    )
} 
export default HeaderSearchBar;