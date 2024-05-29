import './SearchBarPopUp.css';
import deleteIcon from '../../../assets/images/Icons/deleteBlack.svg'
import deleteIconR from '../../../assets/images/Icons/deleteRed.svg'
import searchIcon from '../../../assets/images/Icons/searchBlack.svg'
import clock from '../../../assets/images/Icons/clockBlack.svg'

const SearchBarPopUp = () =>{

    const historySearchesList =[
        {id:100, productName:'stir fry machine automatic',cat:'productHome',url:'/stirFryMachineAutomatic'},
        {id:111, productName:'sofa set furniture',cat:'productHome',url:'/sofaSetFurniture'},
        {id:113, productName:'auto stirring pot',cat:'productHome',url:'/autoStirringPot'}
    ];
    const recommendSearchList=[
        {id:200, productName:'electric scooter', cat:'',url:'/electricScooter'},
        {id:201, productName:'tools', cat:'',url:'/tools'},
        {id:202, productName:'sofa set furniture', cat:'',url:'/sofaSetFurniture'},
        {id:203, productName:'furniture', cat:'',url:'/furniture'},
        {id:204, productName:'wedding decoration', cat:'',url:'weddingDecoration'},
        {id:205, productName:'milwaukee tools', cat:'',url:'milwaukeeTools'}
    ];

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
                        {historySearchesList.map((item)=><div key={item.id} className='historySearchesListItem'><img src={clock} alt='clock'/>{item.productName}</div>)}
                        <div className='showMoreHistorySearch'><span>Show more</span><i class="arrowdown"></i></div>
                    </div>
                </div>
                <div className='recommendSearchSection'>
                    <div className='recommendSearchTitle'><h3>Recommended for you</h3><div className='refreshBtnContainer'><span className='refreshBtn'>Refresh</span><span className='refreshIcon'>&#10226;</span></div></div>
                    <div className='recommendSearchList'>{recommendSearchList.map((item)=><div key={item.id} className='recommendSearchListItem'><img src={searchIcon} alt='search'/>{item.productName}</div>)}</div>
                    </div>
            </div>
        </div>
    )
}
export default SearchBarPopUp