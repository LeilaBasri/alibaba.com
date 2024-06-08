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
import { useState } from 'react';

const Header = () =>{
    const [topHeader , setTopHeader] = useState("topHeader");
    const [searchContent, setSearchContent]= useState("");
    const [topSearchbarDisplay , setTopSearchbarDisplay] = useState("topSearchbarContainer displayNone")
    const [isSearchBarPopup , setIsSearchBarPopup] = useState("true");
    const [topHeaderContainer , setTopHeaderContainer] = useState("topHeaderContainer");
    const [darkCover , setDarkCover] = useState("darkCover hide");

    window.onscroll=function() {stckyHeader()};
    
    function stckyHeader(){
        if (window.scrollY >= 20) {
            setTopHeader("topHeader stckyHeader")
            setTopSearchbarDisplay("topSearchbarContainer displayFlex")
        }
        else{
            setTopHeader("topHeader")
            setTopSearchbarDisplay("topSearchbarContainer displayNone");
        }      
    }
    return(
        <div className="homeHeaderContainer">
            <div className='homeHeader'></div>
            <div className={darkCover} id='darkCover'></div>
            <div className='headerAndSearchContainer'>
                <div className={topHeaderContainer} id='topHeaderContainer'>
                    <div className={topHeader} id='topHeader'>

                        <Link className='logoContainer' to='/Home'><div className='logoContent'></div></Link>

                        <div className={topSearchbarDisplay} id='topSearchbarContainer'>
                            <TopHeaderSearchBar setIsSearchBarPopup={setIsSearchBarPopup}/>
                        </div>

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
                        <SubHeader setTopHeaderContainer={setTopHeaderContainer} setTopSearchbarDisplay={setTopSearchbarDisplay} setDarkCover={setDarkCover} />
                    </div>
                </div>
                <div className='homeSearchHeaderContainer'>
                    <HeaderSearchBar isSearchBarPopup={isSearchBarPopup} searchContent={searchContent} setSearchContent={setSearchContent}/>
                </div>
            </div>
        </div>
    );
}
export default Header