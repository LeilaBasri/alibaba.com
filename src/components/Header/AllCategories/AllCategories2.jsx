import './AllCategories.css'
import icon1 from '../../../assets/images/AlibabaImages/Icons/Apparel-Accessories.png'
import icon2 from '../../../assets/images/AlibabaImages/Icons/ConsumerElectronics.png'
import icon3 from '../../../assets/images/AlibabaImages/Icons/HomeGarden.png'
import icon4 from '../../../assets/images/AlibabaImages/Icons/SportsEntertainment.png'
import icon5 from '../../../assets/images/AlibabaImages/Icons/Beauty.png'
import icon6 from '../../../assets/images/AlibabaImages/Icons/IndustrialMachinery.png'
import icon7 from '../../../assets/images/AlibabaImages/Icons/PackagingPrinting.png'
import icon8 from '../../../assets/images/AlibabaImages/Icons/MotherKidsToys.png'
import icon9 from '../../../assets/images/AlibabaImages/Icons/ShoesAccessories.png'
import icon10 from '../../../assets/images/AlibabaImages/Icons/JewelryEyewearWatchesAccessories.png'
import icon11 from '../../../assets/images/AlibabaImages/Icons/GiftsCrafts.png'
import icon12 from '../../../assets/images/AlibabaImages/Icons/HomeGarden.png'
import icon13 from '../../../assets/images/AlibabaImages/Icons/ConstructionRealEstate.png'
import icon14 from '../../../assets/images/AlibabaImages/Icons/LightsLighting.png'
import icon15 from '../../../assets/images/AlibabaImages/Icons/Furniture.png'
import icon16 from '../../../assets/images/AlibabaImages/Icons/PetSupplies.png'
import icon21 from '../../../assets/images/AlibabaImages/Icons/IndustrialMachinery.png'
import icon22 from '../../../assets/images/AlibabaImages/Icons/VehiclesTransportation.png'
import icon23 from '../../../assets/images/AlibabaImages/Icons/CommercialServiceEquipment.png'
import icon24 from '../../../assets/images/AlibabaImages/Icons/FabricationServices.png'
import icon25 from '../../../assets/images/AlibabaImages/Icons/RenewableEnergy.png'
import icon26 from '../../../assets/images/AlibabaImages/Icons/ToolsHardware.png'
import icon27 from '../../../assets/images/AlibabaImages/Icons/MaterialHandling.png'
import icon28 from '../../../assets/images/AlibabaImages/Icons/PowerTransmission.png'
import icon29 from '../../../assets/images/AlibabaImages/Icons/ElectricalEquipmentSupplies.png'
import icon30 from '../../../assets/images/AlibabaImages/Icons/VehiclePartsAccessories.png'
import icon31 from '../../../assets/images/AlibabaImages/Icons/ConstructionBuildingMachinery.png'
import icon32 from '../../../assets/images/AlibabaImages/Icons/ElectronicComponentsAccessoriesTelecommunications.png'
import icon33 from '../../../assets/images/AlibabaImages/Icons/VehicleAccessoriesElectronicsTools.png'
import icon41 from '../../../assets/images/AlibabaImages/Icons/FoodBeverage.png'
import icon42 from '../../../assets/images/AlibabaImages/Icons/MedicalDevicesSupplies.png'
import icon43 from '../../../assets/images/AlibabaImages/Icons/SportsEntertainment.png'
import icon44 from '../../../assets/images/AlibabaImages/Icons/PackagingPrinting.png'
import icon45 from '../../../assets/images/AlibabaImages/Icons/PersonalCareHouseholdCleaning.png'
import icon46 from '../../../assets/images/AlibabaImages/Icons/MotherKidsToys.png'
import icon47 from '../../../assets/images/AlibabaImages/Icons/HealthCare.png'
import icon51 from '../../../assets/images/AlibabaImages/Icons/ShoesAccessories.png'
import icon52 from '../../../assets/images/AlibabaImages/Icons/Apparel-Accessories.png'
import icon53 from '../../../assets/images/AlibabaImages/Icons/LuggageBagsCases.png'
import icon54 from '../../../assets/images/AlibabaImages/Icons/JewelryEyewearWatchesAccessories.png'
import icon55 from '../../../assets/images/AlibabaImages/Icons/PackagingPrinting.png'
import icon56 from '../../../assets/images/AlibabaImages/Icons/Beauty.png'
import icon61 from '../../../assets/images/AlibabaImages/Icons/ConsumerElectronics.png'
import icon62 from '../../../assets/images/AlibabaImages/Icons/HomeAppliances.png'
import icon63 from '../../../assets/images/AlibabaImages/Icons/SportsEntertainment.png'
import icon71 from '../../../assets/images/AlibabaImages/Icons/ConstructionRealEstate.png'
import icon72 from '../../../assets/images/AlibabaImages/Icons/ToolsHardware.png'
import icon73 from '../../../assets/images/AlibabaImages/Icons/LightsLighting.png'
import icon74 from '../../../assets/images/AlibabaImages/Icons/Furniture.png'
import icon75 from '../../../assets/images/AlibabaImages/Icons/RenewableEnergy.png'
import icon76 from '../../../assets/images/AlibabaImages/Icons/ElectricalEquipmentSupplies.png'
import icon77 from '../../../assets/images/AlibabaImages/Icons/Safety.png'
import icon78 from '../../../assets/images/AlibabaImages/Icons/Security.png'
import icon79 from '../../../assets/images/AlibabaImages/Icons/ConsumerElectronics.png'
import { useState } from 'react'


const AllCategories = () =>{
    
    const topCategories=[
        {id:1 , topcat:'Apparel & Accessories' , icon:icon1},
        {id:2 , topcat:'Consumer Electronics' , icon:icon2},
        {id:3 , topcat:'Home & Garden' , icon:icon3},
        {id:4 , topcat:'Sports & Entertainment' , icon: icon4},
        {id:5 , topcat:'Beauty' , icon: icon5},
        {id:6 , topcat:'Industrial Machinery' , icon: icon6},
        {id:7 , topcat:'Packaging & Printing' , icon: icon7},
        {id:8 , topcat:'Mother, Kids & Toys' , icon: icon8},
        {id:9 , topcat:'Shoes & Accessories' , icon: icon9},
        {id:10 , topcat:'Jewelry, Eyewear, Watches & Accessories' , icon: icon10}
    ];
    const homeDecors=[
        {id:1 , cat:'Gifts & Crafts' , icon:icon11},
        {id:1 , cat:'Home & Garden' , icon:icon12},
        {id:1 , cat:'Construction & Real Estate' , icon:icon13},
        {id:1 , cat:'Lights & Lighting' , icon:icon14},
        {id:1 , cat:'Furniture' , icon:icon15},
        {id:1 , cat:'Pet Supplies' , icon:icon16}
    ];
    const industrials=[
        {id:21 , cat:'Industrial Machinery', icon:icon21},
        {id:22 , cat:'Vehicles & Transportation', icon:icon22},
        {id:23 , cat:'Commercial Service Equipment', icon:icon23},
        {id:24 , cat:'Fabrication Services', icon:icon24},
        {id:25 , cat:'Renewable Energy', icon:icon25},
        {id:26 , cat:'Tools & Hardware', icon:icon26},
        {id:27 , cat:'Material Handling', icon:icon27},
        {id:28 , cat:'Power Transmission', icon:icon28},
        {id:29 , cat:'Electrical Equipment & Supplies', icon:icon29},
        {id:30 , cat:'Vehicle Parts & Accessories', icon:icon30},
        {id:31 , cat:'Construction & Building Machinery', icon:icon31},
        {id:32 , cat:'Electronic Components, Accessories & Telecommunications', icon:icon32},
        {id:33 , cat:'Vehicle Accessories, Electronics, & Tools', icon:icon33}
    ];
    const healthPersonalCares=[
        {id:41, cat:'Food & Beverage' , icon:icon41},
        {id:42, cat:'Medical devices & Supplies' , icon:icon42},
        {id:43, cat:'Sports & Entertainment' , icon:icon43},
        {id:44, cat:'Packaging & Printing' , icon:icon44},
        {id:45, cat:'Personal Care & Household Cleaning' , icon:icon45},
        {id:46, cat:'Mother, Kids & Toys' , icon:icon46},
        {id:47, cat:'Health Care' , icon:icon47},
    ];
    const fashionBeauties=[
        {id:51, cat:'Shoes & Accessories' , icon:icon51},
        {id:52, cat:'Jewelry, Eyewear, Watches & Accessories' , icon:icon52},
        {id:53, cat:'Luggage, Bags & Cases' , icon:icon53},
        {id:54, cat:'Jewelry, Eyewear, Watches & Accessories' , icon:icon54},
        {id:55, cat:'Packaging & Printing' , icon:icon55},
        {id:56, cat:'Beauty' , icon:icon56}
    ];
    const sportsEntertainments=[
        {id:1, cat:'Consumer Electronics', icon:icon61},
        {id:2, cat:'Home Appliances', icon:icon62},
        {id:3, cat:'Sports & Entertainment', icon:icon63}
    ];
    const toolsHomeImprovements=[
        {id:71, cat:'Construction & Real Estate', icon:icon71},
        {id:72, cat:'Tools & Hardware', icon:icon72},
        {id:73, cat:'Lights & Lighting', icon:icon73},
        {id:74, cat:'Furniture', icon:icon74},
        {id:75, cat:'Renewable Energy', icon:icon75},
        {id:76, cat:'Electrical Equipment & Supplies', icon:icon76},
        {id:77, cat:'Safety', icon:icon77},
        {id:78, cat:'Security', icon:icon78},
        {id:79, cat:'Consumer Electronics', icon:icon79}
    ];

    const rawMaterials=[
        {id:1, cat:'Consumer Electronics', icon:icon61},
        {id:2, cat:'Home Appliances', icon:icon62},
        {id:3, cat:'Sports & Entertainment', icon:icon63}
    ];
    const operations=[
        {id:1, cat:'Consumer Electronics', icon:icon61},
        {id:2, cat:'Home Appliances', icon:icon62},
        {id:3, cat:'Sports & Entertainment', icon:icon63}
    ];

        const mainCates=[
        {id:1 , cat:'Top categories' , subcat:topCategories},
        {id:2 , cat:'Home Decor' , subcat:homeDecors},
        {id:3 , cat:'Industrial' , subcat:industrials},
        {id:4 , cat:'Health & Personal Care' , subcat:healthPersonalCares},
        {id:5 , cat:'Fashion & Beauty' , subcat:fashionBeauties},
        {id:6 , cat:'Sports & Entertainment' , subcat:sportsEntertainments},
        {id:7 , cat:'Tools & Home Improvement' , subcat:toolsHomeImprovements},
        {id:8 , cat:'Raw Materials' , subcat:rawMaterials},
        {id:9 , cat:'Maintenance, Repair & Operations' , subcat:operations}
    ];
    const [categories, setCategories] = useState(topCategories);
    function handleMoseOver(maincat){
        setCategories(maincat.subcat)
    }
    return(
        <div className='allCategoriesContainer'>
            <div className='mainCategories'>
                {mainCates.map((maincat)=><div key={maincat.id} onMouseOver={handleMoseOver({maincat})}>{maincat.cat}</div>)}  
            </div>
            <div className='secondaryCategories'>
                {{categories}.map(({category})=><div key={{category}.id}><img src={{category}.icon} alt={{category}.topcat}/>{{category}.topcat}</div>)}
            </div>
            <div className='finalCategories'>
                
            </div>

        </div>
    )
}
export default AllCategories
/*
                <div className='topCategories {mainCates[0].catStyle}' onClick={()=>{setActiveCate("topCategories");activeCategory();}}>{topCategories.map((topcategory)=><div className={topcategory.statusCate} key={topcategory.id}><img src={topcategory.icon} alt={topcategory.topcat}/>{topcategory.topcat}</div>)}</div>
                <div className='homeDecors {mainCates[1].catStyle}' onClick={()=>{setActiveCate("homeDecors");activeCategory()}} style={divStyle}>{homeDecors.map((homeDecor)=><div className={homeDecor.statusCate} key={homeDecor.id}><img src={homeDecor.icon} alt={homeDecor.cat}/>{homeDecor.cat}</div>)}</div>
                <div className='industrials {mainCates[2].catStyle}' onClick={()=>{setActiveCate("industrials");activeCategory()}} style={divStyle}>{industrials.map((industrial)=><div className={industrial.statusCate} key={industrial.id}><img src={industrial.icon} alt={industrial.cat}/>{industrial.cat}</div>)}</div>
                <div className='healthPersonalCares {mainCates[3].catStyle}' onClick={()=>{setActiveCate("healthPersonalCares");activeCategory()}} style={divStyle}>{healthPersonalCares.map((healthPersonalCare)=><div className={healthPersonalCare.statusCate} key={healthPersonalCare.id}><img src={healthPersonalCare.icon} alt={healthPersonalCare.cat}/>{healthPersonalCare.cat}</div>)}</div>
                <div className='fashionBeauties {mainCates[4].catStyle}' onClick={()=>{setActiveCate("fashionBeauties");activeCategory()}} style={divStyle}>{fashionBeauties.map((fashionBeauty)=><div className={fashionBeauty.statusCate} key={fashionBeauty.id}><img src={fashionBeauty.icon} alt={fashionBeauty.cat}/>{fashionBeauty.cat}</div>)}</div>
                <div className='sportsEntertainments {mainCates[5].catStyle}' onClick={()=>{setActiveCate("sportsEntertainments");activeCategory()}} style={divStyle}>{sportsEntertainments.map((sportsEntertainment)=><div className={sportsEntertainment.statusCate} key={sportsEntertainment.id}><img src={sportsEntertainment.icon} alt={sportsEntertainment.cat}/>{sportsEntertainment.cat}</div>)}</div>
                <div className='toolsHomeImprovements {mainCates[6].catStyle}' onClick={()=>{setActiveCate("toolsHomeImprovements");activeCategory()}} style={divStyle}>{toolsHomeImprovements.map((toolsHomeImprovement)=><div className={toolsHomeImprovement.statusCate} key={toolsHomeImprovement.id}><img src={toolsHomeImprovement.icon} alt={toolsHomeImprovement.cat}/>{toolsHomeImprovement.cat}</div>)}</div>
 */