
import Link from 'next/link'
const Header = () => {

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
                      <Link href="#">History</Link>
                        {/* <a href="#" >History</a> */}
                      </li>
                      <li>
                        <a href="#" >Results</a>
                      </li>
                    </ul>
            </div>
            <div className="right-part-menu">
                <ul className="right-part-list">
                    <li>
                        <span className="text-end mb-0 user-details"><span className="user-id">John_0786</span><a href="#" className="reload-icon"><span><img src="assets/images/icons/reload-white.png" alt="reload"/></span></a> 102,84665.00 <span className="badge badge-yellow">VND</span></span>
                    </li>
                    <li className="hide-650">
                        <a href="#" className="play-lottery-btn">Play Lottery</a>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="lanugae-selector dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><span className="lang-flag"><img src="assets/images/icons/flag-english.png"/></span> Eng</a>
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
  