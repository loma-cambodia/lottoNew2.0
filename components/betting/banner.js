import Marquee from "react-fast-marquee";
import Link from "next/link";
const Banner = () => {
    return (
        <>
        {/*-Breadcrumb--*/}
        <section className="custom-breadcrumb">
            <div className="container">
                <div className="breadcrumb-heading">
                    <h1>BETTING</h1>
                </div>
                <div className="breadcrumb-list">
                    <ul>
                        <li><span>Home / Betting</span></li>
                    </ul>
                </div>
            </div>
        </section>
        {/*--Breadcrumb--*/}
        </>
    )
}
export default Banner;