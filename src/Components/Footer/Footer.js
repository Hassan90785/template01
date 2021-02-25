import React, {Component} from 'react';
import logo from "../../images/cer-logo.png";
import footer from "../../images/footer.png";
class Footer extends Component {
    render() {
        return (
            <>
                <footer className="row bg-dark">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 bg-dark">
                    <div className="container footer-sizing px-0">
                     <img src={logo} alt="logo" className=" logo-sm "/>
                    <p className="pl-3 mt-2">1145 Forrest St.</p>
                    <p className="pl-3">Suite 200 Conshohocken, PA 19428</p>
                    <p className="pl-3 py-1"><span className="contact">+01 1245 67890</span></p>
                    <p className="pl-3">cerberusfootballfantasy@example.com</p>
                </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 px-0">
                    <div className="card pb-lg-5 pb-md-0  text-center about-us-img-card">
                    <img className="card-img" src={footer} alt="Card image"/>
                    <div className="card-img-overlay img-overlay-dark">
                        <div className="row">
                        <div className="col-3 col-md-4 col-lg-6">
                            <div className="card-header font-xs text-white">
                            API Solutions
                            </div>
                            <ul className="list-group ">
                                <li className="list-group-item bg-transparent footer-list"><a href="" className="color-gray-light">Sports Data</a></li>
                                <li className="list-group-item bg-transparent footer-list"><a href="" className="color-gray-light">NFL API</a></li>
                                <li className="list-group-item bg-transparent footer-list"><a href="" className="color-gray-light">MLB API</a></li>
                                <li className="list-group-item bg-transparent footer-list"><a href="" className="color-gray-light">NBA API</a></li>
                                <li className="list-group-item bg-transparent footer-list"><a href="" className="color-gray-light">NHL API</a></li>
                                <li className="list-group-item bg-transparent footer-list"><a href="" className="color-gray-light">NCAA Football API</a></li>
                                <li className="list-group-item bg-transparent footer-list"><a href="" className="color-gray-light">NCAA Basketball API</a></li>
                                <li className="list-group-item bg-transparent footer-list"><a href="" className="color-gray-light">PGA Golf API</a></li>
                            </ul>
                        </div>
                        <div className="col-3 col-md-4 col-lg-6">
                            <div className="card-header font-xs text-white">
                            QUICK LINKS
                            </div>
                            <ul className="list-group ">
                                <li className="list-group-item bg-transparent footer-list"><a href="" className="color-gray-light">Privacy</a></li>
                                <li className="list-group-item bg-transparent footer-list"><a href="" className="color-gray-light">Do Not Sell</a></li>
                                <li className="list-group-item bg-transparent footer-list"><a href="" className="color-gray-light">Terms</a></li>
                                <li className="list-group-item bg-transparent footer-list"><a href="" className="color-gray-light">Blog</a></li>
                                <li className="list-group-item bg-transparent footer-list"><a href="" className="color-gray-light">Contact</a></li>
                                <li className="list-group-item bg-transparent footer-list"><a href="" className="color-gray-light">Help</a></li>
                                <li className="list-group-item bg-transparent footer-list"><a href="" className="color-gray-light">Register</a></li>
                                <li className="list-group-item bg-transparent footer-list"><a href="" className="color-gray-light">Login</a></li>
                            </ul>
                        </div>
                     </div>
                        <div className="row mt-lg-3">
                            <div className="col-md-12">
                                <p className="text-center color-gray-light copy-right"><i className="far fa-copyright"></i> Copyright 2020 Cerberus Football Fantasy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
           </>
        );
    }
}

export default Footer;
