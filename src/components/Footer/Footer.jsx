import './Footer.css'
import facebook from '../../assets/images/AlibabaImages/Icons/Social/facebook.png'
import instagram from '../../assets/images/AlibabaImages/Icons/Social/instagram.png'
import linkedIn from '../../assets/images/AlibabaImages/Icons/Social/linkedIn.png'
import tiktok from '../../assets/images/AlibabaImages/Icons/Social/tiktok.png'
import twitter from '../../assets/images/AlibabaImages/Icons/Social/twitter.png'
import youtube from '../../assets/images/AlibabaImages/Icons/Social/youtube.png'
import appStore from '../../assets/images/AlibabaImages/Icons/appStore.avif'
import googlePlay from '../../assets/images/AlibabaImages/Icons/googlePlay.avif'
import { Link } from 'react-router-dom'

const Footer = () =>{
    return(
        <div className="footerContainer">
            <div className='topFooter'>
            <div className='footerContent'>
                <div className='getSupport'>
                    <h3>Get support</h3>
                    <div>
                        <Link to="/">Help Center</Link>
                        <Link to="/">Live chat</Link>
                        <Link to="/">Check order status</Link>
                        <Link to="/">Refunds</Link>
                        <Link to="/">Report abuse</Link>
                    </div>
                </div>
                <div className='tradeAssurance'>
                    <h3>Trade Assurance</h3>
                    <div>
                        <Link to="/">Safe and easy payments</Link>
                        <Link to="/">Money-back policy</Link>
                        <Link to="/">On-time shipping</Link>
                        <Link to="/">After-sales protections</Link>
                        <Link to="/">Product monitoring services</Link>
                    </div>
                </div>
                <div className='sourceOnAlibaba'>
                    <h3>Source on Alibaba.com</h3>
                    <div>
                        <Link to="/">Request for Quotation</Link>
                        <Link to="/">Membership program</Link>
                        <Link to="/">Alibaba.com Logistics</Link>
                        <Link to="/">Sales tax and VAT</Link>
                        <Link to="/">Alibaba.com Reads</Link>
                    </div>
                </div>
                <div className='sellOnAlibaba'>
                    <h3>Sell on Alibaba.com</h3>
                    <div>                        
                        <Link to="/">Start selling</Link>
                        <Link to="/">Seller Central</Link>
                        <Link to="/">Become a Verified Supplier</Link>
                        <Link to="/">Partnerships</Link>
                        <Link to="/">Download the app for suppliers</Link>
                    </div>
                </div>
                <div className='getToKnowUs'>
                    <h3>Get to know us</h3>
                    <div>
                        <Link to="/">About Alibaba.com</Link>
                        <Link to="/">Corporate responsibility</Link>
                        <Link to="/">News center</Link>
                        <Link to="/">Careers</Link>
                    </div>
                </div>
            </div>
            <div className='footerBottom'>
                <div className='footerSocial'>
                    <Link to="/"><img src={facebook} alt='facebook'/></Link>
                    <Link to="/"><img src={instagram} alt='instagram'/></Link>
                    <Link to="/"><img src={linkedIn} alt='linkedIn'/></Link>
                    <Link to="/"><img src={tiktok} alt='tiktok'/></Link>
                    <Link to="/"><img src={twitter} alt='twitter'/></Link>
                    <Link to="/"><img src={youtube} alt='youtube'/></Link> 
                </div>
                <div className='getApp'>
                    <div>Trade on the go with the  <Link to="/">Alibaba.com app</Link></div>
                    <Link to="/"><img src={appStore} alt='appStore'/></Link>
                    <Link to="/"><img src={googlePlay} alt='googlePlay'/></Link>
                </div>
            </div>
            </div>
            <div className='footerInfo'>
                <div className='group-links'>
                    <Link to="/">AliExpress</Link>
                    <Link to="/">1688.com</Link>
                    <Link to="/">Tmall Taobao World</Link>
                    <Link to="/">Alipay</Link>
                    <Link to="/">Lazada</Link>
                    <Link to="/">Taobao Global</Link>
                </div>
                <div className='infosContent'>
                    <Link to="/">Policies and rules</Link>
                    <Link to="/">Legal Notice</Link>
                    <Link to="/">Product Listing Policy</Link>
                    <Link to="/">Intellectual Property Protection</Link>
                    <Link to="/">Privacy Policy</Link>
                    <Link to="/">Terms of Use</Link>
                    <Link to="/">Integrity Compliance</Link>
                </div>
            </div>
        </div>
    )
}
export default Footer