import './SearchBarPopUp.css';
import deleteIcon from '../../../assets/images/Icons/deleteBlack.svg'
import deleteIconR from '../../../assets/images/Icons/deleteRed.svg'
import searchIcon from '../../../assets/images/Icons/searchBlack.svg'
import clock from '../../../assets/images/Icons/clockBlack.svg'
import searchbarPopUp from '../../../assets/data/searchBarPopUp';
import { useState } from 'react';


const  SearchBarPopUp = ({setSearchContent , setTopSearchContent}) =>{

    const recommendSearchList= searchbarPopUp[1];
    const historySearchesList = searchbarPopUp[0]; 

    /*const [searchContent, setSearchContent]= useState("");
    const searchContext = useContext(SearchContext);
    
    const searchContentHandler = () =>{
        searchContext.searchHandler(searchContent);
    }*/

const [historySearchesListToShow , setHistorySearchesListToShow]=useState(historySearchesList.slice(0,3))
const [showMoreHistorySearch , setShowMoreHistorySearch] = useState("showMoreHistorySearch")
const [historySearchesSection, setHistorySearchesSection] = useState("historySearchesSection")
const [refreshRecommendSearchList , setRefreshRecommendSearchList] = useState(recommendSearchList)

const refreshRecomendedSearchList = () =>{
    setRefreshRecommendSearchList(searchbarPopUp[Math.floor(Math.random() *searchbarPopUp.length)])
    return refreshRecommendSearchList
}

    return(
        <div>
            <div className='recommendSearchContainer'>
                <div className={historySearchesSection}>
                    <div className='historySearchesTitle'>
                        <div><h3>Recent searches</h3></div>
                        <div className='recentSearchDeleteIcon' onClick={()=>setHistorySearchesSection("historySearchesSection hide")}>
                            <img src={deleteIcon} alt='Delete' className='recentSearchDelete'/>
                            <img src={deleteIconR} alt='Delete' className='recentSearchDeleteHover' /> 
                        </div>
                    </div>
                    <div className='historySearchesList'>
                        {historySearchesListToShow.map((item)=>
                        <div key={item.id} className='historySearchesListItem'
                            onClick={()=>setSearchContent(item.productName)}>
                            <img src={clock} alt='clock'/>
                            {item.productName}
                        </div>)}
                        <div className={showMoreHistorySearch}
                        onClick={()=>{setHistorySearchesListToShow(historySearchesList); setShowMoreHistorySearch("showMoreHistorySearch hide")}}><span>Show more</span><i className="arrowdown"></i></div>
                    </div>
                </div>
                <div className='recommendSearchSection'>
                    <div className='recommendSearchTitle'>
                        <h3>Recommended for you</h3>
                        <div className='refreshBtnContainer' onClick={refreshRecomendedSearchList}>
                            <span className='refreshBtn'>Refresh</span>
                            <span className='refreshIcon'>&#10226;</span>
                        </div>
                    </div>
                    <div className='recommendSearchList'>
                        {refreshRecommendSearchList.map((item)=>
                        <div key={item.id} 
                        className='recommendSearchListItem'
                        onClick= {()=>setSearchContent(item.productName)}>
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