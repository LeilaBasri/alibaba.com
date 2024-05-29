import './SubHeader.css'
import allCat from '../../../assets/images/Icons/allcategoriesW.svg'
import AllCategories from '../AllCategories/AllCategories'
import allcatBlack from '../../../assets/images/Icons/allcategoriesBlack.svg'
const SubHeader = ()=>{

    function showAllCategories(){
        document.getElementById("allCategoriesContainer").style.display = "flex";
        document.getElementById("topHeaderContainer").classList.add("stckyHeader");
        document.getElementById("darkCover").style.display="block";
        document.getElementById("topSearchbarContainer").style.display="none";
    }
    function hideAllCategories(){
        document.getElementById("allCategoriesContainer").style.display = "none";
        document.getElementById("topHeaderContainer").classList.remove("stckyHeader");
        document.getElementById("darkCover").style.display="none";
        
    }

    return(
        <div className="subHeader">
            <div className="subHeader-Main">

                <div className='headerAllCategoriesContainer' onMouseOver={showAllCategories} onMouseOut={hideAllCategories}>
                    <img src={allCat} alt='All categories' className='allCat'/>
                    <img src={allcatBlack} alt='All categories' className='allcatBlack'/>
                    <span>All categories</span>
                    <AllCategories></AllCategories>
                </div>
                <div>Featured selections</div>
                <div>Trade Assurance</div>
                <div>Alibaba.com Membership</div>
            </div>
            <div className="subHeader-Sub">
                <div>Buyer Central</div>
                <div>Help Center</div>
                <div>Get the app</div>
                <div>Become a supplier</div>
            </div>
        </div>
    )
}
export default SubHeader