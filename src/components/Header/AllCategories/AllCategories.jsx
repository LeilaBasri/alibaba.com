import './AllCategories.css'

import mainCates from '../../../assets/data/categories'

import Rhinestones from '../../../assets/images/AlibabaImages/final-cate/Rhinestones.avif'
import Buckles from '../../../assets/images/AlibabaImages/final-cate/Buckles.avif'
import WomenDenimSets from '../../../assets/images/AlibabaImages/final-cate/WomenDenimSets.avif'
import AmericanFootballWear from '../../../assets/images/AlibabaImages/final-cate/AmericanFootballWear.avif'
import BowTies from '../../../assets/images/AlibabaImages/final-cate/BowTies.avif'
import { useState } from 'react'



const AllCategories = () =>{


    let divStyle = {display: 'none'}

    function showSecondryCat(id){
        const findCategory = mainCates.find(a=>a.id===id);
        console.log(findCategory.catStyle)
        //if(maincat==findCategory):(findCategory.catStyle="show")?maincat.catStyle="hide"
        mainCates.map((maincat)=>maincat.catStyle="hide");
        findCategory.catStyle="show"; 
        console.log(findCategory.catStyle)      
    }

    const [activeCate,setActiveCate]=useState("topCategories");
    //const[statusCate,setStatusCate]=useState("inactiveCate")
    function activeCategory(){
        //mainCates.map((maincat)=>{{maincat.statusCate}});
        document.getElementById(activeCate).classList.add("activeCate");
    }
    
    return(
        <div className='allCategoriesContainer' id='allCategoriesContainer'>

            <div className='mainCategories'>
                {mainCates.map((maincat)=><div className={maincat.statusCate} id={maincat.subcatName} key={maincat.id} onMouseOver={showSecondryCat(maincat.id)} onClick={()=>{setActiveCate(maincat.subcatName);activeCategory();}}>{maincat.cat}</div>)}  
            </div>
            
            <div className='secondaryCategories'>
                <div className='topCategories'>{mainCates[0].subcat.map((topcategory)=><div key={topcategory.id}><img src={topcategory.icon} alt={topcategory.cat}/>{topcategory.cat}</div>)}</div>
                <div className={mainCates[1].catStyle} style={divStyle}>{mainCates[1].subcat.map((homeDecor)=><div key={homeDecor.id}><img src={homeDecor.icon} alt={homeDecor.cat}/>{homeDecor.cat}</div>)}</div>
                <div className={mainCates[2].catStyle} style={divStyle}>{mainCates[2].subcat.map((industrial)=><div key={industrial.id}><img src={industrial.icon} alt={industrial.cat}/>{industrial.cat}</div>)}</div>
                <div className={mainCates[3].catStyle} style={divStyle}>{mainCates[3].subcat.map((healthPersonalCare)=><div key={healthPersonalCare.id}><img src={healthPersonalCare.icon} alt={healthPersonalCare.cat}/>{healthPersonalCare.cat}</div>)}</div>
                <div className={mainCates[4].catStyle} style={divStyle}>{mainCates[4].subcat.map((fashionBeauty)=><div key={fashionBeauty.id}><img src={fashionBeauty.icon} alt={fashionBeauty.cat}/>{fashionBeauty.cat}</div>)}</div>
                <div className={mainCates[5].catStyle} style={divStyle}>{mainCates[5].subcat.map((sportsEntertainment)=><div key={sportsEntertainment.id}><img src={sportsEntertainment.icon} alt={sportsEntertainment.cat}/>{sportsEntertainment.cat}</div>)}</div>
                <div className={mainCates[6].catStyle} style={divStyle}>{mainCates[6].subcat.map((toolsHomeImprovement)=><div key={toolsHomeImprovement.id}><img src={toolsHomeImprovement.icon} alt={toolsHomeImprovement.cat}/>{toolsHomeImprovement.cat}</div>)}</div>
            </div>

            <div className='finalCategories'>
                <a href="javascript:void(0)" className='finalCategoriesTitle'>Apparel & Accessories</a>
                <div className='finalCategoriesItem'>
                    <a href="javascript:void(0)"><div className='finalCategoriesImg'><img src={Rhinestones} alt='Rhinestones' loading='lazy'/></div><span>Rhinestones</span></a>
                    <a href="javascript:void(0)"><div className='finalCategoriesImg'><img src={Buckles} alt='Buckles' loading='lazy'/></div><span>Buckles</span></a>
                    <a href="javascript:void(0)"><div className='finalCategoriesImg'><img src={WomenDenimSets} alt='WomenDenimSets' loading='lazy'/></div><span>Women's Denim Sets</span></a>
                    <a href="javascript:void(0)"><div className='finalCategoriesImg'><img src={AmericanFootballWear} alt='AmericanFootballWear' loading='lazy'/></div><span>American Football Wear</span></a>
                    <a href="javascript:void(0)"><div className='finalCategoriesImg'><img src={BowTies} alt='Bow Ties' loading='lazy'/></div><span>Bow Ties</span></a>
                </div>              
            </div>

        </div>
    )
}
export default AllCategories
/*
                    {findSecondaryCategory = mainCates.find(a=>a.catStyle==="show")
                    findSecondaryCategory.subcat.map((subcategory)=><div className={subcategory.statusCate} key={subcategory.id}>
                        <img src={subcategory.icon} alt='icon'/>{subcategory.topcat}</div>)}
*/