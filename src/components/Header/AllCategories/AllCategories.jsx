import './AllCategories.css'

import mainCates from '../../../assets/data/categories'

import Rhinestones from '../../../assets/images/AlibabaImages/final-cate/Rhinestones.avif'
import Buckles from '../../../assets/images/AlibabaImages/final-cate/Buckles.avif'
import WomenDenimSets from '../../../assets/images/AlibabaImages/final-cate/WomenDenimSets.avif'
import AmericanFootballWear from '../../../assets/images/AlibabaImages/final-cate/AmericanFootballWear.avif'
import BowTies from '../../../assets/images/AlibabaImages/final-cate/BowTies.avif'
import { Link } from 'react-router-dom'
import { useState } from 'react'



const AllCategories = ({allCategoriesContainer}) =>{

    const [topCate , setTopCate] = useState("topCategories show");
    const [homeDecorCate , setHomeDecorCate] = useState("homeDecor hide");
    const [industrialCate , setIndustrialCate] = useState("industrial hide");
    const [healthPersonalCareCate , setHealthPersonalCareCate] = useState("healthPersonalCare hide");
    const [fashionBeautyCate , setFashionBeautyCate] = useState("fashionBeauty hide");
    const [sportsEntertainmentCate , setSportsEntertainmentCate] = useState("sportsEntertainment hide");
    const [toolsHomeImprovementCate , setToolsHomeImprovementCate] = useState("toolsHomeImprovement hide");

    function showSecondryCat(id){
        const findCategory = mainCates.find(a=>a.id===id);
        setActiveCate(findCategory.subcatName)
    }

    const [activeCate,setActiveCate]=useState("topCategories");

    
    return(

        <div className={allCategoriesContainer} id='allCategoriesContainer'>

            <div className='mainCategories'>
                {mainCates.map((maincat)=>
                <div className={maincat.subcatName} 
                    key={maincat.id} onMouseOver={()=>showSecondryCat(maincat.id)} 
                    onClick={()=>{setActiveCate(maincat.subcatName);}}>
                    <div className='mainCate'>{maincat.cat}</div>
                </div>)}  
            </div>
            
            <div className='secondaryCategories' id={activeCate}>
                <div className={topCate}>{mainCates[0].subcat.map((topcategory)=><div key={topcategory.id} className='secondaryCate'><img src={topcategory.icon} alt={topcategory.cat}/>{topcategory.cat}</div>)}</div>
                <div className={homeDecorCate}>{mainCates[1].subcat.map((homeDecor)=><div key={homeDecor.id} className='secondaryCate'><img src={homeDecor.icon} alt={homeDecor.cat}/>{homeDecor.cat}</div>)}</div>
                <div className={industrialCate}>{mainCates[2].subcat.map((industrial)=><div key={industrial.id} className='secondaryCate'><img src={industrial.icon} alt={industrial.cat}/>{industrial.cat}</div>)}</div>
                <div className={healthPersonalCareCate}>{mainCates[3].subcat.map((healthPersonalCare)=><div key={healthPersonalCare.id} className='secondaryCate'><img src={healthPersonalCare.icon} alt={healthPersonalCare.cat}/>{healthPersonalCare.cat}</div>)}</div>
                <div className={fashionBeautyCate}>{mainCates[4].subcat.map((fashionBeauty)=><div key={fashionBeauty.id} className='secondaryCate'><img src={fashionBeauty.icon} alt={fashionBeauty.cat}/>{fashionBeauty.cat}</div>)}</div>
                <div className={sportsEntertainmentCate}>{mainCates[5].subcat.map((sportsEntertainment)=><div key={sportsEntertainment.id} className='secondaryCate'><img src={sportsEntertainment.icon} alt={sportsEntertainment.cat}/>{sportsEntertainment.cat}</div>)}</div>
                <div className={toolsHomeImprovementCate}>{mainCates[6].subcat.map((toolsHomeImprovement)=><div key={toolsHomeImprovement.id} className='secondaryCate'><img src={toolsHomeImprovement.icon} alt={toolsHomeImprovement.cat}/>{toolsHomeImprovement.cat}</div>)}</div>
            </div>

            <div className='finalCategories'>
                <Link className='finalCategoriesTitle'>Apparel & Accessories</Link>
                <div className='finalCategoriesItem'>
                    <Link><div className='finalCategoriesImg'><img src={Rhinestones} alt='Rhinestones' loading='lazy'/></div><span>Rhinestones</span></Link>
                    <Link><div className='finalCategoriesImg'><img src={Buckles} alt='Buckles' loading='lazy'/></div><span>Buckles</span></Link>
                    <Link><div className='finalCategoriesImg'><img src={WomenDenimSets} alt='WomenDenimSets' loading='lazy'/></div><span>Women's Denim Sets</span></Link>
                    <Link><div className='finalCategoriesImg'><img src={AmericanFootballWear} alt='AmericanFootballWear' loading='lazy'/></div><span>American Football Wear</span></Link>
                    <Link><div className='finalCategoriesImg'><img src={BowTies} alt='Bow Ties' loading='lazy'/></div><span>Bow Ties</span></Link>
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