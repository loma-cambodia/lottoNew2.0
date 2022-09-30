import Marquee from "react-fast-marquee";
import Link from "next/link";
const TransactionBanner = () => {
    return (
        <>
        {/*-Breadcrumb--*/}
        <section className="custom-breadcrumb">
            <div className="container">
                <div className="breadcrumb-heading">
                    <h1>TRANSACTION DETAILS</h1>
                </div>
                <div className="breadcrumb-list">
                    <ul>
                        <li><span>Home / Transaction Details</span></li>
                    </ul>
                </div>
            </div>
        </section>
        {/*--Breadcrumb--*/}
        </>
    )
}
export default TransactionBanner;