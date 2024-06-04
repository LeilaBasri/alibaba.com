import './HeaderSearchBar.css'
import InputSearchBar from '../InputSearchBar/InputSearchBar'

const HeaderSearchBar = ({isSearchBarPopup , searchContent , setSearchContent}) => {
    
    const frequentlySearchedItems=[
        {id:400,searcheditem:'tools'},
        {id:401,searcheditem:'sofa set furniture'},
        {id:402,searcheditem:'furniture'},
        {id:403,searcheditem:'milwaukee tools'}
    ];

    return(
        <div className="headerSearchBarContainer">
            <div className='headerSearchBarContent'>            
                <div className='headerSearchBarTabContainer'>            
                    <div className='headerSearchBarTab'><button className='tabSearchBtn active'>Products</button></div>
                    <div className='headerSearchBarTab'><button className='tabSearchBtn'>Manufacturers</button></div>
                </div>
                <div>
                    <div className='searchBarContainer'>
                        <div className='inputSearchBarContainer'>
                            <InputSearchBar isSearchBarPopup={isSearchBarPopup} searchContent={searchContent}  setSearchContent={setSearchContent}/>
                        </div>
                        <div className='frequentlySearchedContainer'>
                            <span className='frequentlySearchName'>Frequently searched:</span>
                            {frequentlySearchedItems.map((item)=><div key={item.id}>{item.searcheditem}</div>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
export default HeaderSearchBar;