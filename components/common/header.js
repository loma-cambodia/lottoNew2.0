
import Link from 'next/link';
let name = '';
import { withIronSessionSsr } from "iron-session/next";

const Header = ({datauser}) => {

  // const userDatas = JSON.parse(localStorage.getItem("name"));
   console.log('Header:datauser:',datauser);
    return (
      <>
        <header className="header-top" data-spy="affix" data-offset-top="197">
    <div className="container">
        <div className="d-flex align-items-center">
            <div className="logo">
                <a href="#" className="logo-link">
                    <img src="assets/images/logo-header.png" className="logo-img" alt=""/>
                </a>
            </div>
            <div className="desktop-menu me-auto">
                    <ul className="desktop-menu-list">
                      <li>
                      <Link className="active"  href="/">Home</Link>
                        {/* <a className="active" href="#">Home</a> */}
                      </li>
                      <li>
                      <Link href="/bettingNew">Betting</Link>
                        {/* <a  href="#">Betting</a> */}
                      </li>
                      <li>
                      <Link href="/transaction">History</Link>
                        {/* <a href="#" >History</a> */}
                      </li>
                      <li>
                        <Link href="/results" >Results</Link>
                      </li>
                    </ul>
            </div>
            <div className="right-part-menu">
                <ul className="right-part-list">
                    <li>
                        <span className="text-end mb-0 user-details"><span className="user-id text-black" >{datauser && datauser.user && datauser.user.data  && datauser.user.data.name ? datauser.user.data.name[0].toUpperCase() + datauser.user.data.name.substring(1)  : "" }</span><a href="#" className="reload-icon"><span ><img src="assets/images/icons/reload-white.png" alt="reload"/></span></a> <span className='text-black'>0.00</span> <span className="badge badge-yellow text-black">USD</span></span>
                    </li>
                    <li className="hide-650">
                        <a href="#" className="play-lottery-btn ">Play Lottery</a>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="lanugae-selector dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><span className="lang-flag"><img src="assets/images/icons/flag-english.png"/></span> ENG</a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                    </li>
                    <li className="menu-mobile">
                        {/* <button className="navbar-toggler" type="button" onClick="openNav()"> */}
                        <button className="navbar-toggler" type="button">
                            <span className="navbar-toggler-icon"></span>
                          </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </header>
      </>
    )
  }
  export default Header;
  