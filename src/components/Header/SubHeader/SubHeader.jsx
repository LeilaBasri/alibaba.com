import './SubHeader.css'
import allCat from '../../../assets/images/Icons/allcategoriesW.svg'
import AllCategories from '../AllCategories/AllCategories'
import allcatBlack from '../../../assets/images/Icons/allcategoriesBlack.svg'
import { useState } from 'react'
const SubHeader = ({setTopHeaderContainer , setTopSearchbarDisplay , setDarkCover})=>{
    const [allCategoriesContainer , setAllCategoriesContainer] = useState("hide");

    function showAllCategories(){
        setAllCategoriesContainer("allCategoriesContainer show");
        setTopHeaderContainer("topHeaderContainer stckyHeader");
        setDarkCover("darkCover show");
        setTopSearchbarDisplay("topSearchbarContainer hide");
    }
    function hideAllCategories(){
        setAllCategoriesContainer("allCategoriesContainer hide");
        setTopHeaderContainer("topHeaderContainer");
        setDarkCover("darkCover hide");       
    }

    return(
        <div className="subHeader">
            <div className="subHeader-Main">

                <div className='headerAllCategoriesContainer subHeaderUnderline' onMouseOver={showAllCategories} onMouseOut={hideAllCategories}>
                    <img src={allCat} alt='All categories' className='allCat'/>
                    <img src={allcatBlack} alt='All categories' className='allcatBlack'/>
                    <span>All categories</span>
                    <AllCategories allCategoriesContainer={allCategoriesContainer}></AllCategories>
                </div>
                <div className='subHeaderUnderline'>Featured selections</div>
                <div className='subHeaderUnderline'>Trade Assurance</div>
                <div className='subHeaderUnderline'>Alibaba.com Membership</div>
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