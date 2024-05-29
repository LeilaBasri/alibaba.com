import './Home.css'

import business from '../../assets/images/AlibabaImages/Icons/Business.webp'
import Logistics from '../../assets/images/AlibabaImages/Icons/Logistics.webp'
import quotation from '../../assets/images/AlibabaImages/Icons/Quotation.webp'
import userAvatar from '../../assets/images/AlibabaImages/Icons/avatar.png'
import FactoryLIVE from '../../assets/images/AlibabaImages/Icons/shopCategoryIcons/FactoryLIVE.gif'

import product from '../../assets/data/product'
import ShopCategory from '../../components/Product/ShopCategory/ShopCategory'

const Home = () => {


    const userName="Guest";

    const getSampleProduct = product[1]
    const factoryLIVE = product[2]
    const topRanking = product[3]

    return(
        <div className="homeContainer">
            <div className="welcomeUserContainer">
                <div className='welcomeUserLayout'>
                    <div className="welcomeUser"><h3>Welcome to Alibaba.com</h3></div>
                    <div className="welcomeNavigate">
                        <div className='welcomeNavigateItem'><img src={quotation} alt='quotation'/><span>Request for Quotation</span></div>
                        <div className='welcomeNavigateItem'><img src={business} alt='business'/><span>Alibaba.com Business+</span></div>
                        <div className='welcomeNavigateItem'><img src={Logistics} alt='Logistics'/><span>Alibaba.com Logistics</span></div>
                    </div>
                </div>
            </div>

            <div className="boxes">
                <ShopCategory/>
                <div className='middleCardContainer'>
                    <div className='getSamples'>
                        <h3>Get samples</h3>
                        <div className='getSampleProductsContainer'>
                            <div className='getSampleProduct'>{getSampleProduct.map((item)=><div className='products'><div className='maskImgContainer'><img src={item.icon} alt={item.productName}/><div className='mask'></div></div> <span className='productName'>{item.productName}</span></div>)}</div>
                        </div>
                    </div>
                    <div className='liveReception'>
                        <h3><img src={FactoryLIVE} alt='FactoryLIVE' className='factoryLIVEImage'/>Factory LIVE Q&A</h3>
                        <div  className='products'>
                            {factoryLIVE.map((item)=><div><div className='maskImgContainer'><div className='liveReceptionImgages'><img src={item.icon} alt={item.productName} className='liveReceptionImg' /><img src={item.addImg} alt={item.productName} className='liveReceptionAddImg' /></div><div className='mask'></div></div><span className='productName'>{item.productName}</span></div>)}
                        </div>
                    </div>
                </div>
                <div>
                <div className='topRankingContainer'>
                    <h3>Top-ranking manufacturers</h3>
                    <div className='topRankingProducts'>{topRanking.map((item)=><div key={item.id} className='topRankingProduct'>
                        <div className='topRankingProductImg'>
                            <div className='maskImgContainer'>
                                <img src={item.icon} alt={item.productName}/>
                                <div className='mask'></div>
                            </div>
                        </div>
                        <span className='productName'>{item.productName}</span>
                        </div>)}
                    </div>
                </div>
                </div>
                <div className='userContainer'>
                    <div className='userWelcomeContainer'>
                        <div className='userWelcome'>
                            <div className='userAvatar'><img src={userAvatar} alt='user'/></div>
                            <div className='welcome'>
                                <span>Welcome!</span>
                                <span className='userName'>{userName}</span>
                            </div>
                        </div>
                        <div className='loginContainer'>
                            <div className='signInWelcome'><span>Sign in</span></div>
                            <div className='joinWelcome'><span>Join for free</span></div>
                        </div>
                    </div>
                    <div class="userOperateContainer">
                        <h4>One request, multiple quotes</h4>
                        <div className='moreInfo'>
                            <div>
                                <strong>160,000+</strong>
                                <span>Active suppliers</span>
                            </div>
                            <div>
                                <strong>&#60;19h</strong>
                                <span>Average response time</span>
                                </div>
                            <div>
                                <strong>7675</strong>
                                <span>Industries</span>
                            </div>
                        </div>
                        <div className='requestQuotationBtn'><span>Request for Quotation</span></div>
                    </div>
                </div>
            </div> 
            <div className="recomendFactory"></div>
            <div className="toolbar"></div>     
        </div>
    )
}
export default Home