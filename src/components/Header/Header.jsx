import './Header.css'
import SubHeader from "./SubHeader/SubHeader";
import logo from '../../assets/images/AlibabaImages/Icons/ca.png'
import currentLanguage from '../../assets/images/Icons/languageW.svg'
import currentLanguageSH from '../../assets/images/Icons/languageBlack.svg'
import customer from '../../assets/images/Icons/userW.svg'
import customerSH from '../../assets/images/Icons/userBlack.svg'
import HeaderSearchBar from '../Search/HeaderSearchBar/HeaderSearchBar';
import TopHeaderSearchBar from '../Search/TopHeaderSearchBar/TopHeaderSearchBar'
import { Link } from 'react-router-dom';

const Header = () =>{
    window.onscroll=function() {stckyHeader()};
    function stckyHeader(){
        if (window.scrollY >= 20) {
            document.getElementById("topHeader").classList.add("stckyHeader");
            document.getElementById("topSearchbarContainer").style.display="flex";
        }
        else{
            document.getElementById("topHeader").classList.remove("stckyHeader");
            document.getElementById("topSearchbarContainer").style.display="none";
        }      
    }
    return(
        <div className="homeHeaderContainer">
            <div className='homeHeader'></div>
            <div className='darkCover' id='darkCover'></div>
            <div className='headerAndSearchContainer'>
                <div className='topHeaderContainer' id='topHeaderContainer'>
                    <div className='topHeader' id='topHeader'>


                        <Link className='logoContainer' to='/Home'><div className='logoContent'></div></Link>

                        <div className='topSearchbarContainer' id='topSearchbarContainer'><TopHeaderSearchBar/></div>

                        <div className='topNav'>
                            <div className='topNavShipTo'>
                                <span className='topNavDeliverTo'>Deliver to:</span>
                                <div className='countryFlag'><img src={logo} alt='flag' loading='lazy'/><span>CA</span></div>
                            </div>
                            <div className='topNavLanguage'>
                                <span>
                                    <img src={currentLanguage} alt='currentLanguage' className='currentLanguage'/>
                                    <img src={currentLanguageSH} alt='currentLanguage' className='currentLanguageSH'/>
                                </span>
                                <span>English-USD</span>
                            </div>
                            <div className='topNavLogIn'>
                                <div className='signIn'>
                                    <span>
                                        <img src={customer} alt='customer' className='customer'/>
                                        <img src={customerSH} alt='customer' className='customerSH'/>
                                    </span>
                                    <span>Sign In</span>
                                </div>
                                <div className='signUp'>
                                    <Link to='/SignUp' className='signUpLink'>Sign up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='subHeaderContainer'>
                        <SubHeader></SubHeader>
                    </div>
                </div>
                <div className='homeSearchHeaderContainer'>
                    <HeaderSearchBar/>
                </div>
            </div>
        </div>
    );
}
export default Header