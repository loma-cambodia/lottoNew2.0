
const Footer = () => {

  return (
    <>
    <section className="footer py-3">
    <div className="container">
        <div className="footer-row">
            <div className="footer-logo">
                <a href="#">
                    <img src="assets/images/logo-footer.png" className="img-fluid"/>
                </a>
            </div>
            <div className="footer-links ms-auto">
                <div className="clearfix">
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#">Home</a></li>
                        <li className="list-inline-item"><a href="#">Betting</a></li>
                        <li className="list-inline-item"><a href="#">History</a></li>
                        <li className="list-inline-item"><a href="#">Results</a></li>
                        <li className="list-inline-item"><a href="#">Play Lottery</a></li>
                    </ul>
                </div>
                <div className="clearfix my-3">
                    <p className="mb-0 small text-white">Copyright © 2022. All Right Reserved By PokLotto</p>
                </div>
            </div>
        </div>
    </div>
  </section>
    </>
  )
}
export default Footer;
