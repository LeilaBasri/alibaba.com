import './WelcomeUser.css'
import business from '../../assets/images/AlibabaImages/Icons/Business.webp'
import Logistics from '../../assets/images/AlibabaImages/Icons/Logistics.webp'
import quotation from '../../assets/images/AlibabaImages/Icons/Quotation.webp'
const WelcomeUser =() =>{
    return(
        <>
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
        </>
    )
}
export default WelcomeUser