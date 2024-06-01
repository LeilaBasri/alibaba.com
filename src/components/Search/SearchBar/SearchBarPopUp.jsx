import './SearchBarPopUp.css';
import deleteIcon from '../../../assets/images/Icons/deleteBlack.svg'
import deleteIconR from '../../../assets/images/Icons/deleteRed.svg'
import searchIcon from '../../../assets/images/Icons/searchBlack.svg'
import clock from '../../../assets/images/Icons/clockBlack.svg'
import searchbarPopUp from '../../../assets/data/searchBarPopUp';
import { useContext , useState } from 'react';
import { SearchContext } from '../../../context/SearchContext';

const SearchBarPopUp = () =>{

    const recommendSearchList= searchbarPopUp[1];
    const historySearchesList = searchbarPopUp[0];

    const [searchContent, setSearchContent]= useState("");
    const searchContext = useContext(SearchContext);
    
    const searchContentHandler = () =>{
        searchContext.searchHandler(searchContent);
    }

    return(
        <div className="searchBarPopUpContainer" id='searchBarPopUpContainer'>
            <div className='recommendSearchContainer'>
                <div className='historySearchesSection'>
                    <div className='historySearchesTitle'>
                        <div><h3>Recent searches</h3></div>
                        <div className='recentSearchDeleteIcon'>
                            <img src={deleteIcon} alt='Delete' className='recentSearchDelete'/>
                            <img src={deleteIconR} alt='Delete' className='recentSearchDeleteHover' /> 
                        </div>
                    </div>
                    <div className='historySearchesList'>
                        {historySearchesList.map((item)=>
                        <div key={item.id} className='historySearchesListItem'
                            onClick={()=>{setSearchContent(item.productName);searchContentHandler()}}
                            onChange={searchContentHandler}>
                            <img src={clock} alt='clock'/>
                            {item.productName}
                        </div>)}
                        <div className='showMoreHistorySearch'><span>Show more</span><i className="arrowdown"></i></div>
                    </div>
                </div>
                <div className='recommendSearchSection'>
                    <div className='recommendSearchTitle'>
                        <h3>Recommended for you</h3>
                        <div className='refreshBtnContainer'>
                            <span className='refreshBtn'>Refresh</span>
                            <span className='refreshIcon'>&#10226;</span>
                        </div>
                    </div>
                    <div className='recommendSearchList'>
                        {recommendSearchList.map((item)=>
                        <div key={item.id} 
                        className='recommendSearchListItem'
                        onChange={()=>setSearchContent(item.productName)}
                        onClick={searchContentHandler}>
                            <img src={searchIcon} alt='search'/>
                            {item.productName}
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchBarPopUp