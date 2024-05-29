import LightsLighting from '../images/AlibabaImages/Icons/shopCategoryIcons/LightsLighting.avif'
import ConsumerElectronics from '../images/AlibabaImages/Icons/shopCategoryIcons/ConsumerElectronics.avif'
import Sports from '../images/AlibabaImages/Icons/shopCategoryIcons/SportsEntertainment.avif'
import HomeGarden from '../images/AlibabaImages/Icons/shopCategoryIcons/HomeGarden.avif'
import Jewelry from '../images/AlibabaImages/Icons/shopCategoryIcons/JewelryEyewearWatchesAccessories.avif'
import Beauty from '../images/AlibabaImages/Icons/shopCategoryIcons/Beauty.avif'
import AllCategories from '../images/AlibabaImages/Icons/shopCategoryIcons/AllCategories.avif'
import product1 from '../images/AlibabaImages/products/1.avif'
import product2 from '../images/AlibabaImages/products/2.avif'
import qalive from '../images/AlibabaImages/products/QALIVE.avif'
import qaliveadd from '../images/AlibabaImages/products/QALIVEadd.avif'
import hotPicksLIVE from '../images/AlibabaImages/products/hotPicksLIVE.avif'
import hotPicksLIVEadd from '../images/AlibabaImages/products/hotPicksLIVEadd.avif'
import bestSellers from '../images/AlibabaImages/products/bestSellers.avif'
import quickResponse from '../images/AlibabaImages/products/quickResponse.avif'
import mostPopular  from '../images/AlibabaImages/products/mostPopular.avif'
import OnTimeDelivery from '../images/AlibabaImages/products/OnTimeDelivery.avif'

export const shopCategoryListItems=[
    {id:600, categoryName:'Lights & Lighting' ,icon:LightsLighting},
    {id:601,categoryName:'Consumer Electronics', icon:ConsumerElectronics},
    {id:602,categoryName:'Sports & Entertainment', icon:Sports},
    {id:603,categoryName:'Home & Garden', icon:HomeGarden},
    {id:604,categoryName:'Jewelry, Eyewear, Watches & Accessories', icon:Jewelry},
    {id:605,categoryName:'Beauty', icon:Beauty},
    {id:6006 ,categoryName:'All categories', icon:AllCategories},
];
export const getSampleProduct=[
    {id:630, productName:'Newly released',icon:product1},
    {id:631, productName:'Trending',icon:product2}
];
export const factoryLIVE=[
    {id:610, productName:'Q&A LIVE' , icon:qalive , addImg:qaliveadd},
    {id:611, productName:'Hot picks LIVE' , icon:hotPicksLIVE , addImg:hotPicksLIVEadd}
];
export const topRanking=[
    {id:620, productName:'Quick response',icon:quickResponse},
    {id:621, productName:'Best sellers',icon:bestSellers},
    {id:622, productName:'Most popular',icon:mostPopular},
    {id:623, productName:'On-time Delivery',icon:OnTimeDelivery},
];

const product=[shopCategoryListItems,getSampleProduct,factoryLIVE,topRanking];

export default product